import { injectGlobal } from 'emotion';
import Theme from './core/Theme';

const patchGlobalStyle = (_: Theme) => {
  injectGlobal`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html,
    body {
      background-color: #3d5afe;
    }
  `;
};

export default patchGlobalStyle;
