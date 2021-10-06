import './app.css';
import {Provider} from "react-redux";
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import {store} from '../../redux';
import {eventRoute} from '../../router';
import {Layout} from "antd";
import Navbar from "../navbar";


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Layout>
            <Navbar/>
            <Layout.Content className='app'>
              {eventRoute.map(route =>
                <Route path={route.path}
                       exact={route.exact}
                       component={route.component}
                       key={route.path}
                />
              )}
            </Layout.Content>
            <Redirect to={'/'} />
          </Layout>
        </Switch>
      </Router>

    </Provider>

  );
}

export default App;
