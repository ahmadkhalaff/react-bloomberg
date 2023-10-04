import React from "react";
import Article from "./Article";
import InsideContainer from "./InsideContainer"; // Updated component name

const MainContainer = () => { // Updated component name
  return (
    <div>
      <section className="main container">
        <Article />
        <InsideContainer />
      </section>
    </div>
  );
};

export default MainContainer; // Updated component name
