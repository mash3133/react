import Header from './header.jsx';
import Footer from './Footer.jsx';
import Food from './Food.jsx';  
import Card from './Card.jsx';
import Button from './Button.jsx';
import Student from './Student.jsx';
import UserGreeting from './UserGreeting.jsx';

import apple from './assets/apple.png';
import orange from './assets/orange.webp';

function App() {
  return(<>
    <Header></Header>
    <UserGreeting isLoggedIn={true} username="Maesha"></UserGreeting>

    <Card 
      name="Apple" 
      image={apple} 
      color="red" 
      price={1}
      text="An apple away keeps the doctor a day"
    ></Card>
    <Card 
      name="Orange" 
      image={orange} 
      color="orange" 
      price={.99}
      text="Get your vitamin C with oranges"  
    ></Card>
    <Card></Card>
    <Button></Button>
    <Footer></Footer>

  </>
  );
}

export default App
