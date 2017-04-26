global.jQuery = require("jquery");
var Doctor = require('./../js/doctor.js').doctorModule;



function buildTemplate(jQuery, name, img, specialty, education, address, phone, bio) {
  $(jQuery).prepend(
    "<div class='list-group'>" +
    "<a class='list-group-item'>" +
    "<img src=" + img + "></img>" +
    "<h4 class='list-group-item-heading'>" + name + '</h4>' +
    "<h4 class='list-group-item-heading'>" + specialty + '</h4>' +
    "<h4 class='list-group-item-heading'>" + education + '</h4>' +
    "<h4 class='list-group-item-heading'>" + address + '</h4>' +
    "<h4 class='list-group-item-heading'>" + phone + '</h4>' +
    "<p class='list-group-item-text'>" + bio + "</p>" +
    "</a>" +
    "</div>");
}

var displayDoctors = function(name, img, specialty, education, address, phone, bio) {
  buildTemplate('.modal-body', name, img, specialty, education, address, phone, bio);
};

$(function() {
  var doctorObject = new Doctor();
  $('#search').click(function() {
    console.log('clicked');
    var name = $('#name').val();
    $('#name').val('');
    doctorObject.getDoctors(name, displayDoctors);
  });
});

(function($) {
  $('.btn-default').on('click', function(e) {
    e.preventDefault();
    var obj = $(this);

    obj.addClass('active');

    setTimeout(function() {
      obj.removeClass('active');
    }, 1500);

    // Load Boats
    if (obj.hasClass('btn-load-boats')) {
      if (!$('.load-boats-box').hasClass('open')) {
        $('.load-boats-box').slideToggle(1000);
        setTimeout(function() {
          $('.load-boats-box').addClass('open');
        }, 700);
      }
    }

    // Load Boats
    if (obj.hasClass('btn-load-destination')) {
      if (!$('.load-destinations-box').hasClass('open')) {
        $('.load-destinations-box').slideToggle(1000);
        setTimeout(function() {
          $('.load-destinations-box').addClass('open');
        }, 700);
      }
    }
  });

  // Fade In Page
  $(document).ready(function() {
    setTimeout(function() {
      $('body').addClass('dom-ready');
    }, 300);
  });
})(jQuery);