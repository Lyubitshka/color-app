import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import seedColors from "./seedColors";
import { generatePalette } from './chromaHelpers';


const SingleColorPalette = (props) => {

    // const [level, setLevel] = useState(500);
    // const [format, setFormat] = useState('hex');
    // const [shades, setShades] = useState('')

    // const { id, colorId } = useParams();
   
    // const findPalette = id => {
    //     return seedColors.find(function (palette) {
    //         return palette.id === id;
    //     })
    // }
    // const palette = generatePalette(findPalette(id));
    
 
    function gatherShades(palette, colorId) {
        let shades = [];
        let allColors = palette.colors;
        for (let key in allColors) {
            shades = shades.concat(
                allColors[key].filter(color => color.id === colorId)
            )
        }
        return shades.slice(1);
    }

    // function changeLevel(level) {
    //     setLevel(level)
    // }
    // function changeFormat(value) {
    //     setFormat(value);
    // }

    // const colorBoxes = palette.colors[level].map(color => (
    //     <ColorBox
    //         background={color[format]}
    //         name={color.name}
    //         key={color.id}
    //         moreUrl={`/palette/${id}/${color.id}`}
    //         paletteId={id}
    //         colorId={color.id}
    //     />
    // ));

    return (
        <div className="Palette">
            {/* <Navbar
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
            </div> */}
        </div>
    )
};
export default SingleColorPalette;