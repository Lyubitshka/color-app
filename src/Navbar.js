import { Component, useState } from 'react';
import { MenuItem, Snackbar, Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Select from '@mui/material/Select';
import Slider, { Range } from 'rc-slider';

import 'rc-slider/assets/index.css';

import './Navbar.css';
import { Link } from 'react-router-dom';

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = { format: 'hex ', open: false };
		this.handleChange = this.handleChange.bind(this);
		this.closeSnack = this.closeSnack.bind(this);
	}
	handleChange(event) {
		this.setState({ format: event.target.value, open: true });
		this.props.handleChange(event.target.value);
	}
	closeSnack() {
		this.setState({ open: false });
	}
	render() {
		const { level, changeLevel, isSingleColor } = this.props;
		const { format } = this.state;
		return (
			<nav className="Navbar">
				<div className="logo">
					<Link to='/'>reactcolorpicker</Link>
				</div>
				{
					isSingleColor && (
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
					)
				}

				<div className='select-container'>
					<Select value={format} onChange={this.handleChange}>
						<MenuItem value='hex'>HEX - #ffffff</MenuItem>
						<MenuItem value='rgb'>RGB - rgb(255,255,255)</MenuItem>
						<MenuItem value='rgba'>RGBA - rgba(255,255,255,1)</MenuItem>
					</Select>
				</div>
				<Snackbar
					anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
					open={this.state.open}
					autoHideDuration={3000}
					message={
						<span id="message-id">
							Format changed to {format.toUpperCase()}
						</span>}
					ContentProps={{
						'aria-describedby': "message-id"
					}}
					onClose={this.closeSnack}
					action={[
						<IconButton
							onClick={this.closeSnack}
							color='inherit'
							key='close'
							aria-label='close'
						>
							<CloseIcon />
						</IconButton>
					]}
				/>
			</nav >
		);

	}


}

export default Navbar;