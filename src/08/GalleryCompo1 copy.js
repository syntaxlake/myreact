import React from "react";
const GalleryCompo1 = ({ tour }) => {
<<<<<<< HEAD
=======
  const rows = Math.ceil(tour.length / 5); 
  const grid = [];
  
>>>>>>> 7cd1407c7d38496f4029697759a6393037c4a239
  return (
    <div>
      {tour.map((item) => {
        console.log(item.galTitle, item.galWebImageUrl, item.galPhotographyLocation);
        // Replace "http://" -> "https://" (http시 방화벽 발동)
        const imageUrl = item.galWebImageUrl.replace("http://", "https://");
        return (
          <div key={item.galTitle}>
            <h2>{item.galTitle}</h2>
            <div>
              <img src={imageUrl} alt={item.galTitle} />
            </div>
            <p>{item.galPhotographyLocation}</p>
<<<<<<< HEAD
            
=======
>>>>>>> 7cd1407c7d38496f4029697759a6393037c4a239
          </div>
        );
      })}
    </div>
  );
};

export default GalleryCompo1;