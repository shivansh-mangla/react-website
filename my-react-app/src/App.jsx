import UserGreeting from "./UserGreeting.jsx";
import List from "./List.jsx";

function App() {

  const fruits = [{id: 1, name: "apple", calories: 50},
    {id: 2, name: "mango", calories: 100},
    {id: 3, name: "papaya", calories: 40},
    {id: 4, name: "orange", calories: 55}];

  const vegetables = [{id:1, name:"potato", calories: 120},
                      {id:2, name:"celery", calories: 20},
                      {id:3, name:"tomato", calories: 35},
                      {id:4, name:"carrot", calories: 40}
  ];

  return(
    <>
      <UserGreeting isLoggedIn={true} username="Shivansh"/>
      {fruits.length && <List items={fruits} category="Fruits"/>}
      {vegetables.length && <List items={vegetables} category="Vegetables"/>}
    </>
  );
}

export default App
