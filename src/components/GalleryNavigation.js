import React from 'react';

import data from '../data/harvardArt';

const GalleryNavigation = () =>{

    const [galleries, setGalleries] = React.useState(data.records);
    return(
        
        <h1>Galleries</h1>
    )
};

export default GalleryNavigation;