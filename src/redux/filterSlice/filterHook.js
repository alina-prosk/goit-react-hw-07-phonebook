import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from './filterSlice';

const getIFilter = state => state.filter;

const useFilterSlice = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getIFilter);
  const handleSetFilter = value => dispatch(setFilter(value));
  return { filter, setFilter: handleSetFilter };
};

export default useFilterSlice;
