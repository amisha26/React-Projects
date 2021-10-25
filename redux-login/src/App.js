import "./App.css";
import Login from "./Comp/Login";
import Logout from "./Comp/Logout";
import { useSelector } from "react-redux";
import {selectUser} from './features/userSlice' 

function App() {
  const user = useSelector(selectUser);

  return <div className="App">{user ? <Logout /> : <Login />}</div>;
}

export default App;
