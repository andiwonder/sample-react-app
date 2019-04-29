import React, { Component } from 'react';
import './App.css';

// for routing
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getStartingInfo } from './actions/index';

// for matierial ui and styling
// import classNames from 'classnames';
// import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import './App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// for redux
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';

// custom component
import Landing from './components/Landing/Landing';
import Coach from './components/Coach/Coach';
import PriceForm from './components/Price/PriceForm';
import Quote from './components/Quote/Quote';

const theme = createMuiTheme({
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '"Roboto Mono"',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(',')
  }
});

class App extends Component {
  componentDidMount() {
    this.props.getStartingInfo();
  }

  render() {
    return (
      <Router>
        <MuiThemeProvider theme={theme}>
          <AppBar
            position="static"
            style={{ marginBottom: '4em', background: '#ecedf1', boxShadow: 'none', color: 'rgba(35,35,32,1' }}
          >
            <Toolbar>
              <div style={{ display: 'block', marginLeft: '38%', textAlign: 'center' }}>
                <h1 style={{ margin: '.5em 0 0 0' }}>Linchpin</h1>
                <Typography variant="subheading" color="inherit">
                  Personal. Transparent. Dynamic.
                </Typography>
              </div>
              <div style={{ float: 'right', marginLeft: 'auto' }}>
                <Button color="inherit">Home</Button>
                <Button color="inherit">Coach</Button>
                <Button color="inherit">About</Button>
                <Button color="inherit">Blog</Button>
                <Button color="inherit">Login</Button>
              </div>
            </Toolbar>
          </AppBar>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/coach" component={Coach} />
            <Route exact path="/quote" component={Quote} />
            <Route exact path="/policy/coach" render={() => <Redirect to="/coach" />} />
            <Route exact path="/policy/:code" component={PriceForm} />
          </Switch>
        </MuiThemeProvider>
      </Router>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getStartingInfo }, dispatch);
}

export default connect(null, mapDispatchToProps)(App);
