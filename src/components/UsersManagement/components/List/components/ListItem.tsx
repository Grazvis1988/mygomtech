import UpdateModal from './UpdateModal'
import ItemIcon from './ItemIcon'

const ListItem = ({item}) => {
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
      )
}

export default ListItem;
