import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meal } from '../Meal';
import { mealsInShoppingList } from './mealsInShoppingList';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  list: Meal[] = mealsInShoppingList;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.list = mealsInShoppingList;
  }

  removeMeal(item: Meal) {
    let index = mealsInShoppingList.indexOf(item);
    if (index >= 0) {
      mealsInShoppingList.splice(index, 1);
      this.list = mealsInShoppingList;
    }
  }
}
