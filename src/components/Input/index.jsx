import PropTypes from 'prop-types';
import { InputContainer } from './styles';

export function Input({ label, type, error, ...props }) {
  return (
    <InputContainer>
      <label htmlFor="">{label}</label>
      <div>
        <input type={type} {...props} />
      </div>

      <span>{error}</span>
    </InputContainer>
  );
}

Input.PropTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
};
