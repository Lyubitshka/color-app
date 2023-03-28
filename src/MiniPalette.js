import { useNavigate } from 'react-router-dom';

import useStyles from './styles/MiniPaletteStyles';

function MiniPalette(props) {
    const classes = useStyles(props);
    const { colors, id, paletteName, emoji} = props;
    const history = useNavigate();

    const handleClick = (event) => {
        event.preventDefault();
        history(`/palette/${id}`);
    }
    const miniColors = colors.map(color => (
        <div
            className={classes.miniColor}
            style={{ backgroundColor: color.color }}
            key={color.name}
        />
    ))
    return (
        <div className={classes.root} onClick={handleClick}>

            <div className={classes.colors}>
                {miniColors}
            </div>

            <h5 className={classes.title}>
                {paletteName}
                <span className={classes.emoji}>{emoji}</span>
            </h5>


        </div>

    );
};

export default MiniPalette;