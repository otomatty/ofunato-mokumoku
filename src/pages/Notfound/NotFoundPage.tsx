import { Component } from 'solid-js';
import { NotFoundPageWrapper } from './NotFoundPage.styled';

const NotFoundPage: Component = () => {
  return (
    <NotFoundPageWrapper>
      <h1>404 - ページが見つかりません</h1>
      <p>お探しのページは存在しないか、移動した可能性があります。</p>
      <a href="/">ホームページに戻る</a>
    </NotFoundPageWrapper>
  );
};

export default NotFoundPage;
