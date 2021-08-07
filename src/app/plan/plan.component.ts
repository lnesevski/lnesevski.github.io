import { Component, OnInit } from '@angular/core';
import { PlanService } from '../plan.service';
import { plans, selectedPlan } from './plans';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css'],
})
export class PlanComponent implements OnInit {
  plans: { title: string; desc: string }[] = plans;
  selected: Boolean = false;
  constructor(private planService: PlanService) {
    this.selected = planService.selected;
  }

  ngOnInit(): void {}

  selectPlan(event: any) {
    this.planService.selected = true;
    this.selected = this.planService.selected;
    console.log(event);
  }
}
