import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './ColorBox.css';

function ColorBox(props) {
    const [state , setState ] = useState({copied: false});

    function copyStateHandler() {
        setState({copied: true});
        setTimeout(() => setState({copied: false}), 1500);
    }
    const { copied } = state;
    return (
        <CopyToClipboard text={props.background} onCopy={copyStateHandler}>
            <div style={{ background: props.background }} className="ColorBox">
                <div 
                    className={`copy-overlay ${copied && "show"}`} 
                    style={{ background: props.background }} 
                />
                <div className={`copy-message ${copied && "show"}`}>
                    <h1>COPIED!</h1>
                    <p>{props.background}</p>
                </div>
                <div className='copy-container'>
                    <div className='box-content'>
                        <span>{props.name}</span>
                    </div>
                    <button className='copy-button'>Copy</button>
                </div>
                <span className='see-more'>MORE</span>
            </div>
        </CopyToClipboard>
    );
};

export default ColorBox;