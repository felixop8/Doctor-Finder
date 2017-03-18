(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "4daa0b0f29b749c2500a11db11dd0378";

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

function Doctor(){
}


Doctor.prototype.search = function(affection, doctorName, states, displayDoctors) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?name='+ doctorName + '&query= '+ affection + '&location=' + states + '&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=' + apiKey)
  .then(function(result) {
    displayDoctors(result.data);
   })
  .fail(function(error){
     console.log("fail");
   });
};
exports.doctorModule = Doctor;

},{"./../.env":1}],3:[function(require,module,exports){
var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctors = function(result) {

  var zone = {lat: result[0].practices[0].lat, lng: result[0].practices[0].lon };
  var map = new google.maps.Map(document.getElementById('map'), {
    center: zone,
    zoom: 6
  });


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


      var marker = new google.maps.Marker({
          position: {lat: result[i].practices[0].lat, lng: result[i].practices[0].lon },
          map: map
        });


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
  });
});

},{"./../js/doctor.js":2}]},{},[3]);
