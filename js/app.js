$(document).ready(function () {

    $(this).foundation();


    // Add smooth scrolling to all links
    $("a.anchor").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });


    $('.chart').circleProgress({
        size: 90,
        fill: { color: '#fff' }
    });

    $('.chart').each(function (index, value) {
        var percent = $('.chart').eq(index).data( "value" );
        var percent_txt = (percent * 100) + "%";
        $('.chart').eq(index).children('span').text(percent_txt);
    });

})