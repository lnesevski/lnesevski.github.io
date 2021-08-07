import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { meals } from 'src/meals.mock';
import { Meal } from './Meal';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  searchMealsByName(name: String): Meal[] {
    if (name.length === 0) return [];
    return meals.filter((meal) =>
      meal.shrotDesc?.toLowerCase().includes(name as string)
    ) as Meal[];
  }

  getMealById(id: number): Meal | undefined {
    return meals.find((meal) => meal.id === id);
  }

  getMealByTitle(title: String): Meal | undefined {
    return meals.find((meal) => meal.title === title);
  }
}
