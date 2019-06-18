// Capture Button Click
$("#login-btn").on("click", function(event) {
  // prevent page from refreshing when form tries to submit itself
  event.preventDefault();

  // Capture user inputs and store them into variables
  var orgId = $("#inputGroupSelect01")
    .val()
    .trim();

  if (orgId !== "Choose...") {
    // Console log each of the user inputs to confirm we are receiving them
    console.log(orgId);

    // Clear sessionStorage
    sessionStorage.clear();

    // Store all content into sessionStorage
    sessionStorage.setItem("orgId", orgId);

    // Redirect to dashboard adter logging in
    window.location = "/dashboard";
  }
});
