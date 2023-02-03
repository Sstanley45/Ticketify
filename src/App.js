import './App.css';
import Landing from './pages/Landing';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MoreInfo from './pages/MoreInfo';
import TermsConditions from './pages/TermsConditions';
import Signup from './pages/SignUp';
import Payment from './pages/Payment';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing />}></Route>
        <Route path='/:id' element={<MoreInfo />}></Route>
        <Route path='/TermsConditions' element={<TermsConditions />}></Route>
        <Route path='/auth/signup' element={<Signup />} ></Route>
        <Route path ='/Payment/:id' element={<Payment />}></Route>    
      </Routes>
    </Router>
  );
}

export default App;
