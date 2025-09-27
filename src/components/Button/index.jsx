import PropTypes from 'prop-types';
import { ButtonContainer } from './styles';

export function Button({ children, ...props }) {
  return (
    <ButtonContainer {...props}>
      <p>{children}</p>
    </ButtonContainer>
  );
}

Button.PropTypes = {
  children: PropTypes.string, // tipagem da propriedade
};
