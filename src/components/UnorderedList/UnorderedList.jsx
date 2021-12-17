import { ListItem } from "../ListItem/ListItem";
import "./UnorderedList.css";

export function UnorderedList({ data, deleteList, editList }) {
  const listItem = data.map((el, i) => (
    <li className="listLine" key={i}>
      <ListItem i={i} el={el} deleteList={deleteList} editList={editList} />
    </li>
  ));
  return <ul className="uList">{listItem}</ul>;
}
