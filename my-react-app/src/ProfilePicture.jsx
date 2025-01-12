function ProfilePicture(){
    const imageUrl = "./src/assets/apple.png";
    const handleClick = () => console.log("Ouch");
    const handleClick2 = (e) => console.log(e);
    const handleClick3 = (e) => e.target.style.visibility = "hidden";
    return (<img src={imageUrl} onClick={(e) => handleClick3(e)}></img>)
}

export default ProfilePicture;