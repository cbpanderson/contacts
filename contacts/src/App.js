
// import './App.css';
import {BrowserRouter, Route, Link}
  from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store.js';
import myForm from './components/myForm'; 

import AppBar from '@material-ui/core/AppBar';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ConnectedContacts from './components/contactList';

const Home = () => (<h2>Home</h2>)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppBar position="relative">
          <Toolbar>
            <CameraIcon/>
            <Typography variant="h6" color="inherit" noWrap>
              Contact App
            </Typography>
          </Toolbar>
        </AppBar>

        <BrowserRouter>
          <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/form">Form</Link></li>
            </ul>
            
            <Route exact path="/" component={Home}/>
            <Route path="/form" component={myForm}/>

          </div>
        </BrowserRouter>

        <ConnectedContacts></ConnectedContacts>
        <myForm></myForm>
      </div>
    </Provider>
  );
}

export default App;
