import './App.css';
import Cart from './component/Cart/Cart';
import Header from './component/Header/Header';
import TextSport from './component/TextSport/TextSport';





function App() {
  return (
    <div className='App'>
      <Header></Header>
      <TextSport></TextSport> 
      <Cart></Cart>   
    </div>
  );
}

export default App;
