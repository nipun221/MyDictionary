import React from 'react'

const Example = ({ mean }) => {
  return (
    <div>
        {mean.map(val => val.meanings.map(means => means.definitions.map(def => {
            return <li key={def.example}>{def.example}</li>
        })))}
    </div>
  );
};

export default Example;

