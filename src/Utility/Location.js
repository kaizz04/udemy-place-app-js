
const Google_API_Key = "AIzaSyC9vMpO_isbkbxXzlaGDnE_IhbGcbaB67k";

export async function getAddressFromCoords(coords){
    const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coords.lat},${coords.lng}&key=${Google_API_Key}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch Address. Please try again!");
      }
      const data = await response.json();
    
      if(data.error_message){
        throw new Error(data.error_message);
    
      }
     const address = data.results[0].formatted_address;
     return address;


}
export async function getCoordsFromAddress(address) {
  const urlAddress = encodeURI(address);
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${urlAddress},+CA&key=${Google_API_Key}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch coordinates. Please try again!");
  }
  const data = await response.json();

  if(data.error_message){
    throw new Error(data.error_message);

  }
 const coordinates = data.results[0].geometry.location;
 return coordinates;
}
