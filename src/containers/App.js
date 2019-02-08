import React, { Component } from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'
import './App.css'
import { robots } from '../robots'

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(response => response.json())
        //     .then(users => this.setState({robots: users}))
        this.setState({robots})

    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value})
    }

    render() {
        const { robots, searchField } = this.state
        const filteredRobots = robots.filter(robot => { 
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })

        return robots.length ? 
            (
                <div className='tc'>
                    <h1 className='f2'>RoboFriends</h1>
                    <SearchBox searchChange={ this.onSearchChange }/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={ filteredRobots } />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            ) :
            
            <h1 className="f1 tc">Loading...</h1>
    }
}

export default App