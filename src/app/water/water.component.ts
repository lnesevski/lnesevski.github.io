import { Component, OnInit } from '@angular/core';
import { tr } from 'date-fns/locale';

@Component({
  selector: 'app-water',
  templateUrl: './water.component.html',
  styleUrls: ['./water.component.css'],
})
export class WaterComponent implements OnInit {
  saved: Boolean = false;

  constructor() {}

  ngOnInit(): void {}

  save() {
    this.saved = true;
  }
}
