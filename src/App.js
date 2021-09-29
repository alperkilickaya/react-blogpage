import './App.css';
import AppRouter from './router/Router'
import { ToastContainer } from "react-toastify";
//import AuthContextProvider from './context/AuthContext';


function App() {
  return (
    <div className="App">
      {/* <AuthContextProvider> */}
        <AppRouter />
        <ToastContainer />
      {/* </AuthContextProvider> */}
    </div>
  );
}

export default App;
