import React, { useState } from 'react';
import { FaRegTrashCan } from 'react-icons/fa6';
import { LuEdit } from 'react-icons/lu';
import useStore from '../Zustand/store';
import { Button, FlexBox, Modal, ModalBackdrop } from '../styles/styles';
function EditButton({ todoId, todoText }) {
  const [show, setShow] = useState(false);
  const [newTodo, setNewTodo] = useState('');
  const editTodo = useStore((state) => state.editTodo);
  return (
    <>
      <Button
        style={{ fontWeight: '500' }}
        onClick={() => setShow(true)}
        normalButton
        wLarge
        mlSmall
      >
        Edit
      </Button>
      <ModalBackdrop show={show}>
        <Modal show={show}>
          <LuEdit
            style={{
              color: 'black',
              width: '24px',
              height: '24px',
              background: '#d0d5dd',
              padding: '15px',
              borderRadius: '25px',
            }}
          />
          <h4 style={{ fontWeight: 'medium' }}>Edit Task</h4>
          <input
            placeholder={todoText}
            type="text"
            style={{
              width: '350px',
              height: '40px',
              border: '1px solid #d0d5dd',
              borderRadius: '6px',
              paddingLeft: '15px',
              fontSize: 'medium',
            }}
            onChange={(e) => {
              setNewTodo(e.target.value);
            }}
          />
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
                editTodo(todoId, newTodo);
                setShow(false);
              }}
              style={{
                marginRight: '30px',
                width: '180px',
                background: '#d0d5dd',
                color: 'black',
              }}
              textWhite
            >
              Edit
            </Button>
          </div>
        </Modal>
      </ModalBackdrop>
    </>
  );
}

export default EditButton;
