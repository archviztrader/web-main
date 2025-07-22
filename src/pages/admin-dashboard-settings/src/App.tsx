import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Settings from './pages/Settings';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/settings" component={Settings} />
        {/* Add more routes here as needed */}
      </Switch>
    </Router>
  );
};

export default App;