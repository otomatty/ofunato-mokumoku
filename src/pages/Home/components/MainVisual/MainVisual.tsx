import { Component } from 'solid-js';
import { A } from '@solidjs/router';
import {
  MainVisualWrapper,
  MainVisualContent,
  MainVisualImage,
  MainVisualTextContent,
  MainVisualTitle,
  MainVisualDescription,
  ButtonWrapper,
} from './MainVisual.styled';
import Button from '../../../../components/Button/Button';

const MainVisual: Component = () => {
  return (
    <MainVisualWrapper>
      <MainVisualContent>
        <MainVisualImage
          src="/images/mokumoku-logo.png"
          alt="大船渡もくもく会"
        />
        <MainVisualTextContent>
          <MainVisualTitle>大船渡もくもく会へようこそ</MainVisualTitle>
          <MainVisualDescription>
            <p>
              大船渡もくもく会は、地域の人々が集まり、自己学習や個人プロジェクトに取り組む場所です。プログラミング、デザイン、ライティングなど、様々な分野で自由に学習できます。
            </p>
            <p>
              初心者から経験者まで、誰でも参加できます。一人で学ぶのではなく、同じ志を持つ仲間と一緒に成長しましょう。
            </p>
          </MainVisualDescription>
          <ButtonWrapper>
            <A href="/signup">
              <Button variant="primary">もくもく会に参加する</Button>
            </A>
          </ButtonWrapper>
        </MainVisualTextContent>
      </MainVisualContent>
    </MainVisualWrapper>
  );
};

export default MainVisual;
