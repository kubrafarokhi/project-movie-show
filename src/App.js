import { useState } from "react";
import "./App.css";
import ThemeContext, { themes } from "./context/ThemeContext";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/common/NavBar/NavBar";
import Popular from "./components/Pages/Popular/Popular";
import Trend from "./components/Pages/Trend/Trend";
import Newest from "./components/Pages/Newest/Newest";
import TopRated from "./components/Pages/TopRated/TopRated";
import FilterPanel from "./components/FilterPanel/FilterPanel";
import { CATEGORY_MOVIE } from "./utils/utils";

function App() {
  const [category, setCategory] = useState(CATEGORY_MOVIE);
  const [theme, setTheme] = useState(themes.dark);

  const handleSelectedCategory = (e) => {
    setCategory(e.target.value);
  };
  const toggleTheme = () => {
    theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark);
  };
  return (
    <ThemeContext.Provider value={theme}>
      <div
        style={{
          backgroundColor:
            theme === themes.dark
              ? themes.dark.background_color
              : themes.light.background_color,
        }}
        className="parent-wrapper"
      >
        <div className="left-section">
          <NavBar />
          <div className="pages">
            <Routes>
              <Route
                exact
                path="/"
                element={<Popular category={category} />}
              ></Route>
              <Route
                path="/trend"
                element={<Trend category={category} />}
              ></Route>
              <Route
                path="/newest"
                element={<Newest category={category} />}
              ></Route>
              <Route
                path="/toprated"
                element={<TopRated category={category} />}
              ></Route>
            </Routes>
          </div>
        </div>
        <div className="right-section">
          <FilterPanel
            toggleTheme={toggleTheme}
            selectedOption={category}
            handleSelectedCategory={handleSelectedCategory}
          />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
