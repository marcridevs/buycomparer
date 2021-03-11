import { Component, OnInit, Input } from '@angular/core';
import { ListItem } from '../interfaces/listItem';


@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() item: ListItem;

  constructor() { }

  ngOnInit(): void {
  }

}
