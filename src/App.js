import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Root';
import Palette from './Palette';
import './App.css';
import PaletteList from './PaletteList';


const router = createBrowserRouter([
  { 
    path: '/', 
    element: <Root />,
    children: [
      {
        index: true,
        element: <PaletteList />
      },
      {
        path: '/palette/:id',
        element: <Palette />
      }
    ]
  }
])

function App() {

   return (
    <RouterProvider router={router} />
    
  );
};

export default App;

// element: <Palette palette={generatePalette(seedColors[3])} 