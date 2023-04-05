import React from 'react';
import { NavLink } from 'react-router-dom';

import data from '../../data/harvardArt';

import './GalleryNavigation.css';

const GalleryNavigation = () =>{

    const [galleries, setGalleries] = React.useState(data.records);

    const allGalleries = galleries.map(gallery=>
        (<NavLink key={gallery.id} 
                  to='galleries/{gallery.galleryid}'
                  className="nav__link">{gallery.name}</NavLink>)
    )
    return(
        <header>
            <nav>
                <NavLink to='home'>Home</NavLink>
                {allGalleries}
            </nav>
        </header>
    )
};

export default GalleryNavigation;