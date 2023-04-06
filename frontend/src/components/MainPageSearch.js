import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function MainPageSearch({ label, placeholder }) {
    return (
      <FloatingLabel label={label}>
        <Form.Control size='sm' type="search" placeholder={placeholder} />
      </FloatingLabel>
    );
  }

export default MainPageSearch;
