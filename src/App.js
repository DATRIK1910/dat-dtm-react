import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import MyComponent from './components/MyComponent';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
const App = () => {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  return (

    <div>hello world
      <MyComponent></MyComponent>

    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Dat DTM
    //     </p>
    //     <div>Count = {count}</div>
    //     <button onClick={() => dispatch(increaseCounter())}>Tăng</button>
    //     <button onClick={() => dispatch(decreaseCounter())}>Giảm</button>
    //   </header>
    // </div>
  );
}

export default App;
