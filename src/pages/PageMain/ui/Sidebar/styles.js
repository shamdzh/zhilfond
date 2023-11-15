import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 32%;
  gap: 20px;
  height: 100%;
  border-right: 1px solid rgba(222, 222, 221, 1);
  padding: 26px 16px;
`;

export const SidebarTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0em;
  color: #333333;
`;

export const StyledInput = styled.input`
  position: relative;
  outline: none;
  border-radius: 8px;
  padding: 8px 34px 8px 12px;
  font: inherit;
  font-size: 16px;
  line-height: 24px;

  width: 100%;
  height: 46px;
  padding: 16px;

  border: 1.5px solid rgba(233, 236, 239, 1);
`;
