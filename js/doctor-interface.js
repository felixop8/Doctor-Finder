var Doctor = require('./../js/doctor.js').doctorModule;

$(document).ready(function() {
  $('#doctorForm').submit(function(event) {
    event.preventDefault();
    $('#result').empty();
    var affection = $('#medicalIssue').val();
    $('#medicalIssue').val("");
    var doctorFinder = new Doctor();
    doctorFinder.search(affection);
  });
});
