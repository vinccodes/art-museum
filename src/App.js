import logo from './logo.svg';
import './App.css';

// harvart art data
import harvardArt from './data/harvardArt';

// react router for routing
import {
  createBrowserRouter, createRoutesFromElements,
  RouterProvider, Route, Outlet
} from 'react-router-dom';

// Components
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import Error from './pages/Error';
// Loaders
import GalleryView, { galleryViewLoader } from './components/GalleryView/GalleryView';
import GalleryNavigation from './components/GalleryNavigation/GalleryNavigation';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>

      <Route path="gallery" element={<Home />} />
        <Route path=":galleryId" 
               element={<GalleryView />}
               loader={galleryViewLoader} />
               
      <Route path="*" element={<Error />} />
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
