export class Map {
    constructor(coords) {
      this.map = new google.maps.Map(document.getElementById("map"), {
        center: coords,
        zoom: 16,
        mapId: 'cc13e155afcd0b36', //  Map ID here
      });
  
      this.addMarker(coords);
    }
  
    addMarker(coords) {
      const marker = new google.maps.marker.AdvancedMarkerElement({
        map: this.map,
        position: coords,
        title: "Your Location", 
      });
    }
  
    setCenter(coordinates) {
      this.map.setCenter(coordinates);
    }
  
    render(coordinates) {
      this.setCenter(coordinates);
      this.addMarker(coordinates);
    }
  }
  