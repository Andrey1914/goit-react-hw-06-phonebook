import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/contactsActions';
import { Label } from './FilterStyled';
import { Input } from 'components/Form/FormStyled';

export default function Filter() {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        value={filter}
        onChange={event => dispatch(filterContact(event.target.value))}
      />
    </Label>
  );
}
