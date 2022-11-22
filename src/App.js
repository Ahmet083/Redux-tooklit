import { useDispatch, useSelector } from "react-redux";
import UserShow from "./components/useShow";


function App() {
 //const authState = useSelector(state => state.auth)
 const userState = useSelector(state => state.user)
 const dispatch = useDispatch()

 console.log("APP USER STATE", userState)
 
 return (
    <div className="container">
     <div className="row">
     <div className="col-6">
     </div>
     <div className="col-6">
     <UserShow />
     </div>
     </div>
    </div>
  );
}

export default App;
