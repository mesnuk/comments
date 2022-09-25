import { Route, Switch, Redirect } from 'react-router-dom';
import React from "react";
import AllQuotes from './pages/AllQuotes';
import QuoteDetail from './pages/QuoteDetail';
import NewQuote from './pages/NewQuote';
import NotFound from './pages/NotFound';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/comments/' exact>
          <Redirect to='/comments/quotes' />
        </Route>
        <Route path='/comments/quotes' exact>
          <AllQuotes />
        </Route>
        <Route path='/comments/quotes/:quoteId'>
          <QuoteDetail />
        </Route>
        <Route path='/comments/new-quote'>
          <NewQuote />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
