function PaletteFooter(props) {
    return (

        <div className="Palette-footer">
            {props.paletteName}
            <span className="emoji">{props.emoji}</span>
        </div>
    )
}

export default PaletteFooter;