import { Spinner } from "react-bootstrap";
import { Redirect, Route } from "react-router";
import useAuth from './../hooks/useAuth';

function PrivateRoute(props) {
    
    const {children,...rest}=props;
    const {AllContexts}=useAuth();
    const {user,loading}=AllContexts;
  if(loading){
      <div className="text0-center my-5 py-5"><h1>No Course Selected!</h1></div>
      return (<Spinner  animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>);
  }
    
    return (
      <Route
        {...rest}
        render={({ location }) =>
          user.displayName? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }
  
  export default PrivateRoute;