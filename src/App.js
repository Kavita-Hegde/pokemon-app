 import React , { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { CardList } from './Components/card-list/card-list.component';
import { SearchBox } from './Components/search-box/search-box.component';

class App extends Component{

  constructor(){
    super();
    this.state ={
      monster:[],
      seachField : '',
      pokemon:[
        {
          name:'Pikachu',
          id: 'p1',
          type : 'Electric Pokemon'
        },
        {
          name:'Snorlax',
          id: 'p2',
          type : 'Sleeping Pokemon'
        },
        {
          name:'Charizard',
          id: 'p3',
          type : 'Flame Pokemon'
        },
        {
          name:'Caterpie',
          id: 'p4',
          type : 'Bug Pokemon'
        },
        {
          name:'Eevee',
          id: 'p5',
          type : 'Evolution Pokemon'
        },
        {
          name:'Squirtle',
          id: 'p6',
          type : 'Water Pokemon'
        },
        {
          name:'Bulbasaur',
          id: 'p7',
          type : 'Grass Pokemon'
        },
        {
          name:'Butterfree',
          id: 'p8',
          type : 'Bug Pokemon'
        },
        {
          name:'Psyduck',
          id: 'p9',
          type : 'Water Pokemon'
        },
        {
          name:'Lapras',
          id: 'p10',
          type : 'Water & Ice Pokemon'
        },
        {
          name:'Ditto',
          id: 'p11',
          type : 'Transform Pokemon'
        },
        {
          name:'Mewtwo',
          id: 'p12',
          type : 'Psychic Pokemon'
        }
     ]
    }
  }

  // componentDidMount(){
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(response => response.json())
  //   .then(users => this.setState({monster : users}));
  // }

  render(){

    const {monster, seachField, pokemon} = this.state;

    const filteredMonsters = pokemon.filter(pokemon => pokemon.name.toLowerCase()
    .includes(seachField.toLowerCase()));

    return (
      <div className="App">
        <h1>POKEMON ROLODEX</h1>
        <SearchBox
        placeholder="Search Pokemons" 
        handleChange={e => 
         this.setState({seachField : e.target.value})
          }/>
        <CardList monster={filteredMonsters}>
        </CardList>
        <br></br>
      </div>
    );
  }

}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           <h1>Hello Medhansh</h1>
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
