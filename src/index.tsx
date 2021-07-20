import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <AppRow />
    </React.StrictMode>,
    document.getElementById('root')
);

function AppRow() {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path="/" component={App} />
                </Switch>                
            </Router>
        </Provider>
    );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
