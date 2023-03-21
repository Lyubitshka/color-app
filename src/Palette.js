import { useState } from "react";
import ColorBox from "./ColorBox"
import Navbar from "./Navbar";
import './Palette.css';

function Palette(props) {
    const [level, setLevel] = useState(500);
    const [format, setFormat] = useState('hex');

    function changeLevel(level) {
        setLevel(level)
    }
    function changeFormat(value) {
        setFormat(value);
        alert(value);
    }

    const colorBoxes = props.palette.colors[level].map(color => (
        <ColorBox background={color[format]} name={color.name} key={color.name} />
    ));
    
    return (
        <div className="Palette">
            <Navbar
                level={level}
                changeLevel={changeLevel}
                handleChange={changeFormat}
            />
            <div className='Palette-colors'>
                {colorBoxes}
            </div>
        </div>
    )
};
export default Palette;
