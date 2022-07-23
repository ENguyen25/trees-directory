import React from 'react';
import { Link } from 'react-router-dom';

const Trees = ({ treeData }) => {

  const style = {
    searchCard: {
      background: 'green',
    },
    header: {
      color: 'darkgreen'
    },
    subtitle: {
      color: 'white'
    },
    tagLabel: {
      color: 'brown'
    },
    leftCard: {
      float: 'left'
    },
    rightCard: {
      float: 'right'
    },
    imageSize: {
      width: '10%',
      height: '10%'
    }
  }

  return (
    <div style={style.searchCard}>
      <div style={style.leftColumn}>
        <Link to={`/species/${treeData.id}`}>
          <h4 style={style.header}>{treeData.fields["Botanical Name"]}</h4>
        </Link>
          <p style={style.subtitle}>{treeData.fields["Family Botanical Name"]}</p>
          <p style={style.subtitle}>{treeData.fields["Other Known Names"]}</p>
          <p style={style.subtitle}>{treeData.fields["Plant or Tree"]}</p>
          {treeData.fields["Products and Uses"] !== undefined
            ? treeData.fields["Products and Uses"].map((product) => (
            <p style={style.tagLabel}>{product}</p>
          ))
            : null
          }
      </div>
      <div style={style.rightColumn}>
        {treeData.fields["Image of tree"] !== undefined
          ? <img style={style.imageSize} src={treeData.fields["Image of tree"]} alt={treeData.fields["Botanical Name"]} />
          : null
        }
      </div>
    </div>
  )
}

export default Trees