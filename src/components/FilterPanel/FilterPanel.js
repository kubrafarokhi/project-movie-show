import React from "react";
import "./filterPanel.css";
import DropDown from "../common/DropDown/DropDown";

const genre = [
  { type: "action" },
  { type: "drama" },
  { type: "thriller" },
  { type: "sci-fi" },
];
const category = [
  {
    type: "movie",
  },
  {
    type: "tv",
  },
];
function FilterPanel({ handleSelectedCategory, selectedOption, toggleTheme }) {
  return (
    <div className="filter-panel">
      <div>DISCOVER OPTIONS</div>
      <div>
        <label>Type</label>
        <DropDown
          options={category}
          selectedOption={selectedOption}
          handleSelected={handleSelectedCategory}
        />
      </div>
      <div>
        <label>Genre</label>
        <DropDown options={genre} />
      </div>
      <div>
        <label>Year</label>
        <span>
          <DropDown />-<DropDown />
        </span>
      </div>
      <div>
        RATING
        {"stars"}
      </div>
      <button className="filter-button" onClick={toggleTheme}>
        Switch Mode
      </button>
    </div>
  );
}

export default FilterPanel;
