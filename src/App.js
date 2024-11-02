import './App.css';
import { Outlet } from 'react-router-dom';
import Welcome from './pages/Welcome';

function App() {
  return (
    <div>
      <Outlet/>
      <Welcome/>
    </div>
  );
}

export default App;