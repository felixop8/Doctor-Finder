var Doctor = require('./../js/doctor.js').doctorModule;


var displayDoctors = function(result) {
  console.log(result[0].practices[0].visit_address.city);
  if (result.length !== 0) {
    for (var i = 0; i < result.length; i++) {
      $('#results').append(
      "<div class='row' id='felix'>" +
        "<div class='col-md-3'>" +
          "<img src='" + result[i].profile.image_url + "'>" +
        "</div>" +
        "<div class='col-md-8'>" +
          "<h2>" + result[i].profile.first_name + ' ' + result[i].profile.last_name + ' ' + result[i].profile.title + "</h2>" +
          "<p>" + result[i].practices[0].visit_address.city + ' ' + result[i].practices[0].visit_address.state  + "</p>" +
          "<p>" + result[i].practices[0].visit_address.street + ', ' + result[i].practices[0].visit_address.zip  + "</p>" +
          "<p>" + "Telephone: " + result[i].practices[0].phones[0].number  + "</p>" +
          "<textarea class='form-control' rows='5'>" + result[i].profile.bio + "</textarea>" +
        "</div>" +
      "</div>"
      );
    }
  } else {
    $('#results').text("No results found");
  }
};

$(document).ready(function() {
  $('#doctorForm').submit(function(event) {
    event.preventDefault();
    $('#results').empty();
    var affection = $('#medicalIssue').val();
    var doctorName = $('#doctorName').val();
    var states = $('#states').val();
    $('#medicalIssue').val("");
    $('#doctorName').val("");
    var doctorFinder = new Doctor();
    doctorFinder.search(affection, doctorName, states, displayDoctors);



    var portland = {lat: 45.5230622, lng: -122.6764816};
    var arraymix = [{lat: 45.5230622, lng: -122.6764816}, {lat: 45.51735, lng:  -122.79763} ];
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 9,
    center: portland
    });

      for (var i = 0; i <= arraymix.length; i++) {
        var marker = new google.maps.Marker({
          position: arraymix[i],
          map: map
        });
      }
  });
});
