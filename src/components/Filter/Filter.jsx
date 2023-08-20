import filter from './Filter.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.filter);

  const onChange = ({ target }) => {
    dispatch(setFilter(target.value));
  };
  return (
    <label className={filter.filterLabel}>
      Find contacts by name
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};

export default Filter;