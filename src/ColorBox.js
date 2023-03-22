import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './ColorBox.css';

function ColorBox(props) {
    const [state, setState] = useState({ copied: false });

    function copyStateHandler() {
        setState({ copied: true });
        setTimeout(() => setState({ copied: false }), 1500);
    }
    const { copied } = state;
    const { background, name, moreUrl } = props;
    
    return (
        <CopyToClipboard text={background} onCopy={copyStateHandler}>
            <div style={{ background: background }} className="ColorBox">
                <div
                    className={`copy-overlay ${copied && "show"}`}
                    style={{ background: background }}
                />
                <div className={`copy-message ${copied && "show"}`}>
                    <h1>COPIED!</h1>
                    <p>{background}</p>
                </div>
                <div className='copy-container'>
                    <div className='box-content'>
                        <span>{name}</span>
                    </div>
                    <button className='copy-button'>Copy</button>
                </div>
                <Link to={moreUrl} onClick={e => e.stopPropagation()}>
                    <span className='see-more'>MORE</span>

                </Link>
            </div>
        </CopyToClipboard>
    );
};

export default ColorBox;