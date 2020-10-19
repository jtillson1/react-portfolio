import React, { useState } from 'react';
import Modal from '../modal';

const PhotoList = ({ category }) => {

  const [photos] = useState([
    {
      name: 'Food Festival',
      category: 'Portfolio',
      github: 'https://github.com/jtillson1/food-festival',
      deploy: 'https://jtillson1.github.io/food-festival'
    },
    {
      name: 'Note Taker',
      category: 'Portfolio',
      github:'https://jtillson1.github.io/note-taker',
      deploy: 'https://vu-note-taker.herokuapp.com/'
    },
    {
      name: 'Run Buddy',
      category: 'Portfolio',
      github: 'https://github.com/jtillson1/run-buddy',
      deploy:'https://jtillson1.github.io/run-buddy'
    },
    {
      name: 'SpeakEasy',
      category: 'Portfolio',
      github:  'https://github.com/adamkeyser45/thespeakeasy',
      deploy: 'https://fierce-forest-64673.herokuapp.com/'
    },
    {
      name: 'Taskinator',
      category: 'Portfolio',
      github: 'https://github.com/jtillson1/Taskinator',
      deploy: 'https://jtillson1.github.io/Taskinator/'
    },
    {
      name: 'WeatherMan',
      category: 'Portfolio',
      github:'https://github.com/jtillson1/weatherman',
      deploy:'https://jtillson1.github.io/weatherman/'
    },
  ]);

  const currentPhotos = photos.filter((photo) => photo.category === category);
  const [currentPhoto, setCurrentPhoto] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  //toggleModal is the click handler 
  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  }

  return (
    <div>
      {isModalOpen && (
        <Modal currentPhoto={currentPhoto} onClose={toggleModal} />
      )}
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/${category}/${i}.png`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            //click handler is called toggleModal
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
