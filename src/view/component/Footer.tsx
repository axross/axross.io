import glamorous from 'glamorous';
import { ClassAttributes, createElement } from 'react';
import Text from './Text';

type Props = ClassAttributes<HTMLElement> & {
  className?: string;
};

const Footer = ({ className }: Props) => (
  <Root className={className}>
    <Message type="heading">🙇 THANK YOU FOR READING!</Message>
  </Root>
);

const Root = glamorous.div({});

const Message = glamorous(Text)({
  textAlign: 'center',
});

export default Footer;
