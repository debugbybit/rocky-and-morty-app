import React from "react";

interface FilterBtnProps {
  input: string;
  task: (input: string) => void;
  updatePageNumber: (pageNumber: number) => void;
  index: number;
  name: string;
}

const FilterBtn: React.FC<FilterBtnProps> = ({ input, task, updatePageNumber, index, name }) => {
  return (
    <div>
      <style jsx>
        {`
          .x:checked + label {
            background-color: #0b5ed7;
            color: white;
          }
          input[type="radio"] {
            display: none;
          }
        `}
      </style>

      <div className="form-check">
        <input
          className="form-check-input x"
          type="radio"
          name={name}
          id={`${name}-${index}`}
        />
        <label
          onClick={() => {
            task(input);
            updatePageNumber(1);
          }}
          className="btn btn-outline-primary"
          htmlFor={`${name}-${index}`}
        >
          {input}
        </label>
      </div>
    </div>
  );
};

export default FilterBtn;
