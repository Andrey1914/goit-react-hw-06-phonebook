import { Box } from 'components/Box';
import { Button } from 'components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsActions';
import { MdDelete } from 'react-icons/md';

export default function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  const getVisibleContacts = () =>
    contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );

  return (
    <Box as="ul" display="flex" flexDirection="column">
      {getVisibleContacts().map(({ id, name, number }) => {
        return (
          <Box
            key={id}
            as="li"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={4}
          >
            <p>
              {name}&#32;:&#32;{number}
            </p>
            <Button onClick={() => dispatch(deleteContact(id))}>
              Delete <MdDelete size={20} />
            </Button>
          </Box>
        );
      })}
    </Box>
  );
}
