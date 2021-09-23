import { Route, Switch } from "react-router";
import { StartPage } from "../StartPage/StartPage";

export function CreateCalculator() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={StartPage}/>
        {/*<Route path='/pp' component={PP}/>*/}
        {/*<Route path='/about' component={About}/>*/}
        {/*<Route path='/contact' component={Contact}/>*/}
        {/*<Route path="/create" component={CreateQuiz}/>*/}
        {/*<Route path="/myquiz" component={MyQuiz}/>*/}
        {/*<Route path="/myresult" component={MyResult}/>*/}
        {/*<Route path="/secondpage" component={SecondPage}/>*/}
        {/*<Route path="/instraction" component={Instradiction}/>*/}
        {/*<Route path="/loadingTest" component={LoadingTestPage}/>*/}
        {/*<Route path='/' component={NotFound}/>*/}
      </Switch>
    </>
  )

}