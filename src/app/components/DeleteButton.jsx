import React, { useState } from 'react';
import { FaRegTrashCan } from 'react-icons/fa6';
import { Button, FlexBox, Modal, ModalBackdrop } from '../styles/styles';
function DeleteButton({ removeTodo, todos }) {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button onClick={() => setShow(true)} red textWhite mlSmall>
        <FaRegTrashCan />
      </Button>
      <ModalBackdrop show={show}>
        <Modal show={show}>
          <FaRegTrashCan
            style={{
              color: 'red',
              width: '24px',
              height: '24px',
              background: '#fee4e2',
              padding: '15px',
              borderRadius: '25px',
            }}
          />
          <h4 style={{ fontWeight: 'medium' }}>Delete Task</h4>
          <p>
            Are you sure you want to delete this task? This <br />
            action cannot be undone.
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '20px',
            }}
          >
            <Button
              normalButton
              onClick={() => setShow(false)}
              style={{ width: '170px' }}
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                removeTodo(todos.id);
                setShow(false);
              }}
              style={{ marginRight: '30px', width: '180px' }}
              red
              textWhite
            >
              Delete
            </Button>
          </div>
        </Modal>
      </ModalBackdrop>
    </>
  );
}

export default DeleteButton;
