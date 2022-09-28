import './App.css';
import Cart from './component/Cart/Cart';
import CartCenter from './component/CartCenter/CartCenter';
import Header from './component/Header/Header';
import MainCart from './component/MainCart/MainCart';




function App() {
  return (
    <div>
      <Header></Header>
      <Cart></Cart>
      <CartCenter></CartCenter>
      <MainCart></MainCart>
    </div>
  );
}

export default App;
