import "./Header.css"
// import Navbar from"./Navbar"
import Tollbar from"../Tollbar/Tollbar"
import Navbar from"./Navbar"
function Header(){
    return (
  <div id="Header">
    <Tollbar></Tollbar>
    <Navbar></Navbar> 
  </div >
    )
}
export default Header;