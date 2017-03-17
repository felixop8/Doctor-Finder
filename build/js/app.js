(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "4daa0b0f29b749c2500a11db11dd0378";

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

function Doctor(){
}


Doctor.prototype.search = function(affection) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ affection + '&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
  .then(function(result) {
    for (var i = 0; i < result.data.length; i++) {
      $('#result').append('<li>' + result.data[i].profile.first_name + " " + result.data[i].profile.last_name + '<img src=' + result.data[i].profile.image_url + '></li>');
      console.log(result.data[i].profile.first_name);
    }
   })
  .fail(function(error){
     console.log("fail");
   });
};

exports.doctorModule = Doctor;

},{"./../.env":1}],3:[function(require,module,exports){
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

},{"./../js/doctor.js":2}]},{},[3]);
