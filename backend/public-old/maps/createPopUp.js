/**
 * Create a Mapbox GL JS `Popup`.
 **/
function createPopUp(currentFeature) {
  var popUps = document.getElementsByClassName('mapboxgl-popup');
  if (popUps[0]) popUps[0].remove();
  var popup = new mapboxgl.Popup({ closeOnClick: false })
    .setLngLat(currentFeature.geometry.coordinates)
    .setHTML(
      '<h3>Parking Location</h3>' +
        '<h4>' +
        currentFeature.properties.address +
        '</h4>'
    )
    .addTo(map);
}
export default createPopUp;
