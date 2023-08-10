import { styled } from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin: 30px;
`;
export const FlexBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: ${(props) => (props.center ? 'center' : 'start')};
`;
export const InputBox = styled.div`
  width: 100%;
  padding-top: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: start;
`;

export const Input = styled.input`
  padding-left: 20px;
  width: 100%;
  height: 50px;
  margin-right: 30px;
  border-color: #d0d5dd #d0d5dd !important;
  outline: none;
  border-radius: 6px;
  border-style: solid;
  font-size: large;
  font-weight: 200;
  border-width: 1px;
`;
export const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
export const Button = styled.button`
  margin-top: ${(props) => (props.mtSmall ? '1rem' : '0')};
  margin-left: ${(props) => (props.mlSmall ? '1rem' : '0')};
  width: ${(props) => (props.wLarge ? '180px' : '130px')};
  height: 50px;
  border-radius: 6px;
  font-size: 15px;
  outline: none;
  border: 1px solid #d0d5dd; /* Set your desired border style here */
  background-color: ${(props) => (props.red ? '#F04438' : 'white')};
  color: ${(props) => (props.textWhite ? 'white' : 'black')};
  transition: 0.1s;
  cursor: pointer;

  &:focus {
    background-color: ${(props) =>
      props.normalButton ? '#D0D5DD' : '#F04438'};
  }

  &:active {
    outline: none; /* Remove outline on click */
  }
`;

export const AddButton = styled.button`
  margin-right: 60px;
  background-color: #11b76a;
  color: white;
  width: 220px;
  height: 55px;
  padding-right: 15px;
  border-radius: 6px;
  font-size: 20px;
  border: none;
  cursor: pointer;
`;
export const ButtonBox = styled.button`
  display: flex;
  justify-content: start;
  border: ${(props) => (props.border ? '1px solid #D0D5DD' : '0')};
  width: ${(props) => (props.width ? '70%' : '30%')};
  align-items: center;
  border-radius: ${(props) => (props.rounded ? '6px' : '0')};
  padding-left: ${(props) => (props.plSmall ? '20px' : '0')};
  min-height: 50px;
  background: ${({ green }) => (green ? '#ecfdf3' : 'white')};
  cursor: pointer;
`;
export const ItemBox = styled.div`
  display: flex;
  justify-content: start;
  border: ${(props) => (props.border ? '1px solid #D0D5DD' : '0')};
  width: ${(props) => (props.width ? '70%' : '30%')};
  align-items: center;
  border-radius: ${(props) => (props.rounded ? '6px' : '0')};
  padding-left: ${(props) => (props.plSmall ? '20px' : '0')};
`;
export const ItemsBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-top: 15px;
  min-height: 60px;
  border-radius: 6px;
`;
export const Item = styled.p`
  padding-left: ${(props) => (props.plSmall ? '15px' : '0')};
  font-size: 15px;
`;
export const ModalBackdrop = styled.div`
  display: ${({ show }) => (show ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1); // Semi-transparent black
  backdrop-filter: blur(3px); // Apply the blur effect
  // Ensure the backdrop is above other content
`;

export const Modal = styled.div`
  display: ${({ show }) => (show ? 'block' : 'none')};
  flex-direction: row;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  padding-left: 30px;
  padding-top: 30px;
  width: 400px;
  height: 250px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  transition: 0.1s;
  background-color: white;
  box-shadow: 2px 10px 48px 0px rgba(207, 207, 207, 1);
`;
