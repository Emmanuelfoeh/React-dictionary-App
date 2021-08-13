import {
  createTheme,
  TextField,
  MenuItem,
  ThemeProvider,
} from "@material-ui/core";
import React from "react";
import "./header.scss";
import categories from "../data/category";

const Header = ({ category, setCategory, word, LightMode, setWord }) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: LightMode ? "#000" : "#fff",
      },
      type: LightMode ? "light" : "dark",
    },
  });

  const languageChange = (language) => {
    setCategory(language);
    setWord("");
  };

  return (
    <div
      className="header"
      style={{
        color: LightMode ? "#282c34" : "#fff",
      }}
    >
      <span className="title"> {word ? word : "Dictionary"}</span>
      <div className="input-container">
        <ThemeProvider
          theme={darkTheme}
          style={{
            color: LightMode ? "#282c34" : "#fff",
          }}
        >
          <TextField
            label="Search a word"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />

          <TextField
            select
            className="lang"
            label="Languages"
            value={category}
            onChange={(e) => languageChange(e.target.value)}
          >
            {categories.map((option) => {
              return (
                <MenuItem key={option.label} value={option.label}>
                  {option.value}
                </MenuItem>
              );
            })}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
