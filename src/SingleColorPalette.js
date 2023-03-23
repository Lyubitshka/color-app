import { useParams, Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import ColorBox from "./ColorBox";

import seedColors from "./seedColors";
import { generatePalette } from './chromaHelpers';


const SingleColorPalette = () => {

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
    console.log(gatherShades(palette, colorId));

    const shades = gatherShades(palette, colorId);

    const colorBoxes = shades.map(color => (
        <ColorBox
            key={uuid()}
            name={color.name}
            background={color.hex}
            showLink={false}
        />
    ));

    return (
        <div className="Palette">
            {colorBoxes}
            <div className="Palette-footer">
                {palette.paletteName}
                <span className="emoji">{palette.emoji}</span>
            </div>
        </div>
    )
};
export default SingleColorPalette;