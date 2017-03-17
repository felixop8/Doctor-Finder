var Doctor = require('./../js/doctor.js').doctorModule;


var displayDoctors = function(result) {
  for (var i = 0; i < result.length; i++) {
    $('#result').append('<li>' + result[i].profile.first_name + " " + result[i].profile.last_name + '<img src=' + result[i].profile.image_url + '></li>');
    console.log(result[i].profile.first_name);
  }
};

$(document).ready(function() {
  $('#doctorForm').submit(function(event) {
    event.preventDefault();
    $('#result').empty();
    var affection = $('#medicalIssue').val();
    $('#medicalIssue').val("");
    var doctorFinder = new Doctor();
    doctorFinder.search(affection, displayDoctors);
  });
});
