import React, {Component} from 'react';
import Clock from './Clock';
import './App.css';
import { Form, FormControl, Button} from 'react-bootstrap';

class App extends Component {

	constructor(props)	{
		super(props);
		this.state = {
			deadline: 'August 28, 2017',
			newDeadline: ''
		}
		
	}

	changeDeadline()	{
		console.log('state', this.state);
		this.setState({deadline: this.state.newDeadline});
	}

	render()	{
		return(
			
		<div className="App">
				<div className="App-intro">
				Countdown to {this.state.deadline}
				</div>
					<Clock 
						deadline = {this.state.deadline}/>	
				<Form inline>
					<FormControl className="Deadline-input"
						placeholder='New date in [m-d-y]'
						onChange = {event => this.setState({newDeadline: event.target.value})}
					/>
					<Button className="btn btn-primary" onClick = { () => this.changeDeadline() }>
						Submit
					</Button>
				</Form>
		</div>
		
		)

	}

}
export default App;