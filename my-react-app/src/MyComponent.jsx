import React, {useState} from 'react'; 

function MyComponent(){
    const [name, setName] = useState();
    const[age, setAge] = useState(0); 
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName("John");
    }

    const incrementAge = () => {
        setAge(age+1);
    }

    const toggleEmployment = () => {
        setIsEmployed(!isEmployed);
    }
    return(<div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>
        <p>Age: {age}</p>
        <button onClick={incrementAge}>Increment Age</button>
        <p>Employed: {isEmployed ? "yes" : "no"}</p>        
        <button onClick={toggleEmployment}>Toggle Employment</button>
    </div>)
}

export default MyComponent; 