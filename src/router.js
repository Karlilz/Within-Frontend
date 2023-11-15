// Import necessary modules
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Import your components
import Home from './components/Home';
import Journal from './components/Journal';
import Goals from './components/Goals';
import Progress from './components/Progress';

// Main Router component
const AppRouter = () => {
  return (
    <Router>
      <Switch>
        {/* Route for the home page */}
        <Route path="/" exact component={Home} />

        {/* Route for the journal page */}
        <Route path="/journal" component={Journal} />

        {/* Route for the goals page */}
        <Route path="/goals" component={Goals} />

        {/* Route for the progress page */}
        <Route path="/progress" component={Progress} />

        {/* Add more routes as needed */}
      </Switch>
    </Router>
  );
};

export default AppRouter;
