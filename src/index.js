import React from 'react';
import ReactDOM from 'react-dom';
import API_KEY from '../check';
import SearchBar from "./components/search_bar";


// Create a new component, this component should produce some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
}

// Take this component's generated HTML and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
