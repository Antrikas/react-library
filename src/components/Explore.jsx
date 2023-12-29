import React from "react";

const Explore = () => {
    return (
      <section id="explore">
        <div className="container">
          <div className="row row__column">
            <h2 className="section__title">
              Explore more <span className="purple">Books</span>
            </h2>
            <BestBooks />
          </div>
        </div>
      </section>
    );
  };
  
  export default Explore;