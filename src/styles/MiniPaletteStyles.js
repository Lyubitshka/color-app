import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles(
    {
        root: {
            backgroundColor: "white",
            border: '1px solid black',
            borderRadius: '5%',
            padding: '0.5rem',
            paddingBottom: '25px',
            position: 'relative',
            overflow: 'hidden',
            '&:hover': {
                cursor: 'pointer'
            }
        },
        colors: {
            backgroundColor: '#dae1e4',
            height: '180px',
            width: '100%',
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
            fontSize: '1.5rem',
            paddingBottom: "0.5rem"
        },
        miniColor: {
            height: '25%',
            width: '20%',
            display: 'inline-block',
            margin: '0 auto',
            position: 'relative',
            marginBottom: '-4.5px'
        }
    }
);

export default useStyles;