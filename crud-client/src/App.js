import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import Menu from './components/Menu';
import { Switch, Route, HashRouter } from "react-router-dom";
import NotFound from './components/NotFound';
import Products from './containers/Products';
import SingleProduct from './containers/SingleProduct';
import CreateProduct from './containers/CreateProduct';
import editProduct from './containers/EditProduct';




function App() {
  return (
    <div className="App">
      <Header />
      <main className="container">
        <HashRouter basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path="/" component={Menu} />
            <Route exact path="/products/create" component={CreateProduct}/>
            <Route path="/:category/:id/edit" component={editProduct}/>
            <Route path="/:category/:id" component={SingleProduct}/>
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
