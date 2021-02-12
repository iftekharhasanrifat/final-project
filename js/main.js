jQuery(function($) {
    "use strict";

    $(window).on('scroll', function() {});

    $(document).ready(function() {
        $(".chat-btn").on("click", function() {
            $(".wrapper").toggleClass('open');
            console.log("done")
        });
    });

});