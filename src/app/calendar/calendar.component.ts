import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarOptions } from '@fullcalendar/angular';
import { FoodService } from '../food.service';
import { PlanService } from '../plan.service';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  constructor(
    private router: Router,
    private service: FoodService,
    planService: PlanService
  ) {
    if (planService.selected) {
      const routerCopy = this.router;
      const serviceCopy = this.service;
      this.calendarOptions = {
        initialView: 'dayGridMonth',
        events: [
          {
            title: 'Chicken Cutlets with Sun-Dried Tomato Cream Sauce',
            date: '2021-08-20',
          },
          { title: 'Lemon-Garlic Vinaigrette', date: '2021-08-21' },
          { title: 'Crispy Smashed Brussels Sprouts', date: '2021-08-22' },
          { title: 'Loaded Cauliflower Casserole', date: '2021-08-23' },
          { title: 'Spinach & Mushroom Quiche', date: '2021-08-24' },
          { title: 'Carrot Soup', date: '2021-08-25' },
          { title: 'Mini Lemon Curd Tarts', date: '2021-08-26' },
        ],
        eventClick: function (info) {
          routerCopy.navigateByUrl(
            '/meal/' + serviceCopy.getMealByTitle(info.el.innerText)?.id
          );
        },
      };
    } else {
      this.calendarOptions = {
        initialView: 'dayGridMonth',
      };
    }
  }

  ngOnInit(): void {}

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
  };
}
