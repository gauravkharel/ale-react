const App = () => {
  const ifCharacter = () => {

  }

  const ifNumber = () => {

  }
  return (
    <div>
      <h2>Password Generator</h2>
      <input type="password" placeholder="" />
      <input
        onChange={ifNumber}
        type="range"
        min="1"
        max="100"
        value="50"
        className="slider"
        id="myRange"
      />

      <div>
        <input onChange={ifNumber} type="checkbox" id="numbers" checked name="numbers" />
        <label htmlFor="numbers">Numbers</label>
      </div>

      <div>
        <input onChange={ifCharacter} type="checkbox" id="characters" name="characters" />
        <label htmlFor="characters">Characters</label>
      </div>
    </div>
  );
};

export default App;
