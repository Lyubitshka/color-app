import Palette from './Palette';
import seedColors from './seedColors';
import './App.css';
import { generatePalette } from './chromaHelpers';

function App() {
  // console.log(generatePalette(seedColors[4]));  
  return (
    
    <Palette palette={generatePalette(seedColors[6])} />
  );
};

export default App;
