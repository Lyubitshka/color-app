import { useState } from "react";
import ColorBox from "./ColorBox";
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Palette.css';

function Palette(props) {
    const [level, setLevel] = useState(500);

    function changeLevel(level) {
        setLevel(level)
    }

    const colorBoxes = props.palette.colors[level].map(color => (
        <ColorBox background={color.hex} name={color.name} key={color.name} />
    ));

    return (
        <div className="Palette">
            <div className="slider">
                <Slider
                    defaultValue={level}
                    min={100}
                    max={900}
                    step={100}             
                    onChange={changeLevel}
                />
            </div>

            <div className='Palette-colors'>
                {colorBoxes}
            </div>
        </div>
    )
};
export default Palette;
