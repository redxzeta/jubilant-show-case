// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    headerFont: string;
    colors: {
      main: string;
      darker: string;
      lighter: string;
      black:string;
      lightgray:string;
    };
  }
}