var Doctor = ('./../js/doctorSearch.js').doctorModule;

var displayDoctors = function(results) {
  for (var i = 0; i < results.length; i++) {
    $("#doctorDisplay").push("<li>" + results[i] + "</li>");
  }
};

$(document).ready(function() {
  var currentSearch = new Doctor();
  $("#searchForm").submit(function(event) {
    event.preventDefault();
    var conditionName = $("#conditionInput").val();
    $("#conditionInput").val("");
    currentSearch.getDoctors(conditionName, displayDoctors);
  });
});
