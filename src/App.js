import './App.css';
import { animals } from './animals';


function displayCrocFact(e){
    let random = Math.floor(Math.random() * 7);
    const choice = animals.crocodiles.facts[random];
    const factSection = document.getElementById('facts');
    factSection.innerHTML = choice;
}
function displayElephantFact(e){
  let random = Math.floor(Math.random() * 8);
  const choice = animals.elephant.facts[random];
  const factSection = document.getElementById('facts');
  factSection.innerHTML = choice;
}
function displayHippoFact(e){
  let random = Math.floor(Math.random() * 10);
  const choice = animals.hippo.facts[random];
  const factSection = document.getElementById('facts');
  factSection.innerHTML = choice;
}

function App() {
  return (
    <div id='app'>
      <h1>Ferocious Animal Facts</h1> 

      <blockquote id='facts'>
        
      </blockquote>

      <div id='animals'>
        <button id='croc' onClick={displayCrocFact}></button>
        <button id='elephant' onClick={displayElephantFact}></button>
        <button id='hippo' onClick={displayHippoFact}></button>
      </div>
      
    </div>
  );
}

export default App;
