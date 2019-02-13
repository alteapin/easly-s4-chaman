export default class getIp {

     static getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.showPosition);
        } else {
          console.log( "Geolocation is not supported by this browser.");
        }
      }

       static showPosition(position) {
        console.log( "positions!!",position.coords )
        return position.coords
      }

}
