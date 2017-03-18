var Doctor = require('./../js/doctor.js').doctorModule;


var displayDoctors = function(result) {
  if (result.length !== 0) {
    for (var i = 0; i < result.length; i++) {
      $('#result').append('<li>' + result[i].profile.first_name + " " + result[i].profile.last_name + " " + result[i].profile.title + " " + '<img src=' + result[i].profile.image_url + '></li>');
    }
  } else {
    $('#result').text("No results found");
  }
};

$(document).ready(function() {
  $('#doctorForm').submit(function(event) {
    event.preventDefault();
    $('#result').empty();
    var affection = $('#medicalIssue').val();
    var doctorName = $('#doctorName').val();
    var states = $('#states').val();
    $('#medicalIssue').val("");
    $('#doctorName').val("");
    var doctorFinder = new Doctor();
    doctorFinder.search(affection, doctorName, states, displayDoctors);
  });
});
