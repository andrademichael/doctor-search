var apiKey = require('./../.env').apiKey;
var doctor = require('./../js/doctorSearch.js').doctorModule;

var displayDoctors = function(results) {
  for (var i = 0; i < results.length; i++) {
    $("#doctorDisplay").push("<li>" + results[i] + "</li>");
  }
};

var foundDoctors = [];

$(function() {
  $("#searchForm").submit(function(event) {
    event.preventDefault();
    var currentSearch = new Doctor();
    var conditionName = $("#conditionInput").val();
    $("#conditionInput").val("");
    var foundDoctors = currentSearch.getDoctors(conditionName);
  });
});
