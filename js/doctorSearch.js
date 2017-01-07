//getDoctors method returns an array of doctor objects
exports.getDoctors = function(medicalIssue) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue + '&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
  //success branch
  .then(function(result) {
    var parsedResult = JSON.parse(result)
    console.log("API call returned: " + result + ", which was then parsed into: " + parsedResult);
    //populate doctors array by looping through result's data objects
    var doctors = [];
    parsedResult.data.forEach(function(doctor) {
      doctors.push(doctor);
    });
    return doctors;
  })
  //failure branch
  .fail(function(error) {
    console.log("fail");
  });
};

    //outer loop goes through every returned doctor object
    result.data.forEach(function(doctor) {
      //inner loop goes through that doctor's specialties looking for match to the search term
      doctor.specialties.forEach(function(specialty) {
        if
      });
      if ()
      foundDoctors.push(key + ": " + data.obj[key])
    });


doctorSearchResult = doctorSearch(condition);
