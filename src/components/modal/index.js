import React, { useState } from 'react';


const Modal = ({ onClose, currentPhoto }) => {
    // destructure currentPhoto properties into constants to 
    // assign their values into the modal
    const { name, category, description, index, github, deploy } = currentPhoto;
    //set the initial state of isModalOpen to false, 
    // because we don't want the modal to open until a user has 
    // clicked on an image.
    const [isModalOpen, setIsModalOpen] = useState(false);


    return (
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">{name}</h3>
                <img src={require(`../../assets/${category}/${index}.png`)} alt="current category" />
                <p>{description}</p>
                <button onClick={onClose} type="button">
                    Close this modal
          </button>
          <a href={github}><button className="linkBtn">Github Repo</button></a>    
          <a href={deploy}><button className="linkBtn">View Live</button></a>    
            </div>
        </div>
    );
}

export default Modal;