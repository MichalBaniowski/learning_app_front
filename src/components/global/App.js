import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux'
import {
    HashRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import store from "../../redux/store";
import MainLayout from "./MainLayout";
import Home from "../sites/Home";
import QuestionList from "../sites/question/QuestionList";

const App = () => {
    return(
        <Provider store={store}>
            <Router>
                <MainLayout>
                    <Switch>
                        <Route exact path='/home' component={Home}/>
                        <Route exact path='/questions' component={QuestionList}/>
                    </Switch>
                </MainLayout>
            </Router>
        </Provider>
    );
};

export default App;