import './App.css';
import {useState} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Homepage from './pages/homepage/homepage'
import NavBar from './components/nav/NavigationBar';

function App() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <Router>
            <div className='App'>
                <NavBar />
                <Switch>
                    <Route exact path='/' component={Homepage} />
                </Switch>
            </div>
        </Router>
    )
}

export default App;
