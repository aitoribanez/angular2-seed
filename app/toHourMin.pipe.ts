import { Pipe, PipeTransform } from '@angular/core'

@Pipe({name: 'toHourMin'})

export class ToHourMin implements PipeTransform {
  transform(value: number, args: string[]): any {
    let date: Date = new Date(value * 1000)
    let hours: number = date.getHours()
    let mins: number = date.getMinutes()
    let hoursPrint, minsPrint: string

    if (!value) return value

    hoursPrint = (hours <= 9) ? `0${hours}` : `${hours}`
    minsPrint = (mins <= 9) ? `0${mins}` : `${mins}`

    return `${hoursPrint}:${minsPrint}`
  }
}