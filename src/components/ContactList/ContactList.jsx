import { ListElement } from '../ListElement/ListElement';
import useItemsSlice from 'redux/itemsSlice/itemsHook';
import { StyledList } from './StyledContactList';

export const ContactList = () => {
  const { filteredItems, error, isLoading } = useItemsSlice();

  return (
       <>
      {error && (
        <p>
            Something went wrong! Please refresh page and try again...
        </p>
      )}
      {isLoading ? (
        <b>Downloading contacts...</b>
      ) : (
        <StyledList>
          {filteredItems.map(contact => (
            <ListElement key={contact.id} contact={contact} />
          ))}
        </StyledList>
      )}
    </>
  );
};
