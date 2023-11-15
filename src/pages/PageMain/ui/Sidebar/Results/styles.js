import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: auto;
  height: 100%;
  padding-right: 4px;
  margin-right: -6px;

  &::-webkit-scrollbar-thumb {
    border-radius: 100px;
    border: 2px solid transparent;
    background-clip: content-box;
    background-color: #ccc;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: #fcfcfc;
    border-radius: 100px;
  }
`;

export const Title = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0em;
  color: #333333;
`;

export const Placeholder = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0px;
  color: #76787d;
`;

export const UsersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;
