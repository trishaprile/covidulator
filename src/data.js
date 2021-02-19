export const questions = [
  {
    question: "How do you wash your hands?",
    category: "Hygiene",
    answers: [
        { answer: "Never", description: null, points: 0},
        { answer: "With just water: quick rinse for less than 20s", description: null, points: 2},
        { answer: "With just water: scrub for at least 20s", description: null, points: 4},
        { answer: "With soap: quick wash for less than 20s", description: null, points: 7},
        { answer: "With soap: scrub for at least 20s", description: null, points: 20},
    ]
  },
  {
    question: "How often do you wash your hands?",
    category: "Hygiene",
    answers: [
        { answer: "Never", description: "0 times a day", points: 0},
        { answer: "Infrequently", description: "Only when your hands are visibly", points: 2},
        { answer: "Occasionally", description: "Sometimes after going outside", points: 3},
        { answer: "Often", description: "After you return from the outside, after going to the restroom", points: 10},
        { answer: "Very often", description: "Anytime you touch outside objects, go to the restroom etc.", points: 15},
    ]
  },
  {
    question: "How often do you wear a mask in public?",
    category: "Protection",
    answers: [
      {answer: "Never", description: null, points: 0},
      {answer: "Infrequently", description: "When it is mandated", points: 1},
      {answer: "Occasionally", description: "When you're around other people", points: 3},
      {answer: "Often", description: "Around every other time you go out", points: 5},
      {answer: "Always", description: "Anytime you leave the house", points: 20},
    ]
  },
  {
    question: "How many people have you gone into contact with outside of your household since the start of quarantine (socially)?",
    category: "Prevention",
    answers: [
      {answer: "0", description: null, points: 20},
      {answer: "1-5", description: null, points: 10},
      {answer: "6-10", description: null, points: 5},
      {answer: "11-50", description: null, points: 3},
      {answer: "More than 50", description: null, points: 0},
    ]
  },
  {
    question: "How often do you get tested?",
    category: "Prevention",
    answers: [
      {answer: "Never", description: null, points: 0},
      {answer: "Every few months", description: null, points: 2},
      {answer: "Once a month", description: null, points: 3},
      {answer: "Once a week", description: null, points: 4},
      {answer: "Multiple times a week", description: null, points: 5},
    ]
  },
  {
    question: "How often do you eat out at restaurants (in-person dining)?",
    category: "Consumerism",
    answers: [
      {answer: "Never", description: null, points: 15},
      {answer: "Infrequently", description: "Every few months", points: 9},
      {answer: "Occasionally", description: "Once a month", points: 5},
      {answer: "Often", description: "Once a week", points: 1},
      {answer: "Very often", description: "Multiple times a week", points: 0},
    ]
  },
  {
    question: "How often do you leave your house or go out (recreationally)?",
    category: "Consumerism", 
    answers: [
      {answer: "Never", description: null, points: 23},
      {answer: "Infrequently", description: "Every few months", points: 14},
      {answer: "Occasionally", description: "Once a month", points: 10},
      {answer: "Often", description: "Once a week", points: 2},
      {answer: "Very often", description: "Multiple times a week", points: 1},
    ]
  },
  {
    question: "How often do you order things online?",
    category: "Consumerism",
    answers: [
      {answer: "Never", description: null, points: 6},
      {answer: "Infrequently", description: "Every few months", points: 5},
      {answer: "Occasionally", description: "Once a month", points: 4},
      {answer: "Often", description: "Once a week", points: 3},
      {answer: "Very often", description: "Multiple times a week", points: 2},
    ]
  },
  {
    question: "How often do you order food delivery?",
    category: "Consumerism",
    answers: [
      {answer: "Never", descripton: null, points: 5},
      {answer: "Infrequently", description: "Every few months", points: 4},
      {answer: "Occasionally", description: "Once a month", points: 3},
      {answer: "Often", description: "Once a week", points: 2},
      {answer: "Very often", description: "Multiple times a week", points: 1},
    ]
  },
  {
    question: "How often do the people in your household go outside?",
    category: "Prevention",
    answers: [
      {answer: "Never", description: null, points: 10},
      {answer: "Infrequently", description: "Every few months", points: 7},
      {answer: "Occasionally", description: "Once a month", points: 5},
      {answer: "Often", description: "Once a week", points: 2},
      {answer: "Very often", description: "Multiple times a week", points: 1},
    ]
  },
  {
    question: "If you go out, how often is it to an enclosed space (ex: grocery store, another house)?",
    category: "Prevention",
    answers: [
      {answer: "Never", description: null, points: 10},
      {answer: "Infrequently", description: "Once a month", points: 8},
      {answer: "Occasionally", description: "Every other week", points: 6},
      {answer: "Often", description: "Once a week", points: 4},
      {answer: "Very often", description: "Multiple times a week", points: 0},
    ]
  },
  {
    question: "How actively do you practice social distancing (6 feet radius)?",
    category: "Prevention",
    answers: [
      {answer: "Never", description: null, points: 0},
      {answer: "Infrequently", description: "When it's mandated", points: 5},
      {answer: "Occasionally", description: "When you're indoors", points: 10},
      {answer: "Often", description: "You keep your distance whenever possible", points: 15},
      {answer: "Always", description: "You keep your distance at all times", points: 20},
    ]
  },
  // {
  //   question: "Have you been vaccinated?",
  //   category: "Protection",
  //   answers: [
  //     {answer: "Yes", description: null, points: 5},
  //     {answer: "No", description: null, points: 0},
  //   ]
  // }
];

export const results = [
  {
    grade: "A",
    description: "Keep up the good work! You are practicing good hygiene and being cautious of CDC guidelines. We are very proud of how much you are trying to reduce the spread of the coronavirus, and we hope that others will take after your example to reduce cases.",
  },
  {
    grade: "B",
    description: "We can see that you are trying your best, but some aspects could use some work. Although some steps may seem trivial, every action helps! Thank you for being aware of regulations, and we hope that others will take after your example to slow the spread.",
  },
  {
    grade: "C",
    description: "Your results reflect a need for reevaluation of the actions you take in face of the pandemic. Please take time to read more details on what categories of coronavirus prevention you should be wary of below. We have also provided resources that can help you improve your score and help you take action to slow the spread.",
  },
  {
    grade: "D",
    description: "This score reflects that you should improve your habits concerning wariness of the coronavirus. We have provided resources below that will help you improve your score and help you take action to slow the spread.",
  },
  {
    grade: "F",
    description: "There are many ways you can improve your habits to reduce the spread of the coronavirus. Your score represents a lack of observation of CDC regulations, so please make sure to maintain good hygiene and practice caution when interacting with others.",
  }
];