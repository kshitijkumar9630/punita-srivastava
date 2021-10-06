import React from 'react';
import { useEffect } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import BackToTop from './components/BackToTop';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Success from './pages/Success';
import Programs from './pages/Programs';
import Contact from './pages/Contacts';
import BlogHome from './pages/BlogHome';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        {/* <h1 className='text-center'>
          Site has been shut down by Administrator
        </h1> */}
        <Navbar />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/about' component={About} />
          <Route exact path='/success' component={Success} />
          <Route exact path='/programs' component={Programs} />
          <Route exact path='/bloghomepage' component={BlogHome} />
          <Route exact path='/contact' component={Contact} />
          <Route component={Error} />
        </Switch>

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;

function test() {
  if (false) {
    var x = 50;
  }
  console.log(x);
  console.log(y);
  var y = 100;
  console.log(y);
}
test();

function foo() {
  var b = 1;
  function inner() {
    return b;
  }
  return inner;
}
var get_func_inner = foo();
console.log(get_func_inner());
