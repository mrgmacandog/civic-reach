// Code is executed in strict mode
"use strict";

// Wrap all code in an anonymous function so functions cannot be called externally
(function() {
  // Run JS once the document is ready
  $(document).ready(function() {
    $("#registrationForm").validate({
      submitHandler: function() {
        // Create newOrg object with input values
        var newOrg = {
          name: $("#inputName")
            .val()
            .trim(),
          email: $("#inputEmail")
            .val()
            .trim(),
          phone: $("#inputPhone")
            .val()
            .trim(),
          address: $("#inputAddress")
            .val()
            .trim(),
          address2: $("#inputAddress2")
            .val()
            .trim(),
          city: $("#inputCity")
            .val()
            .trim(),
          state: $("#inputState").val(),
          zip: $("#inputZip")
            .val()
            .trim()
        };
        console.log(newOrg);

        // Add new org to Organizations table in database
        $.ajax({
          headers: {
            "Content-Type": "application/json"
          },
          type: "POST",
          url: "api/orgs",
          data: JSON.stringify(newOrg)
        }).then(function() {
          // Redirect to dashboard once org is registered
          window.location.replace("/dashboard");
        });
      }
    });
    // When Register button is clicked
    // $("#register-btn").on("click", function() {
    //   event.preventDefault();
    // });
  });
})();
