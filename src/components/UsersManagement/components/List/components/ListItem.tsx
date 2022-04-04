import UpdateModal from "./UpdateModal";
import ItemIcon from "./ItemIcon";
import {FC} from "react";
import {IItem} from "../../../../../services/getUserItems";

const ListItem: FC<{item: IItem}> = ({item}) => {
  return (
    <li data-testid="listItem" className="item">
      <ItemIcon data-testid='icon' name={item.name}/>
      <div>
        <div className="title">
          {item.name}
        </div>
        <div className="description">
          {item.email}
        </div>
      </div>
      <UpdateModal item={item}/>
    </li>
  );
};

export default ListItem;
