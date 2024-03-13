import React from "react";

import "../styles/PhotoListItem.scss";


const props = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

// image at the top, then profile picture, then user name, then city, country
const PhotoListItem = () => {
  return (
    <>
      <img src={props.imageSource} />
      <div>
        <img src={props.profile} />
        <div>
          {props.username}
          <div>
            {props.location.city}, {props.location.country}
          </div>          
        </div>
      </div>
    </>
  )
};

export default PhotoListItem;
