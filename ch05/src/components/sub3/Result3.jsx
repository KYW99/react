import { useLocation } from "react-router-dom";

export default function Result3() {
  const location = useLocation();

  const data = location.state && location.state.formDate;

  return (
    <div className="Result3">
      <span>Result3</span>
      <p>
        이름 : {data.name}
        <br />
        이메일 : {data.email}
        <br />
        나이 : {data.age}
        <br />
      </p>
    </div>
  );
}
