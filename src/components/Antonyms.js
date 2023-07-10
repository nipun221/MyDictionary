import React from 'react'

const Antonyms = ({ mean }) => {
  return (
    <div className="columns-2 md:columns-3">
      {mean.map((val) =>
      val.meanings.map((means) =>
      means.antonyms?.map((syn) => <li>{syn}</li>)
      ))}

    </div>
  );
};

export default Antonyms;
