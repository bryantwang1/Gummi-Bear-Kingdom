var $window = $(window);
var $animation_elements;

function checkView() {
    var windowHeight = $window.height();
    var windowTopPosition = $window.scrollTop();
    var windowBottomPosition = (windowTopPosition + windowHeight);

    $.each($animation_elements, function () {
        var $element = $(this);
        var elementHeight = $element.outerHeight();
        var elementTopPosition = $element.offset().top;
        var elementBottomPosition = (elementTopPosition + elementHeight);

        if ((elementBottomPosition >= windowTopPosition) &&
            (elementTopPosition <= windowBottomPosition)) {
            $element.addClass('in-view');
        }
    });
}

$(function () {
    $animation_elements = $(".animation-block");

    $window.on('scroll', checkView);
    $window.on('scroll resize', checkView);

    $window.trigger('scroll');
});