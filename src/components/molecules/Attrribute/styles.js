import styled from 'styled-components';

export const Row = styled.div`
  margin-left: 14rem;
  display: flex;
  justify-content: space-between;
  color: rgb(50, 48, 51);
  margin-bottom: 60px;
`;

export const A = styled.div`
  color: black;
  transition: 0.6s;
  &:hover {
    transform: translate(20px, 0);
  }
  padding-top: 22px;
  padding-right: 50px;
`;

export const Click = styled.section`
  display: flex;

  cursor: pointer;
  border-bottom: 4px solid #596c85;
  /* border-bottom-width:30px; */
  margin-bottom: 150px;
  margin-right: 17rem;
`;

export const Svg = styled.svg`
  width: 550px;
  position: absolute;
  /* padding-top: -15rem; */
`;

export const Picture = styled.img`
  padding-top: 74px;
  padding-left: 72px;
  width: 600px;
  position: relative;
  border-radius: 10px;
`;
export const H4 = styled.h4`
  font-family: 'inter';
  font-size: 16px;
  font-weight: 600;
`;
export const H1 = styled.h1`
  padding-top: 20px;
  font-family: 'inter';
  font-size: 65px;
  font-weight: 700;
  line-height: 68px;
`;

export const Note = styled.p`
  padding-right: 70px;
  font-family: 'inter';
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
`;
