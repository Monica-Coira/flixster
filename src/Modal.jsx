import './Modal.css'
import { useState, useEffect } from 'react';

const Modal = ({modalIsOpen, onClose, modalData, trailerData}) => {
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
                    <div className="modal-left">
                        <div className="modal-header">
                            <div className="modal-button">
                                <span className="close" onClick={handleModalClose}>&times;</span>
                            </div>
                            <h2>{modalData.title}</h2>
                        </div>
                        <img src={modalImageUrl} alt={modalData.title} width="400" height="250" />
                    </div>
                    <div className="modal-right">
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
                        <div>
                            {trailerData ? (
                                <iframe 
                                    title="Trailer"
                                    className="movie-trailer"
                                    width="300"
                                    height="200"
                                    src={`https://www.youtube.com/embed/${trailerData}`}
                                    frameBorder = "0"
                                    allowFullScreen
                                />
                            ) : (
                                <p>Loading movie trailer...</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Modal;