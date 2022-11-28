import { nanoid } from 'nanoid';
import { StyledForm } from './StyledForm';
import {
  useAddItemMutation,
  useGetItemsQuery,
} from 'redux/itemsSlice/itemsSlice';

export const ContactForm = () => {
  const nameId = nanoid();
  const phoneId = nanoid();

  const { data: items } = useGetItemsQuery();
  const [addItem] = useAddItemMutation();

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.target;
    const { name, phone } = form.elements;
    const alreadyAdded = await items.some(obj => obj.name === name.value);
    alreadyAdded
      ? alert(`Contact ${name} has already added`)
      : await addItem({ name: name.value, phone: phone.value });
    form.reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <div>
        <label htmlFor={nameId}>Name</label>
        <input
          id={nameId}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </div>
      <div>
        <label htmlFor={phoneId}>Number</label>
        <input
          id={phoneId}
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </div>

      <button type="submit">Add contact</button>
    </StyledForm>
  );
};
