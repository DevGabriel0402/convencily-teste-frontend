import styled from "styled-components";

export const TopHeader = styled.div`
  background-color: #4c16c9;
  height: 56px;
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0 18px;
  margin-bottom: 40px;

  p {
    color: #ffffff;
    font-size: 14px;
  }
  @media (max-width: 1007px) {
    padding: 0 30px;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1008px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin-top: 40px 0;
  padding-bottom: 32px;
  border-bottom: 2px solid #d8e1eb;
  margin-bottom: 32px;

  .ave-values {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 8px;
    @media (max-width: 499px) {
      flex-direction: column;
      gap: 20px;
      width: 100%;
    }
  }

  .input-values {
    display: flex;

    input {
      width: 100%;
      padding: 10px;
      font-size: 14px;
      border: 1px solid #c5d2e0;
      border-radius: 2px;
      caret-color: #4c00ff;

      &:focus {
        outline: none;
        border: 2px solid #4c00ff;
      }
      &::selection {
        background-color: #4c00ff;
        color: #fff;
      }
    }
    @media (max-width: 499px) {
      width: 100%;
    }
  }

  @media (max-width: 1007px) {
    padding: 30px;
  }
  @media (max-width: 499px) {
    flex-direction: column;
    text-align: center;
  }
`;
