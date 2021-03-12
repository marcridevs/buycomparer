import { Component, OnInit, Input } from '@angular/core';
import { ListItem } from '../interfaces/listItem';


@Component({
  selector: 'app-list-grid-item',
  templateUrl: './list-grid-item.component.html',
  styleUrls: ['./list-grid-item.component.css']
})
export class ListGridItemComponent implements OnInit {

  @Input() item: ListItem;

  constructor() { }

  ngOnInit(): void {
  }

}
