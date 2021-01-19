import { NEXT } from './constants.js';
import data from './takes20210118.json';

let takes = data.json();

// fetch('./takes20210118.json')
//   .then(response => response.text())
//   .then(data => {
//     console.log(data);
//     takes = data
//   })
//   .catch(error => console.log(error));

// const testPhrases = [
//   {
//     text: 'Anything can be an adult diaper if you have confidence.',
//     author: 'Betty Dont'e
//   },
//   {
//     text: 'Carbonated Contact Lenses!',
//     author: 'The Council for Carbon Squestration'
//   },
//   {
//     text: 'Homestar Runner dot com is the Illiad of the 21st century.',
//     author: 'Matthieu Pierce'
//   },
//   {
//     text: 'Sure, bring it inside the city gates-- never look a gift horse in the mouth!',
//     author: 'Paris of Troy'
//   }
// ];

const startingState = {
  text: '',
  author: '',
  usedPhrases: [],
  freshPhrases: takes
}

function rootReducer(state = startingState, action) {
  switch (action.type) {
    case (NEXT):
      //check that supply of hot takes in freshPhrases is nonzero
      if (state.freshPhrases.length) {
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
    } else {
      return ({
        text: "Out of hot takes, try twitter",
        author: "Matthieu",
        usedPhrases: [...state.usedPhrases, {text: state.text, author:  state.author}],
        freshPhrases: []
      })
    }
    default:
      return state;

  }
  

}


export default rootReducer;