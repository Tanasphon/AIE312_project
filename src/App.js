import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Switch>
        <Route path="/login">
          <LoginPage onLoginSuccess={() => setUser({ id: 1, name: 'John' })} />
        </Route>
        <Route path="/">
          <HomePage user={user} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
