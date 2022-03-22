import React,{useContext} from "react";
import "./filterPanel.css";
import DropDown from "../common/DropDown/DropDown";
import ThemeContext from '../../context/ThemeContext';

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
  const theme = useContext(ThemeContext)
  console.log('3333',theme)
  return (
    <div className="filter-panel">
      <div style={{color: theme.main_text}} className="se-header">DISCOVER OPTIONS</div>
      <div>
        <label style={{color: theme.main_text}}>Type</label>
        <DropDown
          options={category}
          selectedOption={selectedOption}
          handleSelected={handleSelectedCategory}
        />
      </div>
      <div>
        <label style={{color: theme.main_text}} >Genre</label>
        <DropDown options={genre} />
      </div>
      <div>
        <label style={{color: theme.main_text}} >Year</label>
        <span className="my-span">
          <DropDown />
        </span>
      </div>
      <div>
      <label style={{color: theme.main_text}} >Rating</label>
        {"stars"}
      </div>
      <button className="filter-button" onClick={toggleTheme}>
        Switch Mode
      </button>
    </div>
  );
}

export default FilterPanel;
