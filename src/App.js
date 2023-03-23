import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Root';
import Palette from './Palette';
import './App.css';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import PaletteRoot from './PaletteRoot';
import seedColors from './seedColors';


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
        path: 'palette',
        element: <PaletteRoot />,
        children: [
          {
            path: ':id',
            element: <Palette />,
          },
          {
            path: ':paletteId/:colorId',
            element: <SingleColorPalette />
          }
        ]
      },
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