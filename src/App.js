import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Login'
import Dashboard from './Dashboard'

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login}/>
        <Route exact path="/dashboard" component={Dashboard}/>
      </div>
    </Router>
  );
}

export default App;
