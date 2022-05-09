import { ReactElement } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import GlobalStyles from '../global-styles';

const App = (): ReactElement => (
  <>
    <GlobalStyles/>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
  </>
);

export default App;
