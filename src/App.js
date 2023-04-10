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
import GalleryView from './components/GalleryView/GalleryView';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route path="home" element={<Home />} />
      <Route path="gallery/:galleryId" element={<GalleryView />} />
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
