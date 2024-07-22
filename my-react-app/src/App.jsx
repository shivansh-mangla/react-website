import Card from "./Card.jsx"
import Student from "./Student/Student.jsx";
import UserGreeting from "./UserGreeting.jsx";

function App() {
  return(
    <>
      <UserGreeting isLoggedIn={true} username="Shivansh"/>
      <Student name="Shivansh" age={21} isStudent={true}/>
      <Student name="Bonzi" age={22} isStudent={false}/>
      <Student/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </>
  );
}

export default App
