import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';

const App = () => {
  const API_KEY = 'dcad503797e3e10b94b55e1d642ca40d';
  const API_ID = '8de3d13c';
  const EXAMPLE_API =
    'https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}';

  const [recipes, setRecipe] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`
    );
    const data = await response.json();
    setRecipe(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <div className="App">
      <form className="SearchForm" onSubmit={getSearch}>
        <input type="text" className="search_bar" onChange={updateSearch} />
        <button type="submit" className="search_button">
          Search
        </button>
      </form>
      <div className="items">
        {recipes.map((e) => (
          <Recipe
            title={e.recipe.label}
            calories={e.recipe.calories}
            image={e.recipe.image}
            ingredients={e.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};
export default App;
