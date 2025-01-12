 
function Button(){

    const handleClick = () => console.log("Ouch");
    const handleClick2 = (name) => console.log(`stop pressing me ${name}`);
    let count = 0 ;
    const handleClick4 = (e) => console.log(e);

    const handleClick3 = (name) => {
        if(count < 3){
            count++;
            console.log(`${name} you clicked me ${count} times`);
        }else{
            console.log(`${name}, stop clicking me`);
        }
    }

    const handleClick5 = (e) => e.target.textContent = "ouch";

    return(
        <button className="button" onClick={(e) => handleClick5(e)}>Click me</button>
    );
}

export default Button;