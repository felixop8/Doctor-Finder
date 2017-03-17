var Doctor = require('./../js/doctor.js').doctorModule;

$(document).ready(function() {
  $('#doctorForm').submit(function(event) {
    event.preventDefault();
    var affection = $('#medicalIssue').val();
    var doctorFinder = new Doctor();
    doctorFinder.search(affection);
  });
});
