import { Component, createSignal } from 'solid-js';
import { A, useNavigate } from '@solidjs/router';
import {
  HeaderWrapper,
  HeaderInner,
  Logo,
  Nav,
  HamburgerButton,
  ButtonContainer,
} from './Header.styled';
import FullScreenNav from '../FullScreenNav/FullScreenNav';
import Button from '../Button/Button';

const Header: Component = () => {
  const [isNavOpen, setIsNavOpen] = createSignal(false);
  const navigate = useNavigate();

  const toggleNav = () => setIsNavOpen(!isNavOpen());

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
          <Nav isOpen={isNavOpen()}>
            <A href="/schedule" onClick={() => setIsNavOpen(false)}>
              スケジュール
            </A>
            <A href="/faq" onClick={() => setIsNavOpen(false)}>
              よくある質問
            </A>
            <A href="/reports" onClick={() => setIsNavOpen(false)}>
              イベントレポート
            </A>
            <ButtonContainer>
              <Button
                variant="secondary"
                onClick={() => {
                  navigate('/contact');
                  setIsNavOpen(false);
                }}
              >
                お問い合わせ
              </Button>
              <Button
                onClick={() => {
                  navigate('/signup');
                  setIsNavOpen(false);
                }}
              >
                参加を申し込む
              </Button>
            </ButtonContainer>
          </Nav>
          <HamburgerButton onClick={toggleNav}>
            <span></span>
            <span></span>
            <span></span>
          </HamburgerButton>
        </HeaderInner>
      </HeaderWrapper>
      <FullScreenNav isOpen={isNavOpen()} onClose={() => setIsNavOpen(false)} />
    </>
  );
};

export default Header;
