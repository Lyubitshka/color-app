import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import Navbar from "./Navbar";
import ColorBox from "./ColorBox";
import PaletteFooter from "./PaletteFooter";

import seedColors from "./seedColors";
import { generatePalette } from './chromaHelpers';


const SingleColorPalette = (props) => {
    const [format, setFormat] = useState('hex');

    const { paletteId, colorId } = useParams();

    const findPalette = paletteId => {
        return seedColors.find(function (palette) {
            return palette.id === paletteId;
        })
    }
    const palette = generatePalette(findPalette(paletteId));

    function gatherShades(palette, colorToFilterBy) {
        let shades = [];
        let allColors = palette.colors;
        for (let key in allColors) {
            shades = shades.concat(
                allColors[key].filter(color => color.id === colorToFilterBy)
            )
        }
        return shades.slice(1);
    }

    const shades = gatherShades(palette, colorId);

    const colorBoxes = shades.map(color => (
        <ColorBox
            key={uuid()}
            name={color.name}
            background={color[format]}
            showLink={false}
        />
    ));

    function changeFormat(value) {
        setFormat(value);
    }

    return (

        <div className="SingleColorPalette Palette">
            <Navbar
                handleChange={changeFormat}
                isSingleColor={false}
            />
            <div className="Palette-colors">
                {colorBoxes}
                <div className="go-back ColorBox" >
                    <Link to={`/palette/${paletteId}`} className="back-button">GO BACK</Link>
                </div>
            </div>

            <PaletteFooter paletteName={palette.paletteName} emoji={palette.emoji} />
        </div>
    )
};
export default SingleColorPalette;