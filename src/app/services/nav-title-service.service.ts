import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavTitleServiceService {

  @Output() changeTitle: EventEmitter<string> = new EventEmitter();
  
  constructor() { }
}
