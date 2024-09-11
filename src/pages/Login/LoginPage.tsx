import { Component } from 'solid-js';
import { LoginPageWrapper } from './LoginPage.styled';

const LoginPage: Component = () => {
  return (
    <LoginPageWrapper>
      <h1>ログイン</h1>
      <form>
        <label for="email">メールアドレス：</label>
        <input type="email" id="email" name="email" required />

        <label for="password">パスワード：</label>
        <input type="password" id="password" name="password" required />

        <button type="submit">ログイン</button>
      </form>
      <p>
        アカウントをお持ちでない方は<a href="/signup">こちら</a>
        から登録してください。
      </p>
    </LoginPageWrapper>
  );
};

export default LoginPage;
