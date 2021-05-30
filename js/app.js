/***************************************************

==================== JS INDEX ======================

****************************************************

    01. Menu Js	
    02. Nice Select  Js
    03. Accoridon Js

****************************************************/

(function ($) {
    "use strict";

    ////////////////////////////////////////////////////

    // 01. Menu Js

    // Toggel Menu
    $('#menu-toggle').click(function (e) {

        e.preventDefault();

        $('.nav-menu').slideToggle();

    });

    // Toggel Sub menu
    $('.submenu-toggle').click(function () {

        $(this).prev().slideToggle();

    });

       ////////////////////////////////////////////////////

    // 02. Nice Select Js

    $(".category-select").niceSelect();

     ///////////////////////////////////////////////////

    // 03. Accordion Js

    $(".accordion_box:first").addClass("active")

    $(".accordion_box:first").children(".acc_trigger").children("i").addClass("fas fa-minus");

    $(".accordion_box:first").children(".acc_trigger").addClass("selected").next(".acc_container").show();

    $(".acc_trigger").click(function (e) {

        if ($(this).hasClass("selected")) {

            $(this).removeClass("selected");

            $(this).children("i").removeClass("fa-minus");

            $(this).next().slideUp();

            $(this).parent().removeClass("active");

        } else {
            $(".acc_trigger").removeClass("selected");

            $(this).addClass("selected");

            $(".acc_trigger").children("i").removeClass("fa-minus");

            $(this).children("i").addClass("fa-minus");

            $(".acc_trigger").next().slideUp();

            $(this).next().slideDown();

            $(".accordion_box").removeClass("active");

            $(this).parent().addClass("active");

        }
    });

})(jQuery);