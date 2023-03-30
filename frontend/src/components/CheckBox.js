import Form from 'react-bootstrap/Form';
import React from 'react';
import './css/CheckBox.css';

function CheckBox() {
  return (
    <Form>
      {['checkbox'].map((type) => (
        <div key={`inline-${type}`} className="mb-3 custom-checkbox">
          <Form.Check
            inline
            label="COURSE"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="PROFESSOR"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            label="TIPS/SUGGESTIONS"
            name="group3"
            type={type}
            id={`inline-${type}-3`}
          />
        </div>
      ))}
    </Form>
  );
}

export default CheckBox;
