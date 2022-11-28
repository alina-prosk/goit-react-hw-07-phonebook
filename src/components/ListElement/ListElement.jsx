import PropTypes from 'prop-types';
import { StyledLi } from './StyledListElement';
import { useDeleteItemMutation } from 'redux/itemsSlice/itemsSlice';

export const ListElement = ({ contact }) => {
  const { name, phone, id } = contact;

  const [deleteItem, { isLoading }] = useDeleteItemMutation();

  return (
    <StyledLi>
      <p>
        {name} : {phone}
      </p>
      <button disabled={isLoading} onClick={() => deleteItem(id)}>
        {isLoading ? '...Deleting' : 'Delete'}
      </button>
    </StyledLi>
  );
};

ListElement.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }),
};
