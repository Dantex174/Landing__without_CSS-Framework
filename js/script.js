$(document).ready(function(){
    $('.header__burger').click(function(event) {
        $('.header__burger, .navMenu').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.menu__food, .menu__drinks').click(function(event) {
        $('.menu__food, .menu__drinks, .menu__food-cards, .menu__drinks-cards').toggleClass('selected');
    });
});