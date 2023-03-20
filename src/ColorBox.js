import './ColorBox.css';

function ColorBox(props) {
    return (
        <div style={{background: props.background}} className="ColorBox">
            <span>{props.name}</span>
            <span>MORE</span>
        </div>
    );
};

export default ColorBox;