import { Component } from "@angular/core";
import { weather } from "../node_modules/openweather-apis/index.js";
import { CONFIG } from "../config";

@Component({
  selector: "my-weather",
  template: "Open weather example"
})

export class AppComponent {
  private key = CONFIG.OPEN_WEATHER_KEY;
  private latitude = 50.0467656;
  private longitude = 20.0048731;

  constructor() {
    weather.setLang("es");
    weather.setCoordinate(this.latitude, this.longitude);
    weather.setAPPID(this.key);
    weather.getAllWeather(function(err, res){
      if (err) { console.log(err); }
      console.log(res);
    });
  }
}
