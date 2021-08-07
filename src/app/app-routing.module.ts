import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { HomeComponent } from './home/home.component';
import { MealComponent } from './meal/meal.component';
import { PlanComponent } from './plan/plan.component';
import { SearchComponent } from './search/search.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { WaterComponent } from './water/water.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'meal/:id', component: MealComponent },
  { path: 'shoppingList', component: ShoppingListComponent },
  { path: 'water', component: WaterComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'plan', component: PlanComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
