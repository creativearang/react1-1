import React from 'react';
import Book from './chapter_03/Book';

import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// // import Hello from './hello'
// import Welcome from './chapter_04/Welcome';
// import CommentList from './chapter_04/CommentList';
// import NotificationList from './chapter_04/NotificationList';

// const element = <Welcome name="90"/>;
// ReactDOM.render(
//     element,
//     document.getElementById("root")
// );
const root = ReactDOM.createRoot(document.getElementById('root'));
setInterval(() => {           //setInterval 함수를 사용하여 1초마다 콜백함수가 호출되어 렌더링한다.
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}, 1000)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
