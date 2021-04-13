import styled from 'styled-components';
import { Link } from "react-router-dom";

export const SectionWrapper = styled.div`
     padding-top: 50px;
     display: flex;
     flex-direction: column;
`;

export const Section = styled.div`
     background: ${props => props.theme.mainColor};
     width: 355px;
     padding: 20px;
     min-height: 100vh;
     position: fixed;
     margin-top: 30px;
     
     @media screen and (max-width: 1070px){
          width: 100%;
          position: relative;
          min-height: 100vh;
          border-bottom: 10px solid black;
     }
`;

export const LinkItemWrapper = styled.li`
     margin: 10px;
     box-shadow:  10px 10px 19px ${props => props.theme.shadowColor},
             -10px -10px 19px ${props => props.theme.hoverShadowColor};
     border-radius: 15px;
     padding: 10px;
     transition: 0ms;

     &:hover{
          background: ${props => props.theme.oppositeColor};
     }

     @media screen and (max-width: 1070px){
          max-width: 400px;
     }
`;

export const LinkItem = styled(Link)`
     text-decoration: none;
     display: flex;
     align-items: center;
`;

export const LinkText = styled.p`
     font-size: 15px;
     transition: 0.03s;
     color: ${props => props.theme.sectionColor};

     @media screen and (max-width: 1070px){
          font-size: 20px;
     }
`;

export const SectionHeading = styled.h2`
     @media screen and (max-width: 1070px){
          font-size: 30px;
          text-align: center;
     }
`;

export const SectionLinks = styled.ul`
     display: flex;
     flex-flow: row wrap;
     justify-content:flex-start;

     @media screen and (max-width: 1070px){
          justify-content:space-around;
     }
`;