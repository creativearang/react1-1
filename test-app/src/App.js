// import logo from './logo.svg';
import './App.css';
import Book from "./chapter_03/Book";
import Clock from './chapter_03/Clock';
import Library from './chapter_03/Library';
import Welcome from './chapter_04/Welcome';
// import NotificationList from './chapter_04/NotificationList';
// import Counter from './counter';
// import FocusButton from './FocusButton';

function App() {

  return (
    <div className="App">
      <Book
        name="죽음의 수용소에서 "
        numOfPage={459}
      />
      <Clock

      />
      <Library

      />
      <Welcome
        name="creativearang"
      />

    </div>
  );
}

export default App; //외부에서 컴포넌트를 사용가능하게 한다.
