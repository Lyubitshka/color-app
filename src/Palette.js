import { useState } from "react";
import { useParams } from "react-router-dom";
import ColorBox from "./ColorBox"
import Navbar from "./Navbar";
import './Palette.css';
import seedColors from "./seedColors";
import { generatePalette } from './chromaHelpers';


function Palette() {
    
    const [level, setLevel] = useState(500);
    const [format, setFormat] = useState('hex');

    const { id } = useParams();
    const findPalette = id => {
        return seedColors.find(function(palette) {
            return palette.id === id;
        })
    }
    const palette = generatePalette(findPalette(id));

    function changeLevel(level) {
        setLevel(level)
    }
    function changeFormat(value) {
        setFormat(value);
    }

    const colorBoxes = palette.colors[level].map(color => (
        <ColorBox background={color[format]} name={color.name} key={color.id} />
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
            <div className="Palette-footer">
                {palette.paletteName}
                <span className="emoji">{palette.emoji}</span>
            </div>
        </div>
    )
};
export default Palette;
