import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import PostForm from '../components/PostsForm/postsForm'
import Home from './Home';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} exact={true} />
        <Route path='/novo' component={PostForm} exact={true} />
        <Route path='/:id/editar' component={PostForm} exact={true} />
      </Switch>
    </BrowserRouter>
    </div>
  );
}
export default App;
