import React from "react";

const ResultItem = ({ id, value }: { id: string; value: number }) => (
    <div id={id}>{value}</div>
);

function App() {
  return (
    <div>
      <div id="result">
        {["range15s", "range30s", "range60s", "range120s"].map((id) => (
            <ResultItem key={id} id={id} value={0} />
        ))}
      </div>

      <div id="maxResults">
        {["maxResult15s", "maxResult30s", "maxResult60s", "maxResult120s"].map((id) => (
            <ResultItem key={id} id={id} value={0} />
        ))}
      </div>

      <div id="wordsList"></div>

      <div id="cursor"></div>
    </div>
  );
}

export default App;

