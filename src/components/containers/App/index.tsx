import { App as AppProvider } from 'antd';
import { UserProvider } from '@/context';
import { GlobalStyle, lightTheme } from '@/styles';
import { ThemeProvider } from 'styled-components';
import { AppFC } from './types';
import ProtectedRoutes from '../ProtectedRoutes';

const App: AppFC = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <UserProvider>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <AppProvider>
          <ProtectedRoutes>{getLayout(<Component {...pageProps} />)}</ProtectedRoutes>
        </AppProvider>
      </ThemeProvider>
    </UserProvider>
  );
};

export default App;
