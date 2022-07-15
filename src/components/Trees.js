import React from 'react'

const Trees = ({ treeData }) => {

  return (
    <div>
        <h4>{treeData.fields["Botanical Name"]}</h4>
        <p>{treeData.fields["Family Botanical Name"]}</p>
        <p>{treeData.fields["Other Known Names"]}</p>
        <p>{treeData.fields["Tree Profile"]}</p>
        <p>{treeData.fields["Plant or Tree"]}</p>
        <p>{treeData.fields["Products and Uses"]}</p>
    </div>
  )
}

export default Trees