'use client';

import { App as AppProvider } from 'antd';
import { UserProvider } from '@/context';
import { GlobalStyle, lightTheme } from '@/styles';
import { ThemeProvider } from 'styled-components';
import Registries from '@/components/registries';
import { AppFC } from './types';
import ProtectedRoutes from '../ProtectedRoutes';

const App: AppFC = ({ children }) => (
  <html lang="en">
    <body>
      <UserProvider>
        <ThemeProvider theme={lightTheme}>
          <GlobalStyle />
          <AppProvider>
            <Registries>
              <ProtectedRoutes>{children}</ProtectedRoutes>
            </Registries>
          </AppProvider>
        </ThemeProvider>
      </UserProvider>
    </body>
  </html>
);

export default App;
