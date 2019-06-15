// Code is executed in strict mode
"use strict";

// Wrap all code in an anonymous function so functions cannot be called externally
(function() {
  // Run JS once the document is ready
  $(document).ready(function() {
    // When Register button is clicked
    $("#event-submit").on("click", function() {
      event.preventDefault();

      // Create newEvent object with input values
      var newEvent = {
        orgId: $("#orgName").val(),
        eventTitle: $("#eventTitle")
          .val()
          .trim(),
        type: $("#type").val(),
        date: $("#eventDate")
          .val()
          .trim(),
        startTime: $("#startTime")
          .val()
          .trim(),
        endTime: $("#endTime")
          .val()
          .trim(),
        venueName: $("#placeTitle")
          .val()
          .trim(),
        address: $("#eventInputAddress")
          .val()
          .trim(),
        address2: $("#eventInputAddress2")
          .val()
          .trim(),
        city: $("#eventInputCity")
          .val()
          .trim(),
        state: $("#eventInputState")
          .val()
          .trim(),
        zip: $("#eventInputZip").val(),
        description: $("#eventDescription")
          .val()
          .trim()
      };

      console.log(newEvent);

      // Add new event to Events table in database
      $.ajax({
        headers: {
          "Content-Type": "application/json"
        },
        type: "POST",
        url: "api/events",
        data: JSON.stringify(newEvent)
      }).then(function() {
        // Redirect to dashboard once event is added
        window.location.replace("/dashboard");
      });
    });
  });
})();
