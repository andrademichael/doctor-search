exports.getDoctors = function(medicalIssue) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue + '&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
  .then(function(result) {
    var foundDoctors = [];
    console.log("API call returned: " + result);
    parsedResult = JSON.parse(result);
    for (i=0; i < parsedResult.length; i++)
      doctorArray.push(result[i]);
    return foundDoctors;
  })
  .fail(function(error) {
    console.log("fail");
  });
};

doctorSearchResult = getDoctors(condition);


exports.doctorSearchModule = doctorSearch;
