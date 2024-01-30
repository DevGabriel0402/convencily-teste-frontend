import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContainerCard = styled.div`
  width: 100%;
  max-width: 1008px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 4.5rem;
`;

export const Footer = styled.div`
  width: 100vw;
  text-align: center;
  padding: 5px;
  color: #fff;
  background-color: #4c16c9;
  font-size: 14px;
  font-weight: 400;

  a {
    text-decoration: none;
    color: #ffffff;
    font-weight: 600;
  }
`;
