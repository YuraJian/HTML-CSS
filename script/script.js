$('.company__position').on('click', function() {
    $(this).children('.company__position-text').slideToggle(300);
    $(this).toggleClass('company__position-bg-color');
    $(this).children('.company__position-info').children('.company__position-arrow').toggleClass('company__position-arrow-rotate');
})

$('.features__attraction-card > .features__attraction-card-info').on('click', function() {
    $(this).next('.features__attraction-text').slideToggle(300);
    $(this).children('.features__attraction-card-img').children('svg').children('path').toggleClass('features__attraction-card-img-fill');
    $(this).children('.features__attraction-card-img').children('svg').toggleClass('features__attraction-card-img-rotate');
})