import {FC} from 'react';
import { useHistory } from 'react-router-dom';
import { Routes } from '../../../../constants';
import { useUserContext } from '../../../../components/UserContext';
import { useItemsContext } from '../../../../components/ItemsContext'
import itemHasWrongEmail from '../../../../utils/itemHasWrongEmail';
import { IItem } from '../../../../services/getUserItems';
 
import './header-style.scss';

interface IHeader {
  username: string;
  onLogout: () => Promise<void>;
}

export const HeaderComponent = ({ username, handleLogout, items }) => {
  return (
    <div className="header">
      <div className="user-section">
      <button onClick={ () => handleLogout() }>{`Logout ${username}`}</button>
      </div>
      <h1>{`${items.filter((item: IItem) => !itemHasWrongEmail(item)).length} Emails are wrong`}</h1>
      <span>Email validator to protect your company from bad registrations</span>
    </div>

      )
}

// Didn't know how to test component together with useContext which is also 
// holding application state... So that why I separated functionality from component

const Header: FC<IHeader> = ({ username, onLogout }) => {
  const { push } = useHistory();
  const { deleteData } = useUserContext();
  const { items } = useItemsContext();

  const handleLogout = async () => {
    await onLogout();
    deleteData();
    push(Routes.Login);
  }

  return (
    <HeaderComponent username={username} handleLogout={handleLogout} items={items} />
  )
};

export default Header;
