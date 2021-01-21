import { NEXT } from './constants.js';
import jsonTakes from './takes20210118.json';

let takes = jsonTakes.takes;

// function getTakes(){
//   fetch('./takes20210118.json')
//   .then(response => {
//     return response.json()
//   })
//   // .then(data => {
//   //   console.log(data);
//   //   return data;})
//   .then(data => {
//     takes = data.takes;
//   })
//   .catch(error => console.log(error));
// }
// getTakes();
// console.log(takes);


const startingState = {
  text: '',
  author: '',
  usedPhrases: [],
  freshPhrases: takes
}

// console.log(startingState);

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