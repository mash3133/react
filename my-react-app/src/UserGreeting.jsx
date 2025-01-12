function  UserGreeting(props){
    // if(props.isLoggedIn){
    //     return <h2 style={{color:"white"}}>Welcome back, {props.username}</h2>;
    // }
    // else{
    //     return <h2 style={{color:"white"}}>Please log in to continue</h2>
    // }
    
    return(props.isLoggedIn ? <h2 style={{color:"white"}}>Welcome back, {props.username}</h2> : <h2 style={{color:"white"}}>Please log in to continue</h2>);

}

export default UserGreeting;