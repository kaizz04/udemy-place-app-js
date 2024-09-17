class PlaceFinder {
  constructor() {
    const addressForm = document.querySelector("form");
    const locateUserBtn = document.getElementById("locate-btn");

    locateUserBtn.addEventListener("click", this.locateUserHandler);
    addressForm.addEventListener("submit", this.findAddressHandler);
  }

  locateUserHandler() {
    if (!navigator.geolocation) {
      alert("Location feature not available, enter address manually");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (successResult) => {
       
        const coordinates = {
            lat:successResult.coords.latitude,
            log:successResult.coords.longitude,
        };

        console.log(coordinates);
      },
      (error) => {
        alert("Could not locate you, Please enter an address manually");
      }
    );
  }

  findAddressHandler() {}
}

const placeFinder = new PlaceFinder();
