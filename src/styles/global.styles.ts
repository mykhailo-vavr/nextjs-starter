import { createGlobalStyle } from 'styled-components';
import { Inter } from '@next/font/google';
import { antdStyles } from './ant.styles';

const inter = Inter({ subsets: ['latin'] });

export default createGlobalStyle`
  html {
    font-size: 16px;
  }

  body {
    font-family: ${inter.style.fontFamily}
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none; 
    scrollbar-width: none;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style-type: none;
  }

  ${antdStyles}
`;
