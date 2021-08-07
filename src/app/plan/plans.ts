export let plans: {
  title: string;
  desc: string;
}[] = [
  {
    title: 'Intermittent fasting',
    desc: 'Intermittent fasting is a dietary strategy that cycles between periods of fasting and eating.',
  },
  {
    title: 'Plant-based diet',
    desc: 'Plant-based diets may help you lose weight,',
  },
  {
    title: 'Low-carb diets',
    desc: 'Low-carb diets are among the most popular diets for weight loss.',
  },
  {
    title: 'The paleo diet',
    desc: 'The paleo diet advocates eating the same foods that your hunter-gatherer ancestors allegedly ate.',
  },
  {
    title: 'Low-fat diets',
    desc: 'Like low-carb diets, low-fat diets have been popular for decades.',
  },
  {
    title: 'The Mediterranean diet',
    desc: 'The mediterranean diet is based on foods that people in countries like italy and Greece used to eat.',
  },
];

export var selectedPlan: {
  title: string;
  desc: string;
};
