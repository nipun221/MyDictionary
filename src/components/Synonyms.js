import React from 'react'

const Synonyms = ({ mean }) => {
  return (
    <div className="columns-2 md:columns-3">
      {mean.map((val) =>
      val.meanings.map((means) =>
      means.synonyms?.map((syn) => <li>{syn}</li>)
      ))}

    </div>
  );
};

export default Synonyms;
