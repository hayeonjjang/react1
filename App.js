/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '하연 LIST';
  let [글제목,title] = useState(['하연의 글제목1','하연의 글제목2','하연의 글제목3']);
  let [날짜,date] = useState('2024-11-06 작성');
  let [new글제목,page] = useState(['이거 누르면 상세페이지']);

  let [좋아요, change] = useState(0);


  return (
    <div className="App">
      <div className="black-nav">
        <h4 id={post}>Hayeon Blog</h4>
      </div>
      <h4 style={{color:'blue', fontSize:'16px'}}>{ post }</h4>

      <button onClick={()=>{
        /* [...괄호 벗기고 다시 씌움] */
        let copy = [...글제목];
        copy[0] = 'copy로 변경';
        title(copy);
       }}>이거 누르면 첫번째 제목 바뀜</button>
      <button onClick={()=>{

        let copy = [...글제목];
        copy[1] = '하 - 가나다 정렬을 위한 제목';
        title(copy);
       }}>이거 누르면 두번째 제목 바뀜</button>
      <button onClick={()=>{

        let copy = [...글제목];
        copy[2] = '가 - 가나다 정렬을 위한 제목';
        title(copy);
       }}>이거 누르면 세번째 제목 바뀜</button>
      
      
      <button onClick={()=>{
        let sortt = [...글제목];
        sortt.sort();
        title(sortt);
      }}>가나다순정렬</button>
      

      <div className="list">
        <h4>{글제목[0]} <span onClick={()=>change(좋아요++)}>💖</span> {좋아요} </h4>
        <p>{날짜}</p>
      </div>

      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>{날짜}</p>
      </div>

      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>{날짜}</p>
      </div>

      <div className="list">
        <h4>{new글제목}</h4>
        <p>{날짜}</p>
      </div>

      <Tomodal/>


    </div>
  );
}

/* componant : 1.반복적으로 출현하는 구문 2.큰 page 3.자주 변경되는 UI */
/* componant : 이외 함수에서 사용 중인 변수 사용에 문제점 발생함 */

function Tomodal(){
  return(
    <div className='modal'>
        <h4>제목이다냥</h4>
        <p>날짜다냥</p>
        <p>상세내용이다냥</p>
      </div>
  )
}


export default App;
