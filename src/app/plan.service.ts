import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlanService {
  public selected: Boolean = false;

  constructor() {}
}
