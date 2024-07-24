function List(){
    const fruits = [{id: 1, name: "apple", calories: 50},
                    {id: 2, name: "mango", calories: 100},
                    {id: 3, name: "papaya", calories: 40},
                    {id: 4, name: "orange", calories: 55}];


    // fruits.sort((a, b) => a.name.localeCompare(b.name)); // sort by name

    fruits.sort((a, b) => a.calories - b.calories); // sort by calories

    //filter fruits with cal>50
    const highCalFruits = fruits.filter(fruit => fruit.calories > 50);

    const listItems = fruits.map(fruit => 
                    <li key={fruit.id}>{fruit.name}: &nbsp;
                    <b>{fruit.calories}</b></li>);


    return(<ol>{listItems}</ol>);
}

export default List