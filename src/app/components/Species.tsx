import React from "react";

import FilterBtn from "./FilterBtn";


interface SpeciesProps {
  updateSpecies: (input: string) => void;
  updatePageNumber: (pageNumber: number) => void;
}

const Species: React.FC<SpeciesProps> = ({ updateSpecies, updatePageNumber }) => {
  const species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
  ];

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingTwo">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
          Species
        </button>
      </h2>
      <div
        id="collapseTwo"
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-3">
          {species.map((item, index) => (
            <FilterBtn
              key={index}
              index={index}
              name="species"
              task={updateSpecies}
              updatePageNumber={updatePageNumber}
              input={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Species;
