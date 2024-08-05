$(function () {

let form = $('.js-form');

// Ввод только цифр
$('.Input_number').on('keypress', function(e){
    let charCode = (e.which) ? e.which : e.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
});

let formValidate = function() {


    $.validator.methods.email = function( value, element ) {
        return this.optional( element ) || /^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/.test( value );
    }

    $.validator.addMethod('phone', function(value, element) {
        return this.optional(element) || /((8|\+7)-?)?\(?\d{3}\)?-?\d{1}-?\d{1}-?\d{1}-?\d{1}-?\d{1}-?\d{1}-?\d{1}/.test(value);
    });




    form.each(function(){
        let thisForm = $(this);
        let url = thisForm.attr('action');

        thisForm.validate({
            focusInvalid: false,
            errorElement: 'span',
            errorClass: 'Input_errorMessage',
            errorPlacement: function(error, element) {
                error.insertAfter(element)
            },
            highlight: function(element) {
              $(element).closest(".form-field").addClass('form-field--error');
              $(element).closest(".Input_inputBlock").addClass('Input_error');
              $(element).closest(".Input_inputBlock").removeClass('Input_success');
            },
            unhighlight: function(element) {
                $(element).closest(".form-field").removeClass('form-field--error');
                $(element).closest(".Input_inputBlock").removeClass('Input_error');
                $(element).closest(".Input_inputBlock").addClass('Input_success');
            },
            rules: {
                phone: {
                    required: true,
                    phone: true
                },
                email: {
                    required: true,
                    email: true,
                },
            },
            messages: {
                phone: {
                    required: 'Телефон не может быть пустым',
                    phone: 'Телефон заполнен неверно'
                },
                email: {
                    required: "Email не может быть пустым",
                    email: "Email заполнен неверно",
                }
            },

            submitHandler: function (form, event) {
                thisForm.find('.form-popup').addClass('_active');
                // let noAjaxSubmit = thisForm.attr('data-no-ajax-submit');

                // if (noAjaxSubmit) {
                //     return true;
                // }
                
            
                // event.preventDefault();

                // let data = new FormData(),
                //     formParams = thisForm.serializeArray();
                //     console.log(formParams)

                // $.each(thisForm.find('.js-input-file'), function (i, tag) {
                //     $.each($(tag)[0].files, function (i, file) {
                //         data.append(tag.name, file);
                //     });
                // });

                // $.each(formParams, function (i, val) {
                //     data.append(val.name, val.value);
                // });

                // data.append('key', 'value');

                // /* ******* */
                // $.ajax({
                //     url: thisForm[0].action,
				// 	type: 'POST',
				// 	processData: false,
				// 	contentType: false,
				// 	data: data,
                //     beforeSend: function (data) {
                //         console.log(true)
                //         thisForm.find('.disabled-button').attr('disabled', 'disabled');
                //     },
                //     success: function (data) {
                //         thisForm.find('.popup').addClass('_active');
                //         thisForm.find('.disabled-button').prop('disabled', false);
                //         console.log(true)
                //     },
                //     error: function (xhr, ajaxOptions, thrownError) {
                //         console.log(xhr.status);
                //         console.log(thrownError);
                //     }
                // });
                // return false;

            }
        });

    });
};

formValidate();

window.formValidate = formValidate;

// function enableButton(form) {
//     const requiredFields = form.find('input[required]');
//     const requiredCheckboxes = requiredFields.find('input[type="checkbox"]');
//     console.log(requiredFields)

//     for(let i = 0; i < requiredFields.length; i++) {
//         if(requiredFields[i].value === '') {
//             console.log(requiredFields[i].value)
//             form.find('.disabled-button').prop('disabled', true);
//         }
//     } 
//     for(let i = 0; i < requiredCheckboxes.length; i++) {
//         if(requiredCheckboxes[i].checked = false) {
//             form.find('.disabled-button').prop('disabled', true)
//         }
//     }

//     form.find('.disabled-button').prop('disabled', false);
// }

// const checkboxes = document.querySelectorAll('.CreditCard_checkbox .checkbox');
// checkboxes.forEach(btn => {
//     btn.addEventListener('click', () => {
//         enableButton(checkboxes, form);
//     })
// })

document.querySelectorAll('.Input_inputBlock input').forEach((input) => {
    input.addEventListener('input', () => {
        jQuery(input).valid(); 
        // enableButton(form);
    });
})
})

