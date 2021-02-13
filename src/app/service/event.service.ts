import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Event } from '../model/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

private list: Event[] = [
  {name: 'Foci', date: '2021.02.13.', time: '18:00', location: {address: 'III.kerület', city: 'Budapest', country: 'Magyarország' }},
  {name: 'Szoli', date: '2021.02.14.', time: '08:00', location: {address: 'III.kerület', city: 'Budapest', country: 'Magyarország' }},
  {name: 'Vizsga', date: '2021.02.15.', time: '16:00', location: {address: 'III.kerület', city: 'Budapest', country: 'Magyarország' }},
];

list$: BehaviorSubject<Event[]> = new BehaviorSubject<Event[]>([]);
  //list$: BehaviorSubject<Event[]>;

  constructor(
   //private eventService: EventService,
  ) { }

getAll(): void {
  this.list$.next(this.list);
}
}
