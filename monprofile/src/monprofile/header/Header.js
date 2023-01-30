import './header.css';
import image2 from './LOGO.svg';
import image1 from './heart.svg';
const Header =() => {
return (
    <div className="Header">
<img src={image2} alt="" id="img1" className="img1"  /> 
<button id="btn1"> Annonce + </button>
<img src={image1} alt="" id="img2" className="img2"  /> 
    </div>
);
};
export default Header