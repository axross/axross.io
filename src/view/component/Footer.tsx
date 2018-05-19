import { ClassAttributes, createElement } from 'react';
import styled from '../../core/emotion';
import Text from './Text';

type Props = ClassAttributes<HTMLElement> & {
  className?: string;
};

const Footer = ({ className }: Props) => (
  <div className={className}>
    <Message type="headline3">🙇 THANK YOU FOR READING!</Message>
  </div>
);

const Message = styled(Text)`
  text-align: center;
`;

export default Footer;
