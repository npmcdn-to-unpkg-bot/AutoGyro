/**
 * Created by nonzar on 2016/4/17.
 */
$(function () {
    var $navbar = $(".ag-nav .nav-bar"), lastMode = 0;
    $(".ag-nav .menu-sg").click(function () {
        switch (lastMode) {
            case 1:
                $navbar.removeClass("active");
                lastMode = 0;
                break;
            case 2:
                $navbar.removeClass("mode-search").addClass("mode-menu");
                lastMode = 1;
                break;
            default:
                $navbar.removeClass("mode-search").addClass("mode-menu active");
                lastMode = 1;
        }
    });
    $(".ag-nav .search-sg").click(function () {
        switch (lastMode) {
            case 1:
                $navbar.removeClass("mode-menu").addClass("mode-search");
                lastMode = 2;
                break;
            case 2:
                $navbar.removeClass("active");
                lastMode = 0;
                break;
            default:
                $navbar.removeClass("mode-menu").addClass("mode-search active");
                lastMode = 2;
        }
    });
    $navbar.find("> ul > li.drop > a").click(function () {
        $(this).siblings("ul").toggleClass("active");
    });
});