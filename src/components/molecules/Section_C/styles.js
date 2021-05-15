import styled from 'styled-components';

export const StyledContainer = styled.div`
    font-family: 'inter';
    padding-top: 10rem;
    background-color: #f1f5f6;
    margin-left: 6rem;
    padding-bottom: 10rem;
    color: #323033;
  `;
  export const StyledNews = styled.section`
    margin-left: 3rem;
    display: flex;
    /* justify-content:space-evenly; */
  `;

  export const StyledMember = styled.section`
    margin-left: 3rem;
    display: flex;
    justify-content: space-between;
    margin-right: 6.4rem;
    margin-bottom: 30px;
  `;

  export const StyledH2 = styled.h2`
    font-size: 30px;
    font-weight: 600;
  `;

  export const StyledButton = styled.button`
    margin-top: 1.8rem;
    margin-right: 1rem;
    background-color: #e64b38;
    transition: 0.7s;
    &:hover {
      background-color: #d12e1a;
    }
    color: #fff;
    width: 200px;
    padding-top: 20px;
    padding-bottom: 20px;
    border-radius: 30px;
    border: #ed6050;
    cursor: pointer;
    font-size: 14px;
    font-weight: 700;
  `;

  export const StyledPhotos = styled.section`
    margin-top: 5rem;
    margin-left: 2.3rem;
    display: flex;
    justify-content: space-between;
    margin-right: 7.3rem;
  `;

  export const StyledWrapper = styled.div`
    border-top: 4px solid #72c1ad;
    background-color: #442562;
    padding-left: 8rem;
    font-family: 'inter';
    color: #fff;
  `;

  export const StyledSubscribe = styled.section`
    display: flex;
    padding-top: 3rem;
  `;

  export const StyledInput = styled.section`
    display: flex;
    /* padding-bottom:10rem; */
    justify-content: space-between;
    margin-right: 6.5rem;
    padding-bottom: 3rem;
  `;

  export const StyledEmail = styled.input`
    margin-top: 20px;
    margin-left: 5rem;
    padding: 22px 140px 22px 20px;
    background-color: #2e1748;
    &:focus {
      outline: none;
      border: none;
    }
    color: #fff;
    border: none;
  `;

  export const StyledSignup = styled(StyledButton)`
    margin-top: 1.3rem;
    /* margin-left:1rem; */
    width: 150px;
    color: #442562;
    background-color: #fff;
    transition: 0.5s;
    &:hover {
      background-color: #d12e1a;
      color: #fff;
    }
  `;