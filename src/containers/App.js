import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
// import {arrRobots} from '../robots';
import Scroll from '../components/Scroll';
import './App.css';


class App extends Component {
	constructor() {
		super()
		// State to make smart components
		this.state = {
			// type of state robots will be array with no value
			robots: [],
			// type of state searchField will be string with the value of null
			searchField: ''
		}
	}


	componentDidMount() {
		// fetching values on https://jsonplaceholder.typicode.com/users then turn it into json and then put its value into state robots
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({ robots: users}));
	}


	onSearchChange = (event) => {
		// reads changes on onSearchChange's value and insert its value into state searchField
		this.setState({ searchField: event.target.value });
	}


	render() {
		// destructuring robots & searchField from this.state
		const { robots, searchField } = this.state;
		// filtering robots by value on searchField. Everything turns into lowercase
		const filteredRobots = robots.filter(valRobots => {
			return valRobots.name.toLowerCase().includes(searchField.toLowerCase())
		});

		// if robots equals zero
		return !robots.length ?
		<h1 className='tc'>Loading</h1> :
		<div className='tc'>
			<h1 className='f1'>RoboFriends</h1>
			<SearchBox searchChange={this.onSearchChange}/>
			<Scroll>
				<CardList cardRobots={filteredRobots}/>
			</Scroll>
		</div>
	}
}

export default App;