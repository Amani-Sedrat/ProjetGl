import {BrowserRouter as Router, Route ,Routes   }from "react-router-dom" ;
import Header from './header/Header';
import './monprofile.css';
import image from './Rectangle.svg';
import image1 from './sup.svg';
import image2 from './mod.svg';
function Monprofile() {


  return (
    <div className="Monprofile">
    <Header/>
    
<div className="bloc">
<h1 id="p1">Mon profile</h1>
<h1 id="p2">Nom</h1>
<h1 id="p3">Prénom</h1>
<h1 id="p4">adresseemail@gmail.com</h1>
</div>
<div className="bloc1">
<h1 id="p5">Mes annonces</h1>
<div className="bloc2">
<img src={image} alt="" id="img3" className="img3"  /> 
<div className="description">
<h1 id="p6">Descripttion</h1>

</div>
<button id="btn2"> <img src={image1} alt="" id="img4" className="img4"  />  </button>
<button id="btn3"> <img src={image2} alt="" id="img5" className="img5"  />  </button>
</div>

<div className="bloc3">
<img src={image} alt="" id="img3" className="img3"  /> 
<div className="description">
<h1 id="p6">Descripttion</h1>

</div>
<button id="btn2"> <img src={image1} alt="" id="img4" className="img4"  />  </button>
<button id="btn3"> <img src={image2} alt="" id="img5" className="img5"  />  </button>
</div>

<div className="bloc4">
<img src={image} alt="" id="img3" className="img3"  /> 
<div className="description">
<h1 id="p6">Descripttion</h1>

</div>
<button id="btn2"> <img src={image1} alt="" id="img4" className="img4"  />  </button>
<button id="btn3"> <img src={image2} alt="" id="img5" className="img5"  />  </button>
</div>



</div>

    </div>
  );
}
export default Monprofile;