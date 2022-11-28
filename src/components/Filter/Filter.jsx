import { nanoid } from 'nanoid';
import { StyledFilterDiv } from './StyledFilter';
import useFilterSlice from 'redux/filterSlice/filterHook';
const filterId = nanoid();

export const Filter = () => {
  const { filter, setFilter } = useFilterSlice();

  return (
    <StyledFilterDiv>
      <label htmlFor={filterId}>Find contacts by name</label>
      <input
        onChange={e => {
          setFilter(e.target.value);
        }}
        id={filterId}
        type="text"
        value={filter}
        name="filter"
      />
    </StyledFilterDiv>
  );
};
