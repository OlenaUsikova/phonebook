import PropTypes from 'prop-types'
import {Button} from '../addForm/AddForm.styled'
import { deleteContact } from 'Redux/Contacts/operations';
import { useDispatch } from 'react-redux';

export const Contact = ({contact:{name, number, id}}) => {
    const dispatch = useDispatch()
       return (
        <div style={{ margin: "0 auto",
        display: 'flex',
        gap: 10,
        justifyContent: 'center',
         }}>
        <p>{name}:</p>
        <p>{number}</p>
        <Button type="button" onClick={() => {dispatch(deleteContact(id))}}>Delete</Button>
        </div>
    )
};

Contact.propTypes = {
    contacts: PropTypes.shape({
    name: PropTypes.string,
    number: PropTypes.string,
    id: PropTypes.string,
  }),
}
