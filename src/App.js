import React, {Component, useEffect, useState} from 'react';
import axios from 'axios'
import {Route} from 'react-router-dom'

import {connect} from 'react-redux'
import {Header} from "./components";
import {Home, Cart} from "./Pages";
import {setPizzas as setPizzasAction} from './redux/actions/pizzas'


/*function App() {
    useEffect(() => {
        axios.get('/db.json').then(({data}) => {
            setPizzas(data.pizzas)
        })
    }, [])
    ;
}*/

class App extends Component {

    componentDidMount() {
        axios.get('/db.json').then(({data}) => {
            this.props.setPizzas(data.pizzas)
        })
    }

    render() {
        return (
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <Route path='/' exact render={() => <Home items={this.props.items}/>}/>
                    <Route path='/cart' exact component={Cart}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.pizzas.items
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setPizzas: (items) => dispatch(setPizzasAction(items))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
