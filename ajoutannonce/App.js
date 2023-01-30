
import './App.css';
function App() {
  return (
 
<div className="annonces">
    <div className='annonce'>
            <input  className='description ' id='Description' placeholder ='Description...' type="text" />
            <input  className='info' id='nom' placeholder='nom' type="text" />
            <input   className='info' id='prenom' placeholder='prenom' type="text" />
            <input  className='info'id='tel' placeholder='tel' type="text" />
            <input  className='info'id='email' placeholder='rumbling@gmail.com' type="text" />
            <input  className='info'id='lieu' placeholder='adresse' type="text" />
            <input  className='info'id='modalite' placeholder='EnLigne' type="text" />
        
            <input  className='info'id='modalite' placeholder='lien' type="text" />
            <input  className='info'id='tarif' placeholder='tarif' type="text" />
            <input  className='info'id='thème' placeholder='modalité' type="text" />
             <button className='info' id='btn'> Ajouter une localisation </button>
              <button className='info' id='btn'>Publier l'annonce </button>
            </div>

            </div>
  );
}

export default App;
