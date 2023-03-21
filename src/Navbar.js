import { Component, useState } from 'react';
import { MenuItem } from '@mui/material';
import Select from '@mui/material/Select';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

import './Navbar.css';

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = { format: 'hex ' };
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event) {
		this.setState({ format: event.target.value });
		this.props.handleChange(event.target.value);
	}
	render() {
		const { level, changeLevel } = this.props;
		const { format } = this.state;
		return (
			<nav className="Navbar">
				<div className="logo">
					<a href='/'>ReactColorPicker</a>
				</div>
				<div className='slider-container'>
					<span>Level:</span>
					<div className="slider">
						<Slider
							defaultValue={level}
							min={100}
							max={900}
							step={100}
							onChange={changeLevel}
						/>
					</div>
				</div>
				<div className='select-container'>
					<Select value={format} onChange={this.handleChange}>
						<MenuItem value='hex'>HEX - #ffffff</MenuItem>
						<MenuItem value='rgb'>RGB - rgb(255,255,255)</MenuItem>
						<MenuItem value='rgba'>RGBA - rgba(255,255,255,1)</MenuItem>
					</Select>
				</div>
			</nav>
		);

	}


}

// function Navbar(props) {
//     const [format, setFormat ] = useState('hex');

//     function handleChange(event) {

//         setFormat(event.target.value);
//         props.handleChange();
//     }

//      return (
//         <nav className="Navbar">
//             <div className="logo">
//                 <a href='/'>ReactColorPicker</a>
//             </div>
//             <div className='slider-container'>
//                 <span>Level:</span>
//                 <div className="slider">
//                     <Slider
//                         defaultValue={props.level}
//                         min={100}
//                         max={900}
//                         step={100}
//                         onChange={props.changeLevel}
//                     />
//                 </div>
//             </div>
//             <div className='select-container'>
//                 <Select value={format} onChange={handleChange}>
//                     <MenuItem value='hex'>HEX - #ffffff</MenuItem>
//                     <MenuItem value='rgb'>RGB - rgb(255,255,255)</MenuItem>
//                     <MenuItem value='rgba'>RGBA - rgba(255,255,255,1)</MenuItem>
//                 </Select>
//             </div>
//         </nav>
//     );
// };

export default Navbar;