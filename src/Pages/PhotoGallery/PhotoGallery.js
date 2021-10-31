import React from 'react';
import Photo from './Photo';
import PhotoBanner from './PhotoBanner';

const PhotoGallery = () => {
    return (
        <div>
            <PhotoBanner/>
            <div style={{marginTop:60}}>
                <h1>Gallery</h1>
            <Photo></Photo>
            </div>
        </div>
    );
};

export default PhotoGallery;