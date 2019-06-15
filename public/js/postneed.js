// Code is executed in strict mode
"use strict";

// Wrap all code in an anonymous function so functions cannot be called externally
(function() {
  // Run JS once the document is ready
  $(document).ready(function() {
    // When Register button is clicked
    $("#donationSubmit").on("click", function() {
      event.preventDefault();

      // Create newNeed object with input values
      var newNeed = {
        orgId: $("#orgName").val(),
        needTitle: $("#needTitle")
          .val()
          .trim(),
        type: $("#type").val(),
        quantity: $("#needQuantity")
          .val()
          .trim(),
        description: $("#itemDescription")
          .val()
          .trim()
      };

      console.log(newNeed);

      // Add new need to Needs table in database
      $.ajax({
        headers: {
          "Content-Type": "application/json"
        },
        type: "POST",
        url: "api/needs",
        data: JSON.stringify(newNeed)
      }).then(function() {
        // Redirect to dashboard once event is added
        window.location.replace("/dashboard");
      });
    });
  });
})();
