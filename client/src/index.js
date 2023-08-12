// 1) Import ReactDOM library
import materiallizeCSS from 'materialize-css/dist/css/materialize.min.css';
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from 'redux-thunk';


// 2) Import App component as usual
import App from "./components/App";
import reducers from "./reducers";


// 3) Get a reference to the div with ID root
const el = document.getElementById("root");

// 4) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 5) Show the component on the screen

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
