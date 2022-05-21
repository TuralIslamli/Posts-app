import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { Messages } from "./pages/messages/Messages";
import { Posts } from "./pages/posts/Posts";
import { Users } from "./pages/users/Users";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Posts />}></Route>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/messages" element={<Messages />}></Route>
        <Route path="/userposts" element={<Messages />}></Route>
      </Routes>
    </div>
  );
};

export default App;
