import "./AddingPart.css";

export function AddingPart({ value, handleValue, addValue }) {
  return (
    <>
      <input
        value={value}
        type="text"
        onChange={handleValue}
        className="addingInput"
      />
      <button onClick={addValue} className="addingButton">
        Add
      </button>
    </>
  );
}
