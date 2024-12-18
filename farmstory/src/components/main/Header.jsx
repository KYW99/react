import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header>
        <Link to="/" className="logo">
          <img src="/images/logo.png" alt="로고" />
        </Link>
        <p>
          <Link to="/">HOME |</Link>
          <Link to="/user/login">로그인 |</Link>
          <Link to="/user/terms">회원가입 |</Link>
          <a href="./myinfo/cart.html">나의정보 |</a>
          <a href="#">로그아웃 |</a>
          <a href="./admin/">관리자 |</a>
          <a href="./community/qna.html">고객센터</a>
        </p>
        <img src="/images/head_txt_img.png" alt="3만원 이상 무료배송" />

        <ul className="gnb">
          <li>
            <a href="./introduction/hello.html">팜스토리소개</a>
          </li>
          <li>
            <a href="./market/list.html">
              <img src="/images/head_menu_badge.png" alt="30%" />
              장보기
            </a>
          </li>
          <li>
            <a href="./croptalk/story.html">농작물이야기</a>
          </li>
          <li>
            <a href="./event/event.html">이벤트</a>
          </li>
          <li>
            <a href="./community/notice.html">커뮤니티</a>
          </li>
        </ul>
      </header>
    </>
  );
}