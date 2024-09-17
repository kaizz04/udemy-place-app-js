import { Modal } from "./UI/Modal";
import { Map } from "./UI/Map";

class PlaceFinder {
  constructor() {
    const addressForm = document.querySelector("form");
    const locateUserBtn = document.getElementById("locate-btn");

    locateUserBtn.addEventListener("click", this.locateUserHandler.bind(this));
    addressForm.addEventListener("submit", this.findAddressHandler.bind(this));
  }

  selectPlace(coordinates) {
    if (this.map) {

      this.map.render(coordinates); 
    } else {
      this.map = new Map(coordinates);
    }
  }

  locateUserHandler() {
    if (!navigator.geolocation) {
      alert("Location feature not available, enter address manually");
      return;
    }
    const modal = new Modal(
      "loading-modal-content",
      "Loading location - please wait"
    );
    modal.show();

    navigator.geolocation.getCurrentPosition(
      (successResult) => {
        modal.hide();

        const coordinates = {
          lat: successResult.coords.latitude,
          lng: successResult.coords.longitude, // Fixed typo: log -> lng
        };

        // const coordinates = {
        //     lat: 6.9849, // Latitude of Badulla
        //     lng: 81.0560  // Longitude of Badulla
        //   };

        this.selectPlace(coordinates);
      },
      (error) => {
        modal.hide();
        alert("Could not locate you, Please enter an address manually");
      }
    );
  }

  findAddressHandler() {

  }
}

const placeFinder = new PlaceFinder();
