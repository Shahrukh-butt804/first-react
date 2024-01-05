import logo from './logo.svg';
import './App.css';
import { click } from '@testing-library/user-event/dist/click';

function App() {

  function todo(){
    var NewDate =new Date();
    var date= NewDate.toDateString();
    var time= NewDate.toLocaleString([],{hour:'2-digit', minute: "2-digit" , second:"2-digit"});
  

    var value=document.getElementById("inputt").value
    document.getElementById("here").innerHTML+=`<li><span class=check  onClick={marked.this}><i class="fa-solid fa-check"></i></span>${value}<span class=icon onClick={rmv.this}><i class="fa fa-trash" aria-hidden="true"></i></span><span class=icon onClick="edit(this)"><i class="fa fa-edit" aria-hidden="true"></i></span><br>${time}, ${date}</li> `
  }

  return (

  


    <>
        <h1 className='h1'>TODO LIST</h1>
        <div className='btn-div'>
        <button className='btn1'  id='btn1' onClick={todo}>Add Task</button>
        <button className='btn2'>All</button>
        <input className='input' id='inputt' type='text' placeholder='Enter Your TODOS Here'></input>
        </div>
        <div className='todos'>
        <ul id='here'></ul>
        </div>
    </>















    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Welcome To My First<code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}



















export default App;
