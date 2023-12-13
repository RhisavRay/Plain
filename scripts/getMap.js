// Initialize the Bing Maps map.
function initMap() {
  var map = new Microsoft.Maps.Map('#map-container');
}

// Handle the search form submission.
// document.getElementById('submit-button').addEventListener('click', function() {
//   // Get the pick-up and drop-off locations from the text boxes.
//   var pickupLocation = document.getElementById('pickup-location').value;
//   var dropoffLocation = document.getElementById('dropoff-location').value;

//   // Create a directions route request.
//   var directionsRequest = new Microsoft.Maps.Directions.DirectionsRequest();
//   directionsRequest.setWaypoints([pickupLocation, dropoffLocation]);

//   // Calculate the directions.
//   var directionsManager = new Microsoft.Maps.Directions.DirectionsManager();
//   directionsManager.calculateDirections(directionsRequest, function(response) {
//     // Display the directions on the map.
//     map.addDirections(response.routes[0]);
//   });
// });

document.getElementById('submit-button').addEventListener('click', function() {
  var pickupLocation = document.getElementById('pickup-location').value;
  var dropoffLocation = document.getElementById('dropoff-location').value;

  // Use the Bing Maps REST API to get directions
  var requestUrl = `https://dev.virtualearth.net/REST/v1/Routes/Driving?waypoint.1=${pickupLocation}&waypoint.2=${dropoffLocation}&key=ArO9d27LmQdGrctWsgGQilQsOlsuQr5hlgMZcLpdSxQBfMIj44tL_wNa4IK-n2F-`;

  fetch(requestUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      if (data.resourceSets.length > 0 && data.resourceSets[0].resources.length > 0) {
        // Parse the response data and display the route on the map
        var route = data.resourceSets[0].resources[0];
        var routePath = new Microsoft.Maps.LocationCollection(route.routePath.line.coordinates);

        var routeLine = new Microsoft.Maps.Polyline(routePath, {
          strokeColor: 'blue',
          strokeThickness: 5,
        });

        map.entities.push(routeLine);
      } else {
        console.error('No route data found in the response.');
      }
    })
    .catch(error => {
      console.error('Error getting directions:', error);
    });
});
