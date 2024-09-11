import 'remixicon/fonts/remixicon.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import store from './redux/store';
import { Provider } from 'react-redux';
import Home from './Home';
import NewCustomer from './NewCustomer';

const App = ()=>{
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/new-customer' element={<NewCustomer/>}/>

        </Routes>
      </BrowserRouter>
    </Provider>
    
    

  )
}
export default App;