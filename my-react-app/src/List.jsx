function List(){
    // const fruits = ["apple", "orange", "banana", "coconut", "pineaple" ];
    const fruits = [{id:1, name:  "apple", calories: 95}, 
                    {id:2, name: "orange" , calories: 45}, 
                    {id:3, name: "banana", calories: 105}, 
                    {id:4,name: "coconut", calories: 354}, 
                    {id:5, name: "pineaple", calories: 37} ];
    fruits.sort((a,b) => a.name.localeCompare (b.name));
    fruits.sort((a,b)=> a.calories - b.calories);
    const fruitItems = fruits.map (fruits => <li key={fruits.id}>
                                    {fruits.name}: &nbsp;
                                    <b>{fruits.calories}</b></li>); 

    return(<ul>{fruitItems}</ul>);
}

export default List;