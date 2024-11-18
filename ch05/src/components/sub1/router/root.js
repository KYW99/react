import { createBrowserRouter } from "react-router-dom";
import Hello from "../Hello";
import Welcome from "../Welcome";
import Greeting from "../Greeting";

//라우팅 테이블 설정
const root = createBrowserRouter([
  { path: "/sub4/hello,", element: <Hello /> },
  { path: "/sub4/Welcome,", element: <Welcome /> },
  { path: "/sub4/Greeting,", element: <Greeting /> },
]);

//라우터 내보내기
export default root;
