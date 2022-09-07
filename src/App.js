
const api = {
  key: "69fa7e908b97f1a77b798a64bd047f36",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input 
           type = "text"
           className = "search-bar"
           placeholder = "Search for a city..."
           />
        </div>
      </main>
    </div>
  );
}

export default App;
