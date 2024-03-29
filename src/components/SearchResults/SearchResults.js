import { useEffect, useState, useRef } from "react";
import { FiSearch } from 'react-icons/fi';
import Airtable from "airtable";
import "../Hero/Hero.css";
import "./SearchResults.css";

import NavBar from "../NavBar/NavBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Trees from "../Trees/Trees";
import search from "../../assets/images/magnifying-glass.png";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from "react-accessible-accordion";

const base = new Airtable({ apiKey: "keydLeTvuj6nDvKeT" }).base(
  "apppAm9jBXoifxazs"
);

const treesPerRow = 18;

const productsAndUsesArray = [
  "Alcoholic Maceration",
  "Aromatic",
  "Craft Material",
  "Cultural Importance",
  "Edible",
  "Essential Oil",
  "Fruit",
  "Living Fence",
  "Medicine"
];

const productsAndUsesArray2 = [
  "Nut",
  "Oil",
  "Ornamental ",
  "Other",
  "Pollinator Attractor",
  "Resin",
  "Soil Improvement",
  "Timber"
]

function SearchResults() {
  const [trees, setTrees] = useState([]);
  const [next, setNext] = useState(treesPerRow);
  const [searchInput, setSearchInput] = useState("");
  const [checkedProducts, setCheckedProducts] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [filter, setFilter] = useState(false);
  const myRef = useRef(null);

  useEffect(() => {
    base("Our Trees")
      .select({ view: "Grid view", maxRecords: 665 })
      .eachPage((records, fetchNextPage) => {
        setTrees((current) => [...current, ...records]);
        setFilteredResults((current) => [...current, ...records]);
        fetchNextPage();
      });
  }, []);

  useEffect(() => {
    if (!filter) {
      setFilteredResults(trees);
    }
  }, [filter]);

  useEffect(() => {
    if (checkedProducts.length === 0) {
      doSearch();
      return;
    }
    filterItems();
  }, [checkedProducts]);

  useEffect(() => {
    doSearch();
  }, [searchInput]);

  useEffect(() => {
    doFilter();
  }, [checkedProducts, searchInput]);

  const doFilter = () => {
    if (filter && checkedProducts.length === 0 && searchInput.length === 0) {
      setFilter(false);
      return;
    }

    if (!filter && checkedProducts.length !== 0 && searchInput.length !== 0) {
      setFilter(true);
    }
  };

  const filterItems = () => {
    const filtered = trees.filter((result) => {
      if (result.fields["Products and Uses"] === undefined) {
        return false;
      }

      return checkedProducts.every((filter) => {
        if (filter === "Plant" || filter === "Tree") {
          return result.fields["Plant or Tree"].includes(filter)
        } else {
          return result.fields["Products and Uses"].includes(filter)
        }
      })
    })
    console.log(filtered)
    setFilteredResults(filtered);
  };

  const handleChange = (e) => {
    if (e.target.checked) {
      setCheckedProducts([...checkedProducts, e.target.value]);
    } else {
      setCheckedProducts(checkedProducts.filter((id) => id !== e.target.value));
    }
  };

  const loadMoreTrees = () => {
    setNext(next + treesPerRow);
  };

  const doSearch = () => {
    const searchTerm = searchInput.toLowerCase();
    const findTree = (field) =>
      field && field.toLowerCase().includes(searchTerm);

    const filtered = trees.filter(
      (tree) =>
        findTree(tree.fields["Botanical Name"]) ||
        findTree(tree.fields["Family Botanical Name"]) ||
        findTree(tree.fields["Other Known Names"])
    );

    setFilteredResults(filtered);
  };

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    setNext(treesPerRow);
  };

  const executeScroll = (e) => {
    e.preventDefault();
    e.target.reset();
    myRef.current.scrollIntoView();
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
              value={searchInput}
            />
            <button className="submitBtn" type="submit"></button>
          </form>
        </div>
      </div>
      <ImageGallery />
      <div className="searchContainer">
        <div className="rightColumn">
          <div className="inputIcons">
            <img className="searchLogo" src={search} alt="search logo"></img>
            <input
              type="text"
              placeholder="Search"
              className="searchBar"
              value={searchInput}
              onChange={(e) => searchItems(e.target.value)}
            />
          </div>
          <br />
          <Accordion>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>Species Type</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="checkbox species-type">
                  <input
                    type="checkbox"
                    id="species-type"
                    name="species-type"
                    value="Plant"
                    onChange={handleChange}
                  />
                  <label htmlFor="species-type"> Plant</label>
                </div>
                <div className="checkbox species-type">
                  <input
                    type="checkbox"
                    id="species-type"
                    name="species-type"
                    value="Tree"
                    onChange={handleChange}
                  />
                  <label htmlFor="species-type"> Tree</label>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>Products and Uses</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="checkboxColumn">
                  {productsAndUsesArray.map((products) => (
                    <div key={products} id={products} className="checkbox">
                      <input
                        type="checkbox"
                        id={products}
                        name={products}
                        value={products}
                        onChange={handleChange}
                      />
                      <label htmlFor={products}> {products}</label>
                    </div>
                  ))}
                </div>
                <div className="checkboxColumn">
                  {productsAndUsesArray2.map((products) => (
                    <div key={products} id={products} className="checkbox">
                      <input
                        type="checkbox"
                        id={products}
                        name={products}
                        value={products}
                        onChange={handleChange}
                      />
                      <label htmlFor={products}> {products}</label>
                    </div>
                  ))}
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="leftColumn" ref={myRef}>
          <div className="searchResults">
            {filteredResults.slice(0, next).map((tree, i) => {
              return <Trees key={`${i}-${tree.getId()}`} treeData={tree} />;
            })}
          </div>
          {next < filteredResults.length ? (
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
