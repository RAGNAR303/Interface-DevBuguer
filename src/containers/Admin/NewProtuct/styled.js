import styled from 'styled-components';
import Select from 'react-select';
import { Button } from '../../../components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 80vh;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #121f25ff;
  background: linear-gradient(180deg, #121f25ff 50%, #121f2587 100%);
  backdrop-filter: blur(${(props) => props.theme.blur});

  padding: 20px;
  border-radius: 10px;
  gap: 20px;
  width: 100%;
  height: 350px;
  max-width: 700px;
  margin: 0 auto;
`;

export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 5px;
  span {
    color: ${(props) => props.theme.redHover};
    font-size: 10px;
  }
`;

export const FormContainerLeft = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;
export const Textarea = styled.textarea`
  width: 100%;
  font-weight: 800;
  border: 2px solid ${(props) => props.theme.gray50};
  background: ${(props) => props.theme.amber};
  padding: 10px;
  border-radius: 10px;
`;
export const FormContainerRight = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;

  main {
    display: flex;
  }
`;
export const SelectOptions = styled(Select)`
  width: 100%;
  color: black;
`;
export const LabelUpload = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  cursor: pointer;
  border: 2px dashed ${(props) => props.theme.amber};
  color: ${(props) => props.theme.amber};
  font-weight: 700;
  border-radius: 10px;
  padding: 10px;

  > input {
    display: none;
  }

  svg {
    color: ${(props) => props.theme.amber};
    font-size: 30px;
  }
`;
export const InputCheck = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  label {
    color: ${(props) => props.theme.orange};
    font-weight: 900;
  }
`;

export const SubmitButton = styled(Button)``;

export const CustonStyle = styled.select`
  background: red;
`;
