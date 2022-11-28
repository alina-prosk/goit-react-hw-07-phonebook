import { useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import { useGetItemsQuery } from 'redux/itemsSlice/itemsSlice';

const useItemsSlice = () => {
  const filter = useSelector(state => state.filter.toLowerCase());

  const selectFilteredItems = createSelector(
    [response => response.data, (_, filter) => filter],
    (items, filter) => {
      return (
        items?.filter(item => item.name.toLowerCase().includes(filter)) ?? []
      );
    }
  );
  return useGetItemsQuery(undefined, {
    selectFromResult(result) {
      return {
        ...result,
        filteredItems: selectFilteredItems(result, filter),
      };
    },
  });
};

export default useItemsSlice;
