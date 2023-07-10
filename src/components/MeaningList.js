import React from 'react'

const MeaningList = ({ mean }) => {
  return (
    <div>
        {mean.map(val => val.meanings.map(means => means.definitions.map(def => (
        <li key={def.definition}>{def.definition}</li>
        ))))}
    </div>
  );
};

export default MeaningList;