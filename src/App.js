import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Switch, withStyles } from "@material-ui/core";
import Header from "./components/header/Header";
import Definition from "./components/Definition/Definition";
import { grey } from "@material-ui/core/colors";

function App() {
  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState([]);
  const [category, setCategory] = useState("en");
  const [LightMode, setLightMode] = useState(false);

  const url = `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`;

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(url);

      setMeaning(data.data);
      console.log(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const DarkMode = withStyles({
    switchBase: {
      color: grey[300],
      "&$checked": {
        color: grey[500],
      },
      "&$checked + $track": {
        backgroundColor: grey[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);

  useEffect(() => {
    dictionaryApi();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, word]);

  return (
    <div
      className="App"
      style={{
        backgroundColor: LightMode ? "#fff" : "#282c34",
        color: LightMode ? "#fff" : "#282c34",
        transition: "all 0.5s linear",
      }}
    >
      <Container className="container" maxWidth="md">
        <div
          className="switchTheme"
          style={{
            color: LightMode ? "#282c34" : "#fff",
          }}
        >
          <span>{LightMode ? "Dark" : "Light"}Mode</span>
          <DarkMode
            checked={LightMode}
            onChange={() => setLightMode(!LightMode)}
          />
        </div>
        <Header
          category={category}
          setCategory={setCategory}
          word={word}
          setWord={setWord}
          LightMode={LightMode}
        />
        {meaning && (
          <Definition
            word={word}
            LightMode={LightMode}
            category={category}
            meaning={meaning}
          />
        )}
      </Container>
    </div>
  );
}

export default App;
