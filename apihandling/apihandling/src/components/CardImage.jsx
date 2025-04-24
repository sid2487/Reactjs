import React from "react";

const CardImage = ({image}) => {
    return (
      <div>
        {image ? (
          <>
            <img src={image} alt="Random Dog" style={{ width: "300px" }} />
            <p>Succssfully fetched</p>
          </>
        ) : (
          <p>Loading Image.....</p>
        )}
      </div>
    );
};

export default CardImage