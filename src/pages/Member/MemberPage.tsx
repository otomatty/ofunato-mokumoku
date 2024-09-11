import { Component } from 'solid-js';
import { MemberPageWrapper } from './MemberPage.styled';

const MemberPage: Component = () => {
  return (
    <MemberPageWrapper>
      <h1>参加者専用ページ</h1>
      <section>
        <h2>イベントアーカイブ</h2>
        <ul>
          <li>
            <a href="#">2023年7月のもくもく会</a>
          </li>
          <li>
            <a href="#">2023年6月のもくもく会</a>
          </li>
          {/* 他のアーカイブを追加 */}
        </ul>
      </section>
      <section>
        <h2>学習リソース</h2>
        <ul>
          <li>
            <a href="#">プログラミング入門ガイド</a>
          </li>
          <li>
            <a href="#">Web開発ロードマップ</a>
          </li>
          {/* 他のリソースを追加 */}
        </ul>
      </section>
      <section>
        <h2>参加者プロフィール</h2>
        <ul>
          <li>山田太郎 - Webデザイナー</li>
          <li>鈴木花子 - バックエンドエンジニア</li>
          {/* 他の参加者を追加 */}
        </ul>
      </section>
    </MemberPageWrapper>
  );
};

export default MemberPage;
