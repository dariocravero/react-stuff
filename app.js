import { render } from 'react-dom';
import React from 'react';
// import App from './state-list';

// import App from './state-list-add';

// import App from './state-list-add-split';
// import Authors from './authors';

import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './stateless';
import books from './redux-reducer';
import ConnectedAuthors from './connected-authors';

// render(
//   <App />,
//   document.getElementById('root')
// );

// render(
//   <div>
//     <App />
//     <Authors list={[]} />
//   </div>,
//   document.getElementById('root')
// );

const store = createStore(combineReducers({books}));

render(
  <Provider store={store}>
    <div>
      <App />
      <ConnectedAuthors />
    </div>
  </Provider>,
  document.getElementById('root')
);
