import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from '../../redux/sliceFilter';
import { selectFilter } from '../../redux/selectors';
import { Label, InputFilter } from './FilterContacts.styled';

export default function FilterContacts() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const changeFilter = e => {
    dispatch(updateFilter(e.currentTarget.value));
  };
  return (
    <Label>
      Find contacts by name:
      <InputFilter type="text" value={filter} onChange={changeFilter} />
    </Label>
  );
}
