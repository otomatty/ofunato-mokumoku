import { Component } from 'solid-js';
import { A, useNavigate } from '@solidjs/router';
import {
  FullScreenNavWrapper,
  NavContent,
  CloseButton,
  ButtonContainer,
} from './FullScreenNav.styled';
import Button from '../Button/Button';

interface FullScreenNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const FullScreenNav: Component<FullScreenNavProps> = (props) => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    props.onClose();
  };

  return (
    <FullScreenNavWrapper isOpen={props.isOpen}>
      <CloseButton onClick={props.onClose}>&times;</CloseButton>
      <NavContent>
        <A href="/" onClick={props.onClose}>
          ホーム
        </A>
        <A href="/schedule" onClick={props.onClose}>
          スケジュール
        </A>
        <A href="/faq" onClick={props.onClose}>
          よくある質問
        </A>
        <A href="/reports" onClick={props.onClose}>
          イベントレポート
        </A>
        <ButtonContainer>
          <Button
            variant="secondary"
            onClick={() => handleNavigation('/contact')}
          >
            お問い合わせ
          </Button>
          <Button onClick={() => handleNavigation('/signup')}>
            参加を申し込む
          </Button>
        </ButtonContainer>
      </NavContent>
    </FullScreenNavWrapper>
  );
};

export default FullScreenNav;
