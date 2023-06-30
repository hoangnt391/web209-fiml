
import { Route, Routes } from "react-router-dom";
import  Header  from "./components/Header";
import HomeFiml from "./components/HomeFiml";
import HomePage from "./page/HomePage/HomePage";

function App() {
  
  return (
    <>
      <Routes>
      <Route path="/" element={<HomePage />}>
          <Route index element={ <HomeFiml/>} />
        </Route>
      </Routes>
      
    </>
  );
}

export default App;
