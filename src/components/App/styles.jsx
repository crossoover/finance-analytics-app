import styled, { createGlobalStyle } from 'styled-components';

export const lightTheme = {
     mainColor: "white",
     oppositeColor: "black",
     textColor: 'black',
     bgColor: '#e9ecef',
     bgColor2: '#fff',
     shadowColor: "#ededed",
     hoverShadowColor: "#e7e7e7",
     sectionBg: "#2D5AAA",
     sectionColor: "grey"
};

export const darkTheme = {
     mainColor: "#111111",
     oppositeColor: "white",
     textColor: 'white',
     bgColor: '#000',
     bgColor2: '#111111',
     shadowColor: "#080808",
     hoverShadowColor: "#131313",
     sectionBg: "#2D5AAA",
     sectionColor: "grey"
};

export const GlobalStyle = createGlobalStyle`
     *{
          box-sizing: border-box;
          font-family: 'Helvetica', sans-serif;
          border: none;
          outline: none;
          margin: 0;
          padding: 0;
          color: ${props => props.theme.textColor};
          scroll-behavior: smooth;
          transition: 0.3s;
     }    
     body {
          min-height: 100%;
          background: ${props => props.theme.bgColor};
          background-attachment: fixed;
          overflow-x: hidden;
     }
     li{
          list-style-type: none;
     }
     ::-webkit-scrollbar{
          width: 8px;
          background: black;
     }

     ::-webkit-scrollbar-thumb{
          background: linear-gradient(#555555,#555555);
          border-radius: 4px;
     }

     ::-webkit-scrollbar-thumb:active{
          background: linear-gradient(transparent,#95CB5A,#DAC355,transparent);
     
          border-radius: 4px;
     }
`;
