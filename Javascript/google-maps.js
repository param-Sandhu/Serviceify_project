// Initialize and add the map
let map, infoWindow;

async function initMap() {
  // The location of the in-person services
  const toronto = { lat: 43.65165, lng: -79.40909 };
  const homeDecor = {lat: 47.617596, lng: -122.331824};
  const hardware = {lat: 52.267110, lng: -113.812032};
  const books = {lat: 47.755861, lng: -122.324125};
  const repairs = {lat: 49.264628, lng: -123.102893};
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Car rental
  map = new Map(document.getElementById("map"), {
    zoom: 3,
    center: toronto,
    mapId: "DEMO_MAP_ID",
  });

  // The set of markers
  const marker1 = new AdvancedMarkerElement({
    map: map,
    position: toronto,
    title: "Car rental",
  });

  const marker2 = new AdvancedMarkerElement({
    map: map,
    position: homeDecor,
    title: "Home Decor",
  });

  const marker3 = new AdvancedMarkerElement({
    map: map,
    position: hardware,
    title: "Hardware",
  });

  const marker4 = new AdvancedMarkerElement({
    map: map,
    position: books,
    title: "Books",
  });

  const marker5 = new AdvancedMarkerElement({
    map: map,
    position: repairs,
    title: "Repairs",
  });
  // This places a marker on the user's current location
  const locationButton = document.createElement("button");

  locationButton.textContent = "Pan to Current Location";
  locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  locationButton.addEventListener("click", () => {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          const userMarker = new google.maps.Marker({
            position: pos,
            map: map,
          });
          infoWindow.setPosition(pos);
          infoWindow.setContent("Location found.");
          infoWindow.open(map);
          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });
}

// This function displays a message if there is an error with the geolocation feature
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}


initMap();