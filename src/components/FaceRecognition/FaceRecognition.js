import React from 'react';

const FaceRecognition = ({ imageUrl }) => {
   return (
      <div className='center ma'>
         <div className='absolute mt2'>
            <img alt='Facial recognition url' src={imageUrl} width='500px' height='atuo'/>
         </div>
      </div>
   );
}

export default FaceRecognition;