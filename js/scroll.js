$(document).ready(function(){
    jQuery.fn.scrollBar = function() {
        $(".progress_bar").css( {"width", "100%"}, function () {
          $(this).scrollBar();
        });
       return this;
      };

      function move() {
  var elem = document.getElementById("progress_bar");
  var width = 1;
  var id = setInterval(frame, 10);
  function frame() {
      if (width >= 100) {
          clearInterval(id);
      } else {
          width++;
          elem.style.width = width + '%';
      };
  };
};
    };
