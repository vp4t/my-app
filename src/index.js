import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
      <div className="slides">
    
      </div>
  </React.StrictMode>
);

var requestURL1 = "https://api.spacexdata.com/v4/dragons/5e9d058759b1ff74a7ad5f8f";
var request1 = new XMLHttpRequest();
request1.open('GET', requestURL1);
request1.responseType = 'json';
request1.send();
request1.onload = function() {
  var infoTheFirstDragon = request1.response;
  TheFirstDragonHeader(infoTheFirstDragon);
}

var article = document.querySelector('article');
function TheFirstDragonHeader(jsonFirstDragon) {
  var Dragon1Name = document.createElement('h1');
  Dragon1Name.textContent = jsonFirstDragon["name"];
  article.appendChild(Dragon1Name);

  var Dragon1Description = document.createElement('b');
  Dragon1Description.textContent = 'Description: ' + jsonFirstDragon["description"];
  article.appendChild(Dragon1Description);
 
  var Dragon1Wikipedia = document.createElement('h3');
  Dragon1Wikipedia.textContent = 'Wikipedia: ' + jsonFirstDragon["wikipedia"];
  article.appendChild(Dragon1Wikipedia);

  var Dragon1Height = document.createElement('h3');
  Dragon1Height.textContent = 'Height with trunk: ' + jsonFirstDragon["height_w_trunk"]["meters"]+ ' meters / '+
  jsonFirstDragon["height_w_trunk"]["feet"] + ' feet';
  article.appendChild(Dragon1Height);

  var DragonMassKg = document.createElement('h3');
  DragonMassKg.textContent = 'Dry mass, kg: ' + jsonFirstDragon["dry_mass_kg"];
  article.appendChild(DragonMassKg);

  var DragonMassLb = document.createElement('h3');
  DragonMassLb.textContent = 'Dry mass, lb: ' + jsonFirstDragon["dry_mass_lb"];
  article.appendChild(DragonMassLb);

  var Dragon1Year = document.createElement('h3');
  Dragon1Year.textContent = 'First flight: ' + jsonFirstDragon["first_flight"];
  article.appendChild(Dragon1Year);

  var slides = document.querySelector('.slides');
	var Dragon1Images =  jsonFirstDragon["flickr_images"];
	 for (var i = 0; i < Dragon1Images.length; i++) {
		var Dragon1Image = document.createElement('img');
		Dragon1Image.src = jsonFirstDragon["flickr_images"][i];
    Dragon1Image.alt = "Dragon1, Image" + (i + 1);
    slides.appendChild(Dragon1Image)
   }

}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
