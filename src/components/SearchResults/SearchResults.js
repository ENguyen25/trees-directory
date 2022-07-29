import { useEffect, useState, useRef } from "react";
import Airtable from "airtable";
import "../Hero/Hero.css";
import "./SearchResults.css";

import NavBar from "../NavBar/NavBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Trees from "../Trees/Trees";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const base = new Airtable({ apiKey: "keycVUqNgXbPQmTBb" }).base(
  "apppAm9jBXoifxazs"
);

const treesPerRow = 18;

function SearchResults() {
  const [trees, setTrees] = useState([]);
  const [next, setNext] = useState(treesPerRow);
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [filter, setFilter] = useState(false);
  const myRef = useRef(null);

  const productsAndUsesArray = [
    "Alcoholic Maceration",
    "Aromatic",
    "Craft Material",
    "Cultural Importance",
    "Edible",
    "Essential Oil",
    "Fruit",
    "Living Fence",
    "Medicine",
    "Nut",
    "Oil",
    "Ornamental",
    "Other",
    "Pollinator Attractor",
    "Resin",
    "Soil Improvement",
    "Timber",
  ];

  useEffect(() => {
    base("Our Trees")
      .select({ view: "Grid view", maxRecords: 665 })
      .eachPage((records, fetchNextPage) => {
        setTrees((current) => [...current, ...records]);
        setFilteredResults((current) => [...current, ...records]);
        fetchNextPage();
      });
  }, []);

  const loadMoreTrees = () => {
    setNext(next + treesPerRow);
  };

  const searchItems = (searchValue) => {
    setFilter(false);
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = trees.filter((tree) => {
        const botanicalName = tree.fields["Botanical Name"]
          .toLowerCase()
          .includes(searchInput.toLowerCase());
        const familyName = tree.fields["Family Botanical Name"]
          .toLowerCase()
          .includes(searchInput.toLowerCase());
        if (tree.fields["Other Known Names"] !== undefined) {
          var commonName = tree.fields["Other Known Names"]
            .toLowerCase()
            .includes(searchInput.toLowerCase());
        }

        return botanicalName || familyName || commonName;
      });
      console.log(filteredData);
      setFilteredResults(filteredData);
      setNext(treesPerRow)
    }
  };

  const executeScroll = (e) => {
    e.preventDefault();
    e.target.reset();
    myRef.current.scrollIntoView();
  };

  const plantOrTree = (value) => {
    const filteredData = trees.filter((tree) => {
      return tree.fields["Plant or Tree"].toString().includes(value);
    });

    setFilter(true);
    setFilteredResults(filteredData);
    setNext(treesPerRow)
  };

  const productsAndUses = (value) => {
    const filteredData = trees.filter((tree) => {
      if (tree.fields["Products and Uses"] !== undefined) {
        return tree.fields["Products and Uses"].toString().includes(value);
      }
    });

    setFilter(true);
    setFilteredResults(filteredData);
    setNext(treesPerRow)
  };

  return (
    <>
      <div className="hero">
        <NavBar />
        <div className="header">
          <p className="heroTitle">Camino Verde Tree Database</p>
          <p className="heroSubtitle">Explore Amazonian Plants</p>
          <form onSubmit={executeScroll}>
            <input
              type="text"
              placeholder="Search"
              className="mainSearchBar"
              onChange={(e) => searchItems(e.target.value)}
            />
            <button className="submitBtn" type="submit"></button>
          </form>
        </div>
      </div>
      <ImageGallery />
      <div className="searchContainer">
        <div className="rightColumn">
          <input
            type="text"
            placeholder="Search"
            className="searchBar"
            onChange={(e) => searchItems(e.target.value)}
          />
          <br />
          <Accordion>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>Species Type</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="checkbox">
                  <input
                    type="checkbox"
                    id="species-type"
                    name="species-type"
                    value="plant"
                    onChange={() => plantOrTree("Plant")}
                  />
                  <label for="species-type"> Plant</label>
                </div>
                <div className="checkbox">
                  <input
                    type="checkbox"
                    id="species-type"
                    name="species-type"
                    value="tree"
                    onChange={() => plantOrTree("Tree")}
                  />
                  <label for="species-type"> Tree</label>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>Products and Uses</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                {productsAndUsesArray.map((products) => (
                  <div className="checkbox">
                    <input
                      type="checkbox"
                      id={products}
                      name={products}
                      value="plant"
                      onChange={() => productsAndUses(products)}
                    />
                    <label for={products}> {products}</label>
                  </div>
                ))}
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="leftColumn">
          <div className="searchResults">
            {searchInput.length > 1 || filter === true
              ? filteredResults.slice(0, next).map((tree) => {
                  return <Trees key={tree.getId()} treeData={tree} />;
                })
              : trees.slice(0, next).map((tree) => {
                  return <Trees key={tree.getId()} treeData={tree} />;
                })}
          </div>
            {(next < filteredResults.length) ? (
              <div className="loadMore">
                <button className="loadButton" onClick={loadMoreTrees}>
                  Load more
                </button>
              </div>
            ) : null}
        </div>
      </div>
    </>
  );
}

export default SearchResults;
