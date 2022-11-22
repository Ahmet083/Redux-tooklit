import { useDispatch, useSelector } from "react-redux";
import UserShow from "./components/useShow";
import { setFirstname, setLastname, setAge } from "./redux/userSalice";


function App() {
 //const authState = useSelector(state => state.auth)
 const userState = useSelector(state => state.user)
 const dispatch = useDispatch()

 console.log("APP USER STATE", userState)
 
 return (
    <div className="container mt-5">
     <div className="row">
        <div className="col-6">
         <div className="row">

         <div className="col-12">
         <label for="basic-url" className="form-label">Isminiz</label>
            <div className="input-group mb-3">            
            <input type="text" className="form-control" 
            onChange={event => dispatch(setFirstname(event.target.value))}
            placeholder="Isminizi yaziniz" aria-label="Username" aria-describedby="basic-addon1" />
          </div>
         </div>

          <div className="col-12">
          <label for="basic-url" className="form-label">Soyadiniz</label>
             <div className="input-group mb-3">            
             <input type="text" className="form-control" 
             onChange={event => dispatch(setLastname(event.target.value))}
             placeholder="Soyadinizi yaziniz" aria-label="Username" aria-describedby="basic-addon1" />
           </div>
          </div>

          <div className="col-12">
          <label for="basic-url" className="form-label">yasiniz</label>
             <div className="input-group mb-3">            
             <input type="text" className="form-control" 
             onChange={event => dispatch(setAge(event.target.value))}placeholder="Yasinizi yaziniz" aria-label="Username" aria-describedby="basic-addon1" />
           </div>
          </div>
         </div>
        </div>
     <div className="col-6">
     <UserShow />
     </div>
     </div>
    </div>
  );
}

export default App;
