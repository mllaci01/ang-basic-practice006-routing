import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EventService } from '../service/event.service';
import { Event } from '../model/event';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {

  eventsList$: BehaviorSubject<Event[]> = this.eventService.list$;

  constructor(
    private eventService: EventService,
  ) { }

  ngOnInit(): void {
    this.eventService.getAll();
  }

}
