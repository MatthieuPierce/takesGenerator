import { NEXT } from './constants.js';

const testPhrases = [
  {
    text: 'Anything can be an adult diaper if you have confidence.',
    author: 'Betty Dont'
  },
  {
    text: 'Carbonated Contact Lenses!',
    author: 'The Council for Carbon Squestration'
  },
  {
    text: 'Homestar Runner dot com is the Illiad of the 21st century.',
    author: 'Matthieu Pierce'
  },
  {
    text: 'Sure, bring it inside the city gates-- never look a gift horse in the mouth!',
    author: 'Paris of Troy'
  }
];

const startingState = {
  text: '',
  author: '',
  usedPhrases: [],
  freshPhrases: testPhrases
}

function rootReducer(state = startingState, action) {
  switch (action.type) {
    case (NEXT):
      let lastPhrase = {
        text: state.text,
        author: state.author
      };
      let randomFreshIndex = Math.floor(Math.random() * state.freshPhrases.length);
      let { text, author } = state.freshPhrases[randomFreshIndex];
      return ({
        text: text,
        author: author,
        usedPhrases: [...state.usedPhrases, lastPhrase],
        freshPhrases: [...state.freshPhrases.slice(0, randomFreshIndex), 
                      ...state.freshPhrases.slice(randomFreshIndex + 1)]
      });
    default:
      return state;

  }
  

}


export default rootReducer;