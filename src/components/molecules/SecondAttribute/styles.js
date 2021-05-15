import styled from 'styled-components';

export const StyledRow = styled.div`
margin-right: 5rem;
display: flex;
justify-content: space-between;
color: rgb(50, 48, 51);
margin-bottom: 60px;
`;

export const StyledAnchor = styled.div`
color: black;

transition: 0.6s;
&:hover {
  transform: translate(20px, 0);
}
padding-top: 22px;
padding-right: 50px;
`;
export const StyledLink = styled.section`
display: flex;
cursor: pointer;
border-bottom: 4px solid #596c85;
margin-bottom: 150px;
margin-right: 21.5rem;
`;

export const StyledSvg = styled.svg`
width: 550px;
position: absolute;
margin-left: 8.4rem;
`;

export const StyledDiv = styled.div`
margin-left: 5rem;
`;

export const StyledPicture = styled.img`
padding-top: 74px;
padding-right: 72px;
width: 600px;
position: relative;
border-radius: 10px;
`;

export const StyledH4 = styled.h4`
font-family: 'inter';
font-size: 16px;
font-weight: 600;
`;

export const StyledH1 = styled.h1`
padding-top: 20px;
font-family: 'inter';
font-size: 65px;
font-weight: 10rem;
line-height: 68px;
`;

export const StyledParagraph = styled.p`
padding-right: 8rem;
font-family: 'inter';
font-size: 16px;
font-weight: 400;
line-height: 30px;
`;
