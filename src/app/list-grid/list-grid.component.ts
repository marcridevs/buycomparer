import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-grid',
  templateUrl: './list-grid.component.html',
  styleUrls: ['./list-grid.component.css']
})
export class ListGridComponent implements OnInit {

  @Input() items : any[]

  constructor() { }

  ngOnInit(): void {
  }
};