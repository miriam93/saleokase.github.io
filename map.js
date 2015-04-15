// () -> ()
function initialize() {
  var mapOptions = {
    center: { lat: 40.417, lng: -3.702}, // Puerta del Sol, Madrid
    zoom: 10,
    disableDefaultUI: true
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  
  // Placeholder for showcase purpose only
  google.maps.event.addListener(map, 'click', function(event) {
    toggleEventPane();
  });
  
  // gets user coordinates on right click
  google.maps.event.addListener(map, 'rightclick', function(event) {
    var latitude = event.latLng.lat();
    var longitude = event.latLng.lng();
    console.log(latitude + ', ' + longitude);
  
    map.panTo(new google.maps.LatLng(latitude, longitude));
});
}

google.maps.event.addDomListener(window, 'load', initialize);