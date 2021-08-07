export class Meal {
  id: number | undefined;
  title: string | undefined;
  shrotDesc: string | undefined;
  info: (string | undefined)[] = [];
  imgUrl: string | undefined;
  ingredients: (string | undefined)[] = [];
  instructions: string | undefined;
  nutrition: string | undefined;
}
