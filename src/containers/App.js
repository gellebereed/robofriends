import React, { Component } from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';

import ErrorBoundry from '../components/ErrorBoundry';

// function App() {
// 	const [
// 		robotState,
// 		setRobotState
// 	] = useState(robots);
// 	const [
// 		searchState,
// 		setSearchState
// 	] = useState('');

// 	const handler = (event) => {
// 		setSearchState(event.target.value);
// 		const filteredRobots = robots.filter((robot) => {
// 			return robot.name.toLowerCase().includes(searchState.toLowerCase());
// 		});
// 		setRobotState(filteredRobots);
// 		console.log(searchState);
// 		console.log(robotState);
// 	};

// 	return (
// 		<div className="tc">
// 			<SearchBox onSearch={handler} />
// 			{robotState.map((robot) => {
// 				return <Card key={robot.id} name={robot.name} username={robot.username} email={robot.email} />;
// 			})}
// 		</div>
// 	);
// }

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchField: ''
		};
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((user) => this.setState({ robots: user }));
	}

	onSearchChange = (event) => {
		this.setState({ searchField: event.target.value });
	};

	render() {
		const { robots, searchField } = this.state;
		const filteredRobots = robots.filter((robot) => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		});

		return !robots.length ? (
			<h1>Loading....</h1>
		) : (
			<div className="tc">
				<SearchBox onSearch={this.onSearchChange} />
				<Scroll>
					<ErrorBoundry>
						<CardList filteredRobots={filteredRobots} />
					</ErrorBoundry>
				</Scroll>
			</div>
		);
	}
}

export default App;
