import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [title, setTitle] = useState(['남자 코트 추천', '강남 우동 맛집', 'js 독학']);
  let [logo, setLogo] = useState('ReactBlog');
  let [like, setLike] = useState(0);

  return (
    <div className="App">
      <div className='black-nav'>
        <h4>{logo}</h4>
      </div>

      <div>
        <div className='list'>
          <h4>{title[0]} <span onClick={() => { setLike(like + 1) }}>👍</span> {like} </h4>
          <p>2월 17일 발행</p>
        </div>
        <div className='list'>
          <h4>{title[1]} </h4>
          <p>2월 17일 발행</p>
        </div>
        <div className='list'>
          <h4>{title[2]}</h4>
          <p>2월 17일 발행</p>
        </div>
      </div>

      <button class='button' onClick={() => {
        let copy = [...title];
        copy[0] = '여자 코트 추천';
        setTitle(copy);
      }}>글수정</button>

      <button class='button' onClick={() => {
        let copy = [...title];
        copy.sort();
        setTitle(copy);
      }}>가나다순정렬</button>

      <Modal></Modal>
    </div>
  );
}

function Modal() {
  return (
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
