import { useState } from "react";
import { useParams } from "react-router-dom";
import ColorBox from "./ColorBox"
import Navbar from "./Navbar";
import useStyles from "./styles/PaletteStyles";

import seedColors from "./seedColors";
import { generatePalette } from './chromaHelpers';
import PaletteFooter from "./PaletteFooter";


function Palette(props) {
    const [level, setLevel] = useState(500);
    const [format, setFormat] = useState('hex');

    const { id } = useParams();
    const classes = useStyles(props);
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
            showingFullPalette={true}
        />
    ));

    return (
        <div className={classes.Palette}>
            <Navbar
                level={level}
                changeLevel={changeLevel}
                handleChange={changeFormat}
                isSingleColor={true}
            />
            <div className={classes.colors}>
                {colorBoxes}
            </div>
            <PaletteFooter paletteName={palette.paletteName} emoji={palette.emoji} />
        </div>
    )
};
export default Palette;
