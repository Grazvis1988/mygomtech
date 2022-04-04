import {FC} from 'react';
import {IItem} from "~/services/getUserItems";
import ListItem from "./components/ListItem"

import './list-style.scss';

interface IList {
  items: Array<IItem>,
}

const List: FC<IList> = ({items}) => (
  <ul className="list">
    {
      items.map((item) => (
        <ListItem key={item.id} item={item} />
      ))
    }
  </ul>
)

export default List;
