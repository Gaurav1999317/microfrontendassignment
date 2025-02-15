import React,{lazy,Suspense} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./component/Body";
import MainContainer from "./component/MainContainer";

const EmailComponent=lazy(()=>import("emailComponent/App"))
const ChatComponent=lazy(()=>import("chatComponent/App"))

const App = () => {
  return <BrowserRouter>
  <Routes>
  <Route path={"/"} element={<Body/>}>
  <Route path={"/"} element={<MainContainer/>}/>
  <Route path={"/chat"} element={<Suspense fallback={<p>Let me load broo..</p>}>
  <ChatComponent/>
  </Suspense>}/>
  <Route path={"/email"}element={<Suspense fallback={<p>Let me load broo..</p>}>
  <EmailComponent/>
  </Suspense>}/>
  <Route path="*" element={<MainContainer/>}/>
  </Route>
  </Routes>
  </BrowserRouter>;
};

export default App;
