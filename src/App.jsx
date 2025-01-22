import { useState } from "react";
import "./App.css";

function App() {
  const initialState = [
    { id: 1, name: "John", age: 20 },
    { id: 2, name: "Doe", age: 21 },
  ];
  const [users, setUsers] = useState(initialState);
  const [name, setName] =useState("");
  const [age, setAge]= useState("");

  // TODO: 이름과 나이를 각각 상태로 정의하세요. 초기값은 빈문자열("")입니다.

  const addUser = (e) => {
    e.preventDefault();


    if (name===""||age ==="") {
      alert ("오류");
      return;
    }
    // TODO: 이름과 나이가 모두 입력되지 않았을 때는 alert 처리하고 함수를 종료하세요. 논리합연산자 (||) 를 이용하세요.
    
    // newusers 새로 정의 후 setusers에 받아내기 
    const newUser = {
      name: name,
      age: age,
      id:  Date.now() 
    }

    setUsers(
      [
         ...users,
      newUser,
      ] 
    )
    // TODO: 사용자 리스트 상태를 업데이트 하세요. spread operator 를 사용하고, 추가되는 id는 현재 시간을 밀리초 단위로 반환하는 Date.now() 를 사용하세요.
  };

  const removeUser = (filteredId) => {
    console.log(filteredId)
    const filteredUser = users.filter((user) => {
      return filteredId !== user.id ;
    }); 
    // TODO: filter 메소드를 사용해서 사용자 삭제 로직을 구현해 보세요.

  setUsers(filteredUser);
  };

  return (
    <>
      <h1>사용자 리스트</h1>
      <form onSubmit={addUser}>
        {/* TODO: input 태그에 value, onChange 속성을 추가해서 이름과 나이의 상태와 상태변경 로직을 연결하세요 */}
        <input type="text" placeholder="이름" value={name} onChange={(e)=>{setName(e.target.value)}}/>
        <input type="number" placeholder="나이" value={age} onChange={(e)=>{setAge(e.target.value)}} />
        <button type="submit">사용자 추가</button>
      </form>
      <div>
        {users.map((user)=>{
          return (
            <ul key={user.id} className="show-user">
              <div>{user.name}</div>
              <div>{user.age}</div>
              <div><button onClick={() => removeUser(user.id)}>삭제</button></div>
            </ul>
          );
        })}
        {/* TODO: map 메소드를 이용해서 user 리스트를 렌더링하세요.  */}
        {/* 이름: John, 나이: 20 [삭제] 버튼이 하나의 행에 나올 수 있도록 해보세요. (hint: flex) */}
      </div>
    </>
  );
}

export default App;