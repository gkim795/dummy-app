import "./App.css";
import React, { useState } from "react";
import CardComponent from "./components/Card";
import Search from "./components/Search";
import ICD10 from "./ICD10.json";
import { InputGroup } from "@blueprintjs/core";

const filterCodes = query => {
  if (!query) {
    return ICD10;
  }

  return ICD10.filter(post => {
    const codeMatch = post.code.includes(query);
    const descMatch = post.desc.includes(query);

    return codeMatch || descMatch;
  });
};

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const filteredCodes = filterCodes(searchQuery);
  console.log({ filteredCodes });
  return (
    <div className="App">
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="search-results">
        {filteredCodes.map(code => (
          <CardComponent code={code.code} desc={code.desc} />
        ))}
      </div>
    </div>
  );
}

export default App;
