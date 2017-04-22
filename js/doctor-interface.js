var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctors = function(name, specialty, bio) {
  $('.modal-body').append("<div class='list-group'>" +
    "<a class='list-group-item'>" + "<h4 class='list-group-item-heading'>" + name + '</h4>' + "<p class='list-group-item-text'>" + bio + "</p></a></div>");
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
