import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
//import { DecAction, IncAction } from './actions';  // with actions

// function App({local_count,DecAction, IncAction }) {   //with actions

function App({local_count,dispatch }) {
console.log(local_count)
const IncAction=()=>{
  dispatch({type:'INCREMENT'})
}
const DecAction=()=>{
  dispatch({type:'DECREMENT'})
}

  
  return (
    <div className="App">
      <h1>Conter Application</h1>
      <h1>{local_count}</h1>
      <button onClick={IncAction} >
        Increment
      </button>
      <button onClick={DecAction}>
        Decrement
      </button>
    </div>
  );
}

const mapStateToProps=state=>({
local_count:state
})


//export default connect(mapStateToProps,{ DecAction, IncAction })(App); //with actions
export default connect(mapStateToProps)(App);