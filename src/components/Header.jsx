import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { HamburgerMenuList } from "../../data";
import { useSelector } from "react-redux";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);

  const cars = useSelector((state) => state.car.cars);

  return (
    <Container>
      <a href="#">
        <img src="/logo.svg" alt="" />
      </a>
      <Menu>
        {cars.map((car, index) => (
          <a key={index} href="#">
            {car}
          </a>
        ))}
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>

      <HamburgerMenu show={burgerStatus}>
        <MenuWrapper>
          <CustomCloseButtom onClick={() => setBurgerStatus(false)} />
        </MenuWrapper>
        {cars.map((car, index) => (
          <li key={index} href="#">
            <a href="#">{car}</a>
          </li>
        ))}

        {HamburgerMenuList.map(({ id, title }) => (
          <li key={id}>
            {" "}
            <a href="#"> {title} </a>{" "}
          </li>
        ))}
      </HamburgerMenu>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  gap: 1rem;

  a {
    font-weight: bold;
    text-transform: uppercase;
  }

  @media (max-width: 992px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  a {
    font-weight: bold;
    text-transform: uppercase;
  }
`;

const CustomMenu = styled(AiOutlineMenu)`
  cursor: pointer;
  font-size: 20px;
`;

const CustomCloseButtom = styled(AiOutlineClose)`
  font-size: 20px;
  cursor: pointer;
`;

const MenuWrapper = styled.div`
  display: flex;
  justify-content: end;
`;

const HamburgerMenu = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  z-index: 2;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  transform: ${({ show }) => (show ? "translateX(0)" : "translateX(100%)")};

  transition: transform 0.2s ease;

  li {
    padding: 10px 0;
    border-bottom: 1px solid rgba(0 0 0 / 0.2);
  }
  a {
    font-weight: bold;
  }
`;
