import { Component } from '@angular/core'
import { WeatherService } from './app.service'
import { ToHourMin } from './toHourMin.pipe'

@Component({
  selector: 'my-weather',
  template: `Humedad: {{ _humidity }}
    Presión {{ _pressure }}
    Temperatura {{ _temp }}
    Temperatura mínima {{ _minTemp }}
    Temperatura máxima {{ _maxTemp }}
    Puesta de sol {{ _sunrise | toHourMin }}
    Amanecer {{ _sunset | toHourMin }}
    Icono {{ _icon }}
    Nombre {{ _name }}
    `,
  providers: [ WeatherService ],
  pipes: [ ToHourMin ]
})

export class AppComponent {
  _humidity: number
  _pressure: number
  _temp: number
  _minTemp: number
  _maxTemp: number
  _description: string
  _sunrise: number
  _sunset: number
  _icon: string
  _name: string

  constructor(private _weatherInfo: WeatherService) {
    let _weather = this._weatherInfo.getWeather()
    _weather.then((res) => {
      // console.log(res['sys']['sunrise'])
      this._humidity = res['main']['humidity']
      this._pressure = res['main']['pressure']
      this._temp = res['main']['temp']
      this._minTemp = res['main']['temp_min']
      this._maxTemp = res['main']['temp_max']
      this._description = res['weather'][0]['description']
      this._icon = res['weather'][0]['icon']
      this._sunrise = res['sys']['sunrise']
      this._sunset = res['sys']['sunset']
      this._name = res['name']
    })
  }
}
