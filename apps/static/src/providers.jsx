/* --- Global --- */
import 'normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import {ThemeProvider} from 'theme-ui';
import {AmplifyProvider} from 'amplify-system';
import awsconfig from './aws-exports';
/* --- Local --- */
import theme from './assets/theme';

export default ({element}) => {
  return (
    <ThemeProvider theme={theme}>
      <AmplifyProvider config={awsconfig}>{element}</AmplifyProvider>
    </ThemeProvider>
  );
};
