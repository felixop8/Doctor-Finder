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
    console.log(result.data[0].profile.title);
   })
  .fail(function(error){
     console.log("fail");
   });
};
exports.doctorModule = Doctor;

},{"./../.env":1}],3:[function(require,module,exports){
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

},{"./../js/doctor.js":2}]},{},[3]);
