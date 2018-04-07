import { insertGlobal } from 'glamor';

const patchGlobalStyle = () => {
  insertGlobal('*', {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  });

  insertGlobal('html, body', {
    backgroundColor: '#4A58E2',
  });
};

export default patchGlobalStyle;
