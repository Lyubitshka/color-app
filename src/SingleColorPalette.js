import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import Navbar from "./Navbar";
import ColorBox from "./ColorBox";
import PaletteFooter from "./PaletteFooter";

import useStyles from './styles/PaletteStyles';

import seedColors from "./seedColors";
import { generatePalette } from './chromaHelpers';

const SingleColorPalette = (props) => {
    const [format, setFormat] = useState('hex');

    const { paletteId, colorId } = useParams();
    const classes = useStyles(props);

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
            showingFullPalette={false}
        />
    ));

    function changeFormat(value) {
        setFormat(value);
    }

    return (

        <div className={classes.Palette}>
            <Navbar
                handleChange={changeFormat}
                isSingleColor={false}
            />
            <div className={classes.colors}>
                {colorBoxes}
                <div className={classes.goBack} >
                    <Link to={`/palette/${paletteId}`} >GO BACK</Link>
                </div>
            </div>

            <PaletteFooter paletteName={palette.paletteName} emoji={palette.emoji} />
        </div>
    )
};
export default SingleColorPalette;