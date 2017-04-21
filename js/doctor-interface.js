var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctors = function(name, specialty, bio) {
  $('.showWeather').append('<li>' + 'Name: ' + name + '</li>');
  $('.showWeather').append('<li>' + 'Specialty: ' + specialty + '</li>');
  $('.showWeather').append('<li>' + 'Bio: ' + bio + '</li>');

};

$(function() {
  var doctorObject = new Doctor();
  $('#weather-location').click(function() {
    var name = $('#location').val();
    $('#location').val('');
    doctorObject.getDoctors(name, displayDoctors);
  });
});
