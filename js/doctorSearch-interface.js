var doctorSearch = require('./../js/doctorSearch.js').doctorSearchModule;

$(function() {
  $("searchForm").submit(function(event) {
    event.preventDefault();
    condition = $("#conditionInput").val();
    displayDoctors = doctorSearch(condition);
    for (var i = 0; i < localDoctors.length; i++) {
      $("#doctorDisplay").push("<li>" + foundDoctors[i] + "</li>");
    }
  });
});
