import Header from '../components/Header';
import CartButton from '../components/CartButton';
import DropdownButton from '../components/DropdownButton';
import MenuItem from '../components/MenuItem';
import Footer from '../components/Footer';
//import Animation from '../components/Animation'
import PopUp from '../components/PopUp';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';



function Menu() {
  const menu = useSelector((state) => state.menu);
  const [rerender, setRerender] = useState(true);
  // alternativ popup som fungerar med en button const [buttonPopup, setButtonPopup] = useState(false);
  
  const [timedPopup, setTimedPopup] = useState(false);
  function refresh() {
    setRerender(!rerender);
  }
   useEffect(()=>{
      setTimeout(()=>{
     setTimedPopup(true)
   },3000);
   }, [])
  

   

  return (
    <div className="grid bg-pink menu">
      <DropdownButton />
      <CartButton />
      <Header />
      {/* <Animation/> */}
   <PopUp trigger={timedPopup} setTrigger={setTimedPopup}><br /><br />
         <h1 className="jubelium-h1"> Erbjudande!</h1>
              <p className="jubelium-p">
              Eftersom Göteborg fyller 400 år vill Airbean fira med ett kampanjerbjudande! Om du köper en bryggkaffe och en Gustav Adolfsbakelse får du den för ett kampanjpris (21 kr billigare totalt). Lägg till Gustav Adolfsbakelse som produkt i din meny, den ska kosta 40 kr. Det är alltså enbart med denna kombination som kampanjerbjudandet gäller.
              </p>
      </PopUp> 
      <h1 className="big-h1 brown">Meny</h1>
      
      <ul className="menu-list">
        {menu.map((item) => {
          return <MenuItem key={item.id} item={item} refresh={refresh} />;
        })}
      </ul>
     
      <Footer />
    </div>
  );
}

export default Menu;
