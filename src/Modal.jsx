import './Modal.css'
import { useState, useEffect } from 'react';

function Modal({modalIsOpen, onClose, modalData}){
    const modalImageUrl = `https://image.tmdb.org/t/p/w500${modalData.backdrop_path}`;
    
    if (!modalIsOpen){
        return null;
    }
    const handleModalClose = () => {
        onClose(false);
    }

    return(
        <div>
            <div id="movieModal" className="modal">
                <div className="modal-content">
                    <div className="modal-header">
                        <div className="modal-button">
                            <span className="close" onClick={handleModalClose}>&times;</span>
                        </div>
                        <h2>{modalData.title}</h2>
                    </div>
                    <img src={modalImageUrl} alt={modalData.title} width="400" height="250" />
                    <p><strong>Release Date:</strong> {modalData.release_date}</p>
                    <p><strong>Runtime:</strong> {modalData.runtime} minutes</p>
                    <p><strong>Overview:</strong> {modalData.overview}</p>
                    <p><strong>Genres:</strong></p>
                    {
                        modalData.genres ?
                        modalData.genres.map(obj => {
                            return (
                                <li key={obj.name}>{obj.name}</li>
                            )
                        }) : 
                        <p>Loading genres...</p>
                    }
                </div>
            </div>
        </div>
    );

}

export default Modal;