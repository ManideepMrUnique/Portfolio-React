import Education from './Education';
import Skills from './Skills';
import Projects from './Projects';
import { Route, Switch } from "react-router";
const Details=()=>{
    return (
        <Switch>
        <Route exact path='/'></Route>
        <Route exact path='/Education' component={Education}></Route>
        <Route exact path='/Skills' component={Skills}></Route>
        <Route exact path='/Projects' component={Projects}></Route>
        </Switch>
    );
}
export default Details;