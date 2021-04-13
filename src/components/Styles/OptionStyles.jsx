import styled from 'styled-components';

export const OptionWrapper = styled.div`
     background: ${props => props.theme.bgColor};
     display: flex;
     flex-direction: column;
     width: 100%;
     padding: 50px 15px 0 370px;
     min-height: 100vh;

     @media screen and (max-width: 1070px){
          padding: 20px;
     }
`;

export const OptionHeading = styled.h2`
     text-align: center;
     font-size: 30px;
     margin-bottom: 30px;
`;

export const FormWrapper = styled.form`
     display: flex;
     flex-direction: column;
`;

export const NumberInput = styled.input`
     max-width: 430px;
     padding: 10px 20px;
     margin-top: 20px;
     border-radius: 10px;
     background: ${props => props.theme.mainColor};
     box-shadow:  9px 9px 11px ${props => props.theme.shadowColor},
             -9px -9px 11px ${props => props.theme.hoverShadowColor};
     -webkit-appearance: none;
     
     &::placeholder{
          font-size: 15px;
     }
`;

export const Result = styled.p`
     margin-top:20px;
     font-size: 20px; 
`;

export const ResultNumber = styled.span`
     font-weight: bold;
`;

export const OptionInfo = styled.div`
     margin: 50px 0;
     box-shadow:  9px 9px 11px ${props => props.theme.shadowColor},
             -9px -9px 11px ${props => props.theme.hoverShadowColor};
             padding: 20px;
             border-radius: 20px;
`;

export const OptionInfoHeading = styled.h3`
     font-size: 25px;
     margin-bottom: 10px;
`;

export const OptionInfoDescription = styled.p`
     text-align: left;
     @media screen and (max-width: 1070px){
          font-size:18px;
     }
`;

export const LabelForInput = styled.label`
     font-size: 12px;
     margin-top: 3px;
`;