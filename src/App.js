import { Routes,Route} from "react-router-dom";
import Home from "./routes/home/home.component"
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component";
import Shop from "./routes/shop/shop.component";



function App() {

  return (
    <Routes>
         <Route  path="/"  element={<Navigation/>}>
           <Route path="/" element={<Home/>}/>
           <Route path="/sign-in" element={<SignIn/>}/>
           <Route path="/shop" element={<Shop/>} />
         </Route>
     </Routes>
  )
 
}

export default App;
