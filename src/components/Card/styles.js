import styled from "styled-components";

export const Container = styled.div`
  width: 240px;
  height: 328px;
  display: flex;
  flex-direction: column;
  align-items: start;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  .thumb {
    display: flex;
    border-radius: 5px 5px 0 0;
    padding: 48px;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    border: 1px solid #abbbcc;
    background: #abbbcc;

    @media (max-width: 495px) {
      width: 325px;
    }
    @media (max-width: 330px) {
      width: 300px;
    }
  }

  .description {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 16px 20px;
    gap: 12px;

    @media (max-width: 495px) {
      width: 325px;
    }
    @media (max-width: 330px) {
      width: 300px;
    }
  }

  .title {
    font-size: 18px;
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 200px;
  }

  .runtime {
    font-size: 14px;
    font-weight: 400;
  }

  .award {
    display: flex;
    font-size: 14px;
  }

  .brmilion {
    display: flex;
    justify-content: space-between;

    .subtitle {
      font-size: 12px;
      font-weight: 600;
    }
    .value {
      font-size: 14px;
    }
  }
  @media (max-width: 495px) {
    width: 325px;
    height: 325px;
  }
  @media (max-width: 330px) {
    width: 300px;
  }
`;
