import { useState } from "react";
import { useParams } from "react-router-dom";
import ColorBox from "./ColorBox"
import Navbar from "./Navbar";
import './Palette.css';
import seedColors from "./seedColors";
import { generatePalette } from './chromaHelpers';
import PaletteFooter from "./PaletteFooter";


function Palette() {

    const [level, setLevel] = useState(500);
    const [format, setFormat] = useState('hex');

    const { id } = useParams();
    
    const findPalette = id => {
        return seedColors.find(function (palette) {
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
        <ColorBox
            background={color[format]}
            name={color.name}
            key={color.id}
            moreUrl={`/palette/${id}/${color.id}`}
            paletteId={id}    
            colorId={color.id}
            showLink={true}
        />
    ));

    return (
        <div className="Palette">
            <Navbar
                level={level}
                changeLevel={changeLevel}
                handleChange={changeFormat}
                isSingleColor={true}
            />
            <div className='Palette-colors'>
                {colorBoxes}
            </div>
            <PaletteFooter paletteName={palette.paletteName} emoji={palette.emoji} />
        </div>
    )
};
export default Palette;
