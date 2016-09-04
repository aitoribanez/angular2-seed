import { Component } from '@angular/core'
import { WeatherService } from './app.service'

@Component({
  selector: 'my-weather',
  template: `Humedad: {{ _humidity }}
    Presión {{ _pressure }}`,
  providers: [ WeatherService ]
})

export class AppComponent {
  _humidity: number
  _pressure: number = 123

  constructor(private _weatherInfo: WeatherService) {
    let _weather = this._weatherInfo.getWeather()
    _weather.then((res) => {
      console.log(res)
      this._humidity = res['main']['humidity']
    })
  }
}
