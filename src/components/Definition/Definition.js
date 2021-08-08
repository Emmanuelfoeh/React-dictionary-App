import React from "react";
import "./Definition.scss";

const Definition = ({ word, category, meaning }) => {
  return (
    <div className="define">
      {meaning[0] && word && category === "en" && (
        <audio
          src={meaning[0].phonetics[0] && meaning[0].phonetics[0].audio}
          controls
        >
          Your browser does not support the audio element.
        </audio>
      )}

      {word === "" ? (
        <span className="subtitle">Type the word to search for</span>
      ) : (
        meaning.map((meanings) =>
          meanings.meanings.map((item) =>
            item.definitions.map((def) => {
              const { synonyms, definition, example } = def;
              return (
                <div className="words">
                  <span>
                    <span style={{ color: "white" }}>Definition: </span>
                    <b> {definition}</b>
                  </span>
                  <hr style={{ color: "white", width: "100%" }} />
                  {example && (
                    <span>
                      <b>Example:</b> {example}
                    </span>
                  )}

                  {synonyms && (
                    <span>
                      <b>Synonyms:</b> {synonyms.map((s) => `${s},`)}
                    </span>
                  )}
                </div>
              );
            })
          )
        )
      )}
    </div>
  );
};

export default Definition;
