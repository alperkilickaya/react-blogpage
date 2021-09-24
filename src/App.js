import './App.css';
import AppRouter from './router/Router'
import AuthContextProvider from './context/AuthContext';


function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <AppRouter />
      </AuthContextProvider>
    </div>
  );
}

export default App;
