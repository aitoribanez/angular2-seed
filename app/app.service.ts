import { Injectable } from "@angular/core";
import { weather as weatherApi} from "../node_modules/openweather-apis/index.js";
import { CONFIG } from "../config";

@Injectable()
export class WeatherService {
  // constructor() {}

  public getWeather = () => {
    weatherApi.setLang("es");
    weatherApi.setCoordinate(50.0467656, 20.0048731);
    weatherApi.setAPPID(CONFIG.OPEN_WEATHER_KEY);
    weatherApi.getAllWeather(function(err, res){
      if (err) { console.log(err); }
      console.log("res");
      console.log(res);
    });
  }
}