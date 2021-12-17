import { useState } from "react";

export function ListItem({ el, i, deleteList, editList }) {
  const [onEdit, setOnEdit] = useState(false);
  const [value, setValue] = useState(el);

  const handleSave = () => {
    if (!value) return;
    editList(i, value);
    setOnEdit(false);
  };

  return (
    <>
      {onEdit ? (
        <input
          value={value}
          onChange={({ target }) => {
            setValue(target.value);
          }}
        />
      ) : (
        <p className="todoText"> {el}</p>
      )}
      {onEdit ? (
        <button onClick={handleSave} className="changingButton">
          Save
        </button>
      ) : (
        <button onClick={() => deleteList(i)} className="changingButton">
          Delete
        </button>
      )}
      {onEdit ? (
        <button
          className="changingButton"
          onClick={() => {
            setOnEdit(false);
            setValue(el);
          }}
        >
          Cancel
        </button>
      ) : (
        <button className="changingButton" onClick={() => setOnEdit(true)}>
          Edit
        </button>
      )}
    </>
  );
}
