import styled from 'styled-components';

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 55px;
  background-color: #121212;
  margin-left: 200px;
  width: calc(100vw - 200px);
`;

export const Avatar = styled.img`
  width: 33px;
  height: 33px;
  border-radius: 100%;
`;

export const Name = styled.p`
  color: #fff;
  font-weight: 500;
  font-size: 0.8rem;
  padding: 0.6rem;
`;

export const UpgradeLink = styled.a``;

export const UpgradeButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  width: 115px;
  height: 23px;
  border-radius: 100px;
  border: 1px solid #fff;
  margin: 1rem;

  &:hover {
    transform: scale(1.1);
    transition: all ease 0.3s;
  }
`;

export const UpgradeText = styled.p`
  font-family: 'Montserrat-SemiBold', sans-serif;
  text-transform: uppercase;
  color: #fff;
  font-size: 10px;
  letter-spacing: 2.3px;
`;

export const NavLeftWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
`;

export const NavRightWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.div`
  padding: 1rem;
`;
