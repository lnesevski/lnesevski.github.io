import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../food.service';
import { Meal } from '../Meal';
import { mealsInShoppingList } from '../shopping-list/mealsInShoppingList';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css'],
})
export class MealComponent implements OnInit {
  private id: String | null | undefined;
  meal: Meal | undefined;

  constructor(private service: FoodService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((res) => (this.id = res.get('id')));

    this.meal = this.service.getMealById(+this.id!);
  }

  setItem(item: Meal) {
    mealsInShoppingList.push(item);
  }
}
