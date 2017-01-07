var apiKey = require('./../.env').apiKey;

var doctorSearch = require('./../js/doctorSearch.js').doctorSearchModule;

$(function() {
  $("#searchForm").submit(function(event) {
    event.preventDefault();
    conditionType = $("#conditionInput").val();
    displayDoctors = doctorSearch(conditionType);
    for (var i = 0; i < localDoctors.length; i++) {
      $("#doctorDisplay").push("<li>" + foundDoctors[i] + "</li>");
    }
  });
});
