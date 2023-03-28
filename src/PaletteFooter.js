import useStyles from './styles/PaletteFooterStyles'

function PaletteFooter(props) {
    const classes = useStyles(props);
    return (
        <div className={classes.PaletteFooter}>
            {props.paletteName}
            <span className={classes.emoji}>{props.emoji}</span>
        </div>
    )
}

export default PaletteFooter;