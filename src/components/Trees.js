import React from 'react';
import { Link } from 'react-router-dom';

const Trees = ({ treeData }) => {

  return (
    <div>
      <Link to={`/species/${treeData.id}`}>
        <h4>{treeData.fields["Botanical Name"]}</h4>
      </Link>
        <p>{treeData.fields["Family Botanical Name"]}</p>
        <p>{treeData.fields["Other Known Names"]}</p>
        <p>{treeData.fields["Plant or Tree"]}</p>
        {treeData.fields["Products and Uses"] !== undefined
          ? treeData.fields["Products and Uses"].map((product) => (
          <p>{product}</p>
        ))
          : null
        }
    </div>
  )
}

export default Trees