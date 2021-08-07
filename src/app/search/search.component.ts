import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Meal } from '../Meal';
import {
  debounceTime,
  distinctUntilChanged,
  mergeMap,
  tap,
} from 'rxjs/operators';
import { FoodService } from '../food.service';
import { query } from '@angular/animations';
import { meals } from 'src/meals.mock';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchField = new FormControl('');
  mealsList: Meal[] = [];
  allMeals: Meal[] = meals;
  constructor(private service: FoodService) {}

  ngOnInit(): void {
    this.searchField.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        tap((query) => {
          if (query.length === 0 || query === '' || query === null) {
            this.mealsList = [];
          }
        }),
        mergeMap((query) => this.service.searchMealsByName(query))
      )
      .subscribe((meal) => {
        if (!this.mealsList.includes(meal)) {
          this.mealsList.push(meal);
        }
      });
  }
}
