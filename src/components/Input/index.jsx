import PropTypes from 'prop-types';
import { InputContainer } from './styles';

export function Input({ placeholder, type, error, icon, ...props }) {
  return (
    <InputContainer>
      <div>
        {icon}
        <input type={type} {...props} placeholder={placeholder} />
      </div>
      <span>{error}</span>
    </InputContainer>
  );
}

Input.PropTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
};
