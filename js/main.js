      $(function () {

        var change_img_time     = 10000;
        var transition_speed    = 5;

        var simple_slideshow    = $("#slideshow"),
            listItems           = simple_slideshow.children('section'),
            listLen             = listItems.length,
            i                   = 0,

            changeList = function () {

                listItems.eq(i).fadeOut(transition_speed, function () {
                    i += 1;
                    if (i === listLen) {
                        i = 0;
                    }
                    listItems.eq(i).fadeIn(transition_speed);
                });

            };
            listItems.not(':first').hide();
            setInterval(changeList, change_img_time);
    });



    /*$("#slideshow > section:gt(0)").hide();
    setInterval(function() {
      $('#slideshow > section:first')
        .fadeOut(2000)
        .next()
        .fadeIn(2000)
        .end()
        .appendTo('#slideshow');
    }, 5000);*/


    /*function slideSwitch() {
            var $active = $('#slideshow section.active');
            var $next = $active.next();

            $next.addClass('active');

            $active.removeClass('active');
        }

        $(function() {
            setInterval( "slideSwitch()", 5000 );
        }); */
