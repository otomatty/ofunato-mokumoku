import { Component, createSignal } from "solid-js";
import { A, useNavigate } from "@solidjs/router";
import {
  HeaderWrapper,
  HeaderInner,
  Logo,
  Nav,
  HamburgerButton,
  ButtonContainer,
} from "./Header.styled";
import FullScreenNav from "../FullScreenNav/FullScreenNav";
import Button from "../Button/Button";

const Header: Component = () => {
  const [isFullScreenNavOpen, setIsFullScreenNavOpen] = createSignal(false);
  const navigate = useNavigate();

  const toggleFullScreenNav = () =>
    setIsFullScreenNavOpen(!isFullScreenNavOpen());

  return (
    <>
      <HeaderWrapper>
        <HeaderInner>
          <Logo>
            <A href="/">
              <img src="/images/mokumoku-logo.png" alt="大船渡もくもく会" />
              <span>大船渡もくもく会</span>
            </A>
          </Logo>
          <Nav>
            <A href="/schedule">スケジュール</A>
            <A href="/faq">よくある質問</A>
            <A href="/reports">イベントレポート</A>
            <ButtonContainer>
              <Button variant="secondary" onClick={() => navigate("/contact")}>
                お問い合わせ
              </Button>
              <Button onClick={() => navigate("/signup")}>
                もくもく会に参加する
              </Button>
            </ButtonContainer>
          </Nav>
          <HamburgerButton onClick={toggleFullScreenNav}>
            <span></span>
            <span></span>
            <span></span>
          </HamburgerButton>
        </HeaderInner>
      </HeaderWrapper>
      <FullScreenNav
        isOpen={isFullScreenNavOpen()}
        onClose={() => setIsFullScreenNavOpen(false)}
      />
    </>
  );
};

export default Header;
