// Code is executed in strict mode
"use strict";

// Wrap all code in an anonymous function so functions cannot be called externally
(function() {
  // Run JS once the document is ready
  $(document).ready(function() {
    // When location button is clicked
    $("#location-btn").on("click", function() {
      navigator.geolocation.getCurrentPosition(function(location) {
        console.log(location);
        // geocode(location.coords.latitude + "," + location.coords.longitude);
        window.location =
          "/get-zip/" +
          location.coords.latitude +
          "," +
          location.coords.longitude;
      });
    });

    // When search button is clicked
    $("#search-btn").on("click", function() {
      event.preventDefault();
      var zip = $("#input-zip")
        .val()
        .trim();
      window.location = "/zip/" + zip;
    });
  });
})();
