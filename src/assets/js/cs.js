// jQuery
(function($) {
  "use strict";
    $(document).ready(function() {
        // Main Slider
        $('.main-flexslider').flexslider({
            directionNav: true,
            controlNav: false,
            animation: "fade",
            slideshowSpeed: 7000,
            prevText: "",
            nextText: "",
        });
    });
})(jQuery);
