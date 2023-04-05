import { Outlet } from 'react-router-dom';
import GalleryNavigation from '../components/GalleryNavigation';

const RootLayout = ()=>{
    return (
        <div className="root-layout">
            This is the root layout
            <GalleryNavigation/>

            <Outlet />
        </div>
    )
};

export default RootLayout;