import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Root';
import Palette from './Palette';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import PaletteRoot from './PaletteRoot';
import NewPalette from './NewPalette';

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
          },
          {
            path: 'new',
            element: <NewPalette />,
          },
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