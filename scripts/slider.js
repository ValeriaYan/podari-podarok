
const sliders = document.querySelectorAll('.slider');
const multiSliders = document.querySelectorAll('.multi-slider');
const doubleSliders = document.querySelectorAll('.double-slider');
const paginationSliders = document.querySelectorAll('.pagination-slider');

$('.your-element').slick('setPosition'); 
sliders.forEach((item, key) => {
    const prev = item.parentNode.querySelector('.prev');
    const next = item.parentNode.querySelector('.next');
    item.classList.add(`slider-${key}`)
    prev?.classList.add(`prev-${key}`);
    next?.classList.add(`next-${key}`);
    $(`.slider-${key}`).slick({
        prevArrow: $(`.prev-${key}`),
        nextArrow: $(`.next-${key}`),
    })
})

paginationSliders.forEach((item, key) => {
    const prev = item.parentNode.querySelector('.prev');
    const next = item.parentNode.querySelector('.next');
    item.classList.add(`slider-${key}`)
    prev?.classList.add(`prev-${key}`);
    next?.classList.add(`next-${key}`);
    $(`.slider-${key}`).slick({
        prevArrow: $(`.prev-${key}`),
        nextArrow: $(`.next-${key}`),
        dots: true,
        dotsClass: 'Carousel_imgDots dots',
        customPaging : function(slider, i) {
            const img = $(slider.$slides[i]).find('.Carousel_imgCarousel').attr('src');
            return `<a><img src="${img}" class="Carousel_imgDot dot"></a>`;
        },
        responsive: [
            {
              breakpoint: 961,
              settings: {
                prevArrow: $(`.mini-prev`),
                nextArrow: $(`.mini-next`),
              }
            },
          ]
    });
})

multiSliders.forEach((item, key) => {
    const prev = item.parentNode.querySelector('.multi-prev');
    const next = item.parentNode.querySelector('.multi-next');
    item.classList.add(`multi-slider-${key}`)
    prev?.classList.add(`multi-prev-${key}`);
    next?.classList.add(`multi-next-${key}`);
    $(`.multi-slider-${key}`).slick({
        prevArrow: $(`.multi-prev-${key}`),
        nextArrow: $(`.multi-next-${key}`),
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1150,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
                breakpoint: 800,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
              },
          ]
    })
})

doubleSliders.forEach((item, key) => {
    const prev = item.parentNode.querySelector('.double-prev');
    const next = item.parentNode.querySelector('.double-next');
    item.classList.add(`double-slider-${key}`)
    prev?.classList.add(`double-prev-${key}`);
    next?.classList.add(`double-next-${key}`);
    $(`.double-slider-${key}`).slick({
        prevArrow: $(`.double-prev-${key}`),
        nextArrow: $(`.double-next-${key}`),
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1180,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
          ]
    })
})
