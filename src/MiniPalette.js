import { useNavigate } from 'react-router-dom';
import { withStyles } from '@mui/styles'

const styles = {
    root: {
        backgroundColor: "white",
        border: '1px solid black',
        borderRadius: '5px',
        padding: '0.5rem',
        position: 'relative',
        overflow: 'hidden',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    colors: {
        backgroundColor: '#dae1e4',
        height: '120px',
        width:'100%',
        borderRadius: '5%',
        overflow: 'hidden'
    },
    title: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItem: 'center',
        margin: '0',
        color: 'black',
        paddingTop: '0.5rem',
        fontSize: '1rem',
        position: 'relative'
    },
    emoji: {
        marginLeft: '0.5rem',
        fontSize: '1.5rem'

    },
    miniColor:{
        height: '25%',
        width: '20%',
        display: 'inline-block',
        margin: '0 auto',
        position: 'relative',
        marginBottom: '-4px'
    }
}

function MiniPalette(props) {
    const { colors, id, paletteName, emoji, classes } = props;
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

export default withStyles(styles)(MiniPalette);