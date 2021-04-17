import {BrowserRouter,Switch,Route, Redirect} from 'react-router-dom'
import Nav from './Components/nav';
import Registeraion from './Components/registeraion';
// import StudentList from './Components/studentList';
import StudentDetailes from './Components/studentDetailes';
import Student from './Components/Student';

function App() {
  return (
    <BrowserRouter>
        <Nav/>
        <Switch>
          <Route path="/registeraion" component={Registeraion}></Route>
          <Route path="/student/:username" component={StudentDetailes} />
          <Route path="/student" component={Student}></Route>
          {/* <Route path="*" component={Error}></Route>           */}
          <Redirect from="/" to="/registeraion"></Redirect>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
