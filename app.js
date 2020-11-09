window.addEventListener('load', () => {
  let long;
  let lat;
  let dummy;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;
    });
  }
});
