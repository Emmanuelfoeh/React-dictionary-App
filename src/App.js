import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import Header from "./components/header/Header";
import Definition from "./components/Definition/Definition";

function App() {
  const [word, setWord] = useState("");
  const [meaning, setMeaning] = useState([]);
  const [category, setCategory] = useState("en");

  const url = `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`;

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(url);

      setMeaning(data.data);
      // console.log(meaning);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dictionaryApi();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, word]);

  return (
    <div className="App">
      <Container className="container" maxWidth="md">
        <Header
          category={category}
          setCategory={setCategory}
          word={word}
          setWord={setWord}
        />
        {meaning && (
          <Definition word={word} category={category} meaning={meaning} />
        )}
      </Container>
    </div>
  );
}

export default App;
