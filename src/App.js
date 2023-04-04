import logo from './logo.svg';
import './App.css';

// harvart art data
import harvardArt from './data/harvardArt';

// react router for routing
import {
  createBrowserRouter, createRoutesFromElements,
  RouterProvider, Route
} from 'react-router-dom';

// Components
import RootLayout from './layouts/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
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
