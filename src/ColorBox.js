import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import useStyles from './styles/ColorBoxStyles';

function ColorBox(props) {
  const [state, setState] = useState({ copied: false });
  const { copied } = state;
  const classes = useStyles(props);
  const { background, name, moreUrl, showingFullPalette} = props;

  function copyStateHandler() {
    setState({ copied: true });
    setTimeout(() => setState({ copied: false }), 1500);
  }

  return (
    <CopyToClipboard text={background} onCopy={copyStateHandler}>
      <div style={{ background }} className={classes.ColorBox}>
        <div
          className={`${classes.copyOverlay} ${copied &&
            classes.showOverlay}`}
          style={{ background }}
        />
        <div className={`${classes.copyMessage} ${copied &&
          classes.showMessage}`}>
          <h1>COPIED!</h1>
          <p className={classes.copyText}>
            {background}
          </p>
        </div>
        <div>
          <div className={classes.boxContent}>
            <span className={classes.colorName}>
              {name}
            </span>
          </div>
          <button className={classes.copyButton}>Copy</button>
        </div>
        {showingFullPalette && (
          <Link to={moreUrl} onClick={e => e.stopPropagation()}>
            <span className={classes.seeMore}>MORE</span>
          </Link>
        )}
      </div>
    </CopyToClipboard>
  );
};

export default ColorBox;