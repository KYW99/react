import { useState } from "react";

const UseStateComponent = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");
  const [today, setToday] = useState(new Date());
  const [user, setUser] = useState({ uid: "", name: "", age: 0 });

  const inputChangeHandler = (e) => {
    setMessage(e.target.value);
  };

  // prettier-ignore
  return (
    <div className="UseStateComponent">
      <h4>UseStateComponent</h4>
      <p>
        상태값 count : {count}
    </p>
    <button onClick={()=>{setCount(count + 1)}}>+</button>
    <button onClick={()=>{setCount(count +-1)}}>+-</button>

<p>
    {message}
</p>
<input type="text" value={message} onChange={inputChangeHandler}></input>

<p>
    상태값 today : {JSON.stringify(today)}
</p>

<p>
    아이디 : {user.uid}<br/>
    이름 : {user.name}<br/>
    나이 : {user.age}<br/>
</p>
<input type="text" value={user.uid} onChange={(e)=>setUser({...user, uid:e.target.value})}></input>

<input type="text" value={user.name} onChange={(e)=>setUser({...user, name:e.target.value})}></input>

<input type="text" value={user.age} onChange={(e)=>setUser({...user, age:e.target.value})}></input>

    </div>
   
  );
};

export default UseStateComponent;
