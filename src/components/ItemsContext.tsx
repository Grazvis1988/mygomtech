import { createContext, useContext, useEffect, useState } from 'react';
import getUserItems, {IItem} from '../services/getUserItems';

interface IItems {
  updateItems: (item: IItem) => void,
  errorMessage: string,
  isLoading: boolean,
  items: IItem[],
}
const ItemsContext = createContext<IItems>({
  updateItems: () => {},
  errorMessage: null,
  isLoading: true,
  items: [],
});

export const useItemsContext = () => useContext(ItemsContext);

export const ItemsContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string>();
  const [items, setItems] = useState<Array<IItem>>([])

  const updateItems = (item: IItem) => {
    setItems(items.map(i => i.id === item.id ? item : i))
  }
  
  useEffect(() => {
    (async () => {
      setIsLoading(true);

      try {
        const userItems = await getUserItems();

        setItems(userItems);
      } catch (error) {
        setErrorMessage(error.message);
      }

      setIsLoading(false);
    })()
  }, []);

  const value =  {
  updateItems,
  errorMessage,
  isLoading,
  items
  };

  return (
    <ItemsContext.Provider value={value}>
      {children}
    </ItemsContext.Provider>
  )
};

export default ItemsContext;
