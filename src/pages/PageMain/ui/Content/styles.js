import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 30px;

  gap: 60px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  gap: 20px;

  max-width: 520px;
`;

export const UserPic = styled.div`
  width: 470px;
  height: 280px;
  border: 1px solid rgba(222, 222, 221, 1);

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
  font-size: 16px;
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
