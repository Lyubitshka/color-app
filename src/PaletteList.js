import seedColors from "./seedColors";

import { withStyles } from '@mui/styles'

import MiniPalette from "./MiniPalette";

const styles = {
    root: {
        backgroundColor: 'blue',
        height: '100vh',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    container: {
        width: '60%',
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        flexWrap: 'wrap',
        border: '1px solid white'
    },
    nav: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between'
    },
    palettes: {
        boxSizing: 'border-box',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 30%)',
        gridGap: '5%'

    }

}
function PaletteList(props) {
    const { classes } = props;

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

export default withStyles(styles)(PaletteList);