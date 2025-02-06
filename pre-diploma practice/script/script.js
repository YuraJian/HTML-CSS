$('.company__position').on('click', function() {
    $(this).children('.company__position-text').slideToggle(300);
    $(this).toggleClass('company__position-bg-color');
    $(this).children('.company__position-info').children('.company__position-arrow').toggleClass('company__position-arrow-rotate');
})