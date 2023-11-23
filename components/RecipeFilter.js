import { useState, useEffect } from "react";

export const RecipeFilters = ({ onFilterChange }) => {
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [difficultyFilter, setDifficultyFilter] = useState("All");

  useEffect(() => {
    // Передача об'єкта фільтрів до батьківського компонента
    onFilterChange({ category: categoryFilter, difficulty: difficultyFilter });
  }, [categoryFilter, difficultyFilter, onFilterChange]);

  return (
    <div>
      <label>
        Category:
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Appetizer">Appetizer</option>
          <option value="Main Course">Мʼясні страви</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <label>
        Difficulty:
        <select
          value={difficultyFilter}
          onChange={(e) => setDifficultyFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Easy">Легкий</option>
          <option value="Medium">Середній</option>
          <option value="Hard">Складний</option>
        </select>
      </label>
    </div>
  );
};


