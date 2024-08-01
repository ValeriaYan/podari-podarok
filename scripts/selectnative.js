document.querySelectorAll('select.custom').forEach(function(select) {
    var numberOfOptions = select.options.length;
    select.classList.add('hidden');

    var customSelectWrapper = document.createElement('div');
    customSelectWrapper.className = 'custom-select';
    select.parentNode.insertBefore(customSelectWrapper, select);
    customSelectWrapper.appendChild(select);

    var styledSelect = document.createElement('div');
    styledSelect.className = 'select-styled';
    styledSelect.textContent = select.options[select.selectedIndex].textContent;
    customSelectWrapper.appendChild(styledSelect);

    var list = document.createElement('ul');
    list.className = 'select-options';
    styledSelect.after(list);

    for (var i = 0; i < numberOfOptions; i++) {
        var option = select.options[i];
        var listItem = document.createElement('li');
        listItem.textContent = option.textContent;
        listItem.setAttribute('data-rel', option.getAttribute('rel'));

        if (option.disabled) {
            listItem.classList.add('disabled-option');
        } else if (option.selected) {
            listItem.classList.add('active-option');
        }

        list.appendChild(listItem);
    }

    var listItems = list.querySelectorAll('li');

    styledSelect.addEventListener('click', function(e) {
        e.stopPropagation();
        document.querySelectorAll('div.select-styled.active').forEach(function(activeElem) {
            if (activeElem !== styledSelect) {
                activeElem.classList.remove('active');
                activeElem.nextSibling.style.display = 'none';
            }
        });
        styledSelect.classList.toggle('active');
        list.classList.toggle('active');//.style.display = list.style.display === 'none' ? 'block' : 'none';
    });

    listItems.forEach(function(listItem) {
        listItem.addEventListener('click', function(e) {
            e.stopPropagation();
            styledSelect.textContent = listItem.textContent;
            select.value = listItem.textContent;
            styledSelect.classList.remove('active');
            list.classList.remove('active');
            listItems.forEach(function(listItem2) {
                listItem2.classList.remove('active-option');
            })
            this.classList.add('active-option');
            console.log(listItem.textContent);
        });
    });

    document.addEventListener('click', function() {
        styledSelect.classList.remove('active');
        list.classList.remove('active');
    });
});
