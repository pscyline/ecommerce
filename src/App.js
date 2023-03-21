import './App.css';
import Header from "./containers/Header";
import ProductListing from "./containers/ProductListing"
import ProductDetail from "./containers/ProductDetail"
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
        <Route path='/' element={<ProductListing />} />
        <Route path='/product/:productId' element={<ProductDetail />} />
        <Route>404 Not Found!</Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
