import React from 'react';
import './App.css';
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import Menu from './components/Menu';
import { Switch, Route, HashRouter } from "react-router-dom";
import NotFound from './components/NotFound';
import Products from './containers/Products';




function App() {
  return (
    <div className="App">
      <HashRouter basename="/">
        <Header />
        <main className="container">

          <Switch>
            <Route exact path="/" component={Menu} />
            <Route exact path="/products" component={Products} />
            <Route path="*" component={NotFound} />
          </Switch>
          {/* <Menu /> */}
        </main>
      </HashRouter>

    </div>
  );
}

export default App;
