import seedColors from "./seedColors";
import MiniPalette from "./MiniPalette";
import useStyles from "./styles/PaletteListStyles";

function PaletteList(props) {
    const classes = useStyles(props);

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <nav className={classes.nav}>
                    <h1>reactcolorpicker</h1>
                </nav>
                <div className={classes.palettes}>
                    {seedColors.map(palette => (
                        <MiniPalette {...palette} key={palette.id} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PaletteList;