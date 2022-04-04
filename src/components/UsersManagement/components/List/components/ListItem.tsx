import UpdateModal from './UpdateModal'
import ItemIcon from './ItemIcon'

const ListItem = ({item}) => {
  return (
        <li className="item">
          <ItemIcon name={item.name}/>
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
