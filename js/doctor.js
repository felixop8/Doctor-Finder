

function Doctor(){
}


Doctor.prototype.search = function(affection, doctorName, states, displayDoctors) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?name='+ doctorName + '&query= '+ affection + '&location=' + states + '&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=' + '4daa0b0f29b749c2500a11db11dd0378')
  .then(function(result) {
    displayDoctors(result.data);
   })
  .fail(function(error){
     console.log("fail");
   });
};
exports.doctorModule = Doctor;
