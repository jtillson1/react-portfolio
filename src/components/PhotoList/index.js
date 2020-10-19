import React, { useState } from 'react';
import Modal from '../modal';

const PhotoList = ({ category }) => {

  const [photos] = useState([
    {
      name: 'Food Festival',
      category: 'Portfolio',
      description: <a>https://jtillson1.github.io/food-festival</a>
    },
    {
      name: 'Note Taker',
      category: 'Portfolio',
      description: <a>https://jtillson1.github.io/note-taker</a>
    },
    {
      name: 'Run Buddy',
      category: 'Portfolio',
      description: <a>https://jtillson1.github.io/run-buddy</a>
    },
    {
      name: 'SpeakEasy',
      category: 'Portfolio',
      description:  <a>https://github.com/adamkeyser45/thespeakeasy</a>
    },
    {
      name: 'Taskinator',
      category: 'Portfolio',
      description: <a>https://github.com/adamkeyser45/taskinator</a>
    },
    {
      name: 'WeatherMan',
      category: 'Portfolio',
      description: <a>https://github.com/jtillson1/weatherman</a>
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
