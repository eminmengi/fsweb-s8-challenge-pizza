import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home'
import Success from './pages/Success'
import OrderPizza from './pages/OrderPizza'

function App() {
  

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/pizza" component={OrderPizza} />
        <Route path="/success" component={Success} />
      </Switch>
    </Router>
  )
}

export default App
