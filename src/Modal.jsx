import './Modal.css'

function Modal(modalIsOpen, movieTitle){
    if (!modalIsOpen){
        return;
    }
    console.log("in modal")
    return(
        <div>
            <div id="movieModal" className="modal">
                <div className="modal-content">
                    <div className="modal-header">
                        <span className="close">&times;</span>
                        <h1>Movie Title</h1>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Modal;