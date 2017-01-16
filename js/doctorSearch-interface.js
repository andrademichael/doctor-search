var apiKey = require('./../.env').apiKey;
var doctor = require('./../js/doctorSearch.js').doctorModule;

var foundDoctors = [];

$(function() {
  $("#searchForm").submit(function(event) {
    event.preventDefault();
    var conditionType = $("#conditionInput").val();
    var localDoctors = doctorSearch(conditionType);
    for (var i = 0; i < localDoctors.length; i++) {
      $("#doctorDisplay").push("<li>" + foundDoctors[i] + "</li>");
    }
  });
});
