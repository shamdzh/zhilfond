import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  border: 1px solid rgba(224, 224, 224, 1);
  border-radius: 10px;

  cursor: pointer;
`;

export const Container = styled.div`
  width: 100%;
  flex-direction: column;
  padding: 15px;
  gap: 6px;
  background-color: ${({ isActive }) => (isActive ? "#E0E0E0" : "none")};
`;

export const Avatar = styled.div`
  width: 70px;
  height: 70px;
  border-right: 1px solid rgba(222, 222, 221, 1);

  min-width: 70px;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    display: block;
    width: 40px;
    height: auto;
  }
`;

export const Title = styled.div`
  font-size: 14px;
  font-weight: 600;
  line-height: 17px;
  letter-spacing: 0px;
  color: #333;
`;

export const Subtitle = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0px;
  text-align: left;
  color: #76787d;
`;
