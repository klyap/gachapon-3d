const WELCOME_TEXT = [
  "Hey there, space farer. Care to take a spin?",
  "What does the universe have in store for you, explorer?",
  "Ah, you've finally made it!"
]

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export const getWelcomeText = () => {
  const range = WELCOME_TEXT.length;
  const chosenIndex = getRandomInt(range);
  return WELCOME_TEXT[chosenIndex];
}