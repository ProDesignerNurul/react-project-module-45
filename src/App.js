import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <First name="Nurul Amin" job="teacher" work="Pert Time Work on Market"></First>
      <First name="Nurul Amin" job="teacher" work="Pert Time Work on Market"></First>
      <First name="Nurul Amin" job="teacher" work="Pert Time Work on Market"></First>
    </div>
  );
}
<h4></h4>
function First (props) {
  return (
    <div className='container'> 
      <h1>Name : {props.name}</h1>
      <h3>Work : {props.work}</h3>
      <h3>Job : {props.job}</h3>
    </div>
  )
}

export default App;
