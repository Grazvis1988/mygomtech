import { FC, useState } from 'react';
import { useItemsContext } from '../../../../../components/ItemsContext';
import updateItem from '../../../../../services/updateItem';
import {IItem} from "../../../../..//services/getUserItems";
import Modal from 'react-modal';

interface IUpdateModal {
  item: IItem;
}

const UpdateModal: FC<IUpdateModal> = ({ item }) => {
  const [showModal, setShowModal] = useState(false);
  const [newEmail, setNewEmail] = useState('');
  
  const { updateItems } = useItemsContext();

  return (
    <>
      <button data-testid="openModal" className="update" onClick={() => setShowModal(true)}>
        Update Email
      </button>
      <Modal
        className="modal"
        isOpen={showModal}
        ariaHideApp={false}
        onRequestClose={() => setShowModal(false)}
        contentLabel="Example Modal"
      >
        <h1 data-testid="modalInside" >Update Email</h1>
        <input
          data-testid="modalInput"
          placeholder="new email"
          className="input"
          value={newEmail}
          onChange={(event) => setNewEmail(event.target.value)} 
        />
        <div className="pt-12px text-center">
          <button className="button" onClick={async () => {
            await updateItem({
              ...item,
              email: newEmail,
            }).then(() => updateItems({
              ...item,
              email: newEmail
            }));

            setShowModal(false);
            // window.location.reload();
          }}>Change</button>
          <button className="button ml-12px" onClick={() => {
            setShowModal(false)
          }}>
            Cancel
          </button>
        </div>
      </Modal>
    </>
  );
}

export default UpdateModal;
