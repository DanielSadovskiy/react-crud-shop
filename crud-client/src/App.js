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
      <Header />
      <main className="container">
        <HashRouter>
          <Switch>
            <Route exact path="/" component={Menu} />
            <Route exact path="/products" component={Products} />
            <Route path="*" component={NotFound} />
          </Switch>
        </HashRouter>
        {/* <Menu /> */}
      </main>

    </div>
  );
}

export default App;
