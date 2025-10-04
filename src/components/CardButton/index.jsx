import PropTypes from 'prop-types';
import { ButtonContainer } from './styles';

export function CardButton({ children, ...props }) {
  return (
    <ButtonContainer {...props}>
      <p>{children}</p>
    </ButtonContainer>
  );
}

CardButton.PropTypes = {
  children: PropTypes.string, // tipagem da propriedade
};
