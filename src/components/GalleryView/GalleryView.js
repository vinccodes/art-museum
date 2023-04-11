
import React from 'react';
import { NavLink, useParams, useLoaderData } from 'react-router-dom';

// import data from '../../data/harvardArt';

// import './GalleryNavigation.css';

const GalleryView = () =>{
    const { galleryId } = useParams();
    const gallery = useLoaderData();


    return(
        <div className="gallery-view">
            <h2>Name: {gallery.name}</h2>
            <p>Theme: {gallery.theme}</p>
        </div>
    )
};



export default GalleryView;

export const galleryViewLoader = async({ params }) =>{
    const { galleryId } = params;
    const response = await fetch(`http://localhost:4000/records/${galleryId}`);
    return response.json();
}
