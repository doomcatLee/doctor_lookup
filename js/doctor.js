var apiKey = require('./../.env').apiKey;

Doctor = function() {}

Doctor.prototype.getDoctors = function(query, displayDoctors) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + query + '&skip=0&limit=10&user_key=' + apiKey).then(function(response) {
    for (var i = 0; i < response.data.length; i++) {
      displayDoctors(response.data[i].profile.first_name + ' ' +
        response.data[i].profile.last_name + ', ' + response.data[0].profile.title,
        response.data[i].profile.image_url,
        response.data[i].specialties[0].name,
        response.data[i].educations[0].school + ', ' + response.data[i].educations[0].degree,
        response.data[i].practices[0].visit_address.street + ', ' + response.data[i].practices[0].visit_address.city + ', ' + response.data[i].practices[0].visit_address.state,
        response.data[i].practices[0].phones[0].number.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2 $3'),
        response.data[i].profile.bio);
    }
  }).fail(function(error) {
    $('.showWeather').text('error');
  });
}

exports.doctorModule = Doctor;
