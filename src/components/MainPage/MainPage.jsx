import { useState } from "react";
import { AddingPart } from "../AddingPart/AddingPart";
import { UnorderedList } from "../UnorderedList/UnorderedList";
import "./MainPage.css";

export function MainPage() {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  const handleValue = (evn) => {
    setValue(evn.target.value);
  };

  const addValue = () => {
    if (value !== "") {
      setData([...data, value]);
      setValue("");
    }
  };

  const deleteList = (i) => {
    const newData = data.filter((el, index) => index !== i);
    setData(newData);
  };
  const editList = (editedIndex, editedEl) => {
    const newData = data.map((el, i) => {
      if (i === editedIndex) {
        return editedEl;
      }
      return el;
    });

    setData(newData);
  };

  return (
    <div className="mainContainer">
      <div className="addedContainer">
        <AddingPart
          value={value}
          handleValue={handleValue}
          addValue={addValue}
        />
      </div>
      <div className="ulContainer">
        <UnorderedList
          deleteList={deleteList}
          data={data}
          editList={editList}
        />
      </div>
    </div>
  );
}
