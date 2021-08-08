import {
  createTheme,
  TextField,
  MenuItem,
  ThemeProvider,
} from "@material-ui/core";
import React from "react";
import "./header.scss";
import categories from "../data/category";

const Header = ({ category, setCategory, word, setWord }) => {
  const darkTheme = createTheme({
    palette: {
      primary: { main: "#fff" },
      type: "dark",
    },
  });

  const languageChange = (language) => {
    setCategory(language);
    // setWord("");
  };

  return (
    <div className="header">
      <span className="title"> {word ? word : "word hunt"}</span>
      <div className="input-container">
        <ThemeProvider theme={darkTheme}>
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
