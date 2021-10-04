import './App.css';
import {Provider} from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import {store} from './redux/index';

import Events from "./events";



function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          Go
          <Events/>
        </div>
      </Router>

    </Provider>

  );
}

export default App;
