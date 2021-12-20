import React from "react";
import CollectionCard from "./CollectionCard";

export const PunkList = ({ punkListData }) => {
  console.log(punkListData);
  return (
    <div>
      {punkListData.map((punk) => (
        <div>
          <CollectionCard
            key={punk.token_id}
            id={punk.token_id}
            image_original_url={punk.image_original_url}
            traits={punk.traits}
            name={punk.name}
          />
        </div>
      ))}
    </div>
  );
};
