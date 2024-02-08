import React from "react";

const RecipeChoices = ({ handleChange, label, choices, currentVal }) => {
  return (
    <div className="recipe-choices">
      <input
        type="text"
        name={label}
        value={currentVal}
        placeholder="Guess the ingredient..."
        onChange={handleChange}
        className="textbox"
      />
      <div className="choices-list">
        {choices &&
          choices.map((choice) => (
            <li key={choice}>
              {choice}
            </li>
          ))}
      </div>
    </div>
  );
};

export default RecipeChoices;