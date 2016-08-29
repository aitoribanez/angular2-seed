import { Injectable } from "@angular/core";

@Injectable()
export class WeatherService {
    getWeather = () => [
        { id: 1, name: "paco" },
        { id: 2, name: "ana" },
        { id: 3, name: "maira" }
    ];
}