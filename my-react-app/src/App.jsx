import UserGreeting from "./UserGreeting.jsx";
import List from "./List.jsx";

function App() {
  return(
    <>
      <UserGreeting isLoggedIn={true} username="Shivansh"/>
      <List/>
    </>
  );
}

export default App
