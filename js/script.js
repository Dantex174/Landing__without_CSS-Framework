$(document).ready(function(){
    $('.header__burger').click(function(event) {
        $('.header__burger, .navMenu').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.navMenu__link').click(function(event) {
        $('.header__burger, .navMenu').removeClass('active');
        $('body').removeClass('lock');
    })
    $('.menu__food, .menu__drinks').click(function(event) {
        $('.menu__food, .menu__drinks, .menu__food-cards, .menu__drinks-cards').toggleClass('selected');
    });
    $('#selector_one').click(function(event) {
        $('#testimonial_one, #selector_one').addClass('active');
        $('#testimonial_two, #testimonial_three, #selector_two, #selector_three').removeClass('active');
    });
    $('#selector_two').click(function(event) {
        $('#testimonial_two, #selector_two').addClass('active');
        $('#testimonial_one, #testimonial_three, #selector_one, #selector_three').removeClass('active');
    });
    $('#selector_three').click(function(event) {
        $('#testimonial_three, #selector_three').addClass('active');
        $('#testimonial_one, #testimonial_two, #selector_one, #selector_two').removeClass('active');
    });
});