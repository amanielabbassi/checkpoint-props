import './App.css';
import ListeProfile from './components/ListeProfil';
const liste =[
  {
    name: "amani elabbassi", 
    bio :"peace & love",
    profession:"Expert cyber security",
  }
]
function App() {
  return (
    <div className="App">
     <ListeProfile profil={liste}/>
</div>
 );
 }
 
export default App;