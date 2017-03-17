var apiKey = require('./../.env').apiKey;

function Doctor(){
}


Doctor.prototype.search = function(affection, displayDoctors) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ affection + '&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
  .then(function(result) {
    displayDoctors(result.data);
   })
  .fail(function(error){
     console.log("fail");
   });
};
exports.doctorModule = Doctor;
