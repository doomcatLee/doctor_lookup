var apiKey = require('./../.env').betterDoctorKey;

Doctor = function() {}

Doctor.prototype.getDoctors = function(name, displayDoctors) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?name=' + name + '&skip=0&limit=10&user_key=' + apiKey).then(function(response) {
    for (var i = 0; i < response.data.length; i++) {
      displayDoctors(response.data[i].profile.first_name + ' ' +
        response.data[i].profile.last_name + ', ' + response.data[0].profile.title,
        response.data[i].specialties[0].name,
        response.data[i].profile.bio);
    }
  }).fail(function(error) {
    $('.showWeather').text('error');
  });
}

exports.doctorModule = Doctor;
