// Initialize the Bing Maps map.
function initMap() {
  var map = new Microsoft.Maps.Map('#map-container');
}

// Handle the search form submission.
document.getElementById('submit-button').addEventListener('click', function() {
  // Get the pick-up and drop-off locations from the text boxes.
  var pickupLocation = document.getElementById('pickup-location').value;
  var dropoffLocation = document.getElementById('dropoff-location').value;

  // Create a directions route request.
  var directionsRequest = new Microsoft.Maps.Directions.DirectionsRequest();
  directionsRequest.setWaypoints([pickupLocation, dropoffLocation]);

  // Calculate the directions.
  var directionsManager = new Microsoft.Maps.Directions.DirectionsManager();
  directionsManager.calculateDirections(directionsRequest, function(response) {
    // Display the directions on the map.
    map.addDirections(response.routes[0]);
  });
});
