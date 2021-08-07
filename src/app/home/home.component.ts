import { Component, OnInit } from '@angular/core';
import { PlanService } from '../plan.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public selected: Boolean = false;
  constructor(private planService: PlanService) {
    this.selected = planService.selected;
  }

  ngOnInit(): void {}

  close() {
    this.selected = true;
  }
}
