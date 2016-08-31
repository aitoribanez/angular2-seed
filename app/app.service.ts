import { Injectable } from '@angular/core'
import { weather as weatherApi} from '../node_modules/openweather-apis/index.js'
import { CONFIG } from '../config'

@Injectable()
export class WeatherService {
  constructor() {
    /* Configuration */
    weatherApi.setLang('es')
    weatherApi.setCoordinate(50.0467656, 20.0048731)
    weatherApi.setAPPID(CONFIG.OPEN_WEATHER_KEY)
  }

  getWeather() {
    return new Promise(
      function (resolve, reject) {
        weatherApi.getAllWeather(function(err, res){
          if (err) { return resolve(err) }
          return resolve(res)
        })
      }
    )
  }
} 