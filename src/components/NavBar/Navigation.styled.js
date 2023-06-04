import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #000000;
  font-size: 28px;
  font-weight: 600;
  background-color: #fce1a2;
  margin-left: 15px;
  padding: 12px;

  &.active {
    color: red;
  }
  &:hover {
    text-decoration: underline;
  }
`;
export const StyledNav = styled.div`
  display: flex;
  gap: 25px;
  flex-direction: row;
  padding: 30px, 30px;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  background-color: #fce1a2;
  height: 66px;
  margin-bottom: 10px;
`;
export const Button = styled.button`
  border: 1px solid;
  border-radius: 4px;
  font-size: 16px;
  padding: 8px;
  margin: 10px;
  max-width: 175px;
  /* background-color:#fce1a2; */
  background-color: white;
  cursor: pointer;
  &:hover {
    box-shadow: 1px 2px 2px 3px lightblue;
  }
`;
export const StyledProfile = styled.p`
  margin-bottom: 10px;
  margin-top: 10px;
  font-family: Segoe UI Semibold;
`;
export const StyledUserInfo = styled.div`
  font-family: Segoe UI Semibold;
  display: flex;
  gap: 15px;
  flex-direction: row;
  align-items: center;
  padding: 30px, 30px;
  justify-content: space-between;
`;
