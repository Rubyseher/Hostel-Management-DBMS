import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Login'

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login}/>
      </div>
    </Router>
  );
}

export default App;
