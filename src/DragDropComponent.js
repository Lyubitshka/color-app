import React from "react";
import useStyles from './styles/DragDropComponentStyle';

function DragDropComponent(props) {
    const classes = useStyles();
    return (
        <div
            className={classes.root}
            style={{ backgroundColor: props.color }}
        >
            {props.name}
        </div>
    )
};

export default DragDropComponent;