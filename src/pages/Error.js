import { NavLink } from 'react-router-dom';

const Error = () =>{
    return (
        <div>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
        
            <NavLink to="/">Back to homepage</NavLink>
        </div>
    )
};

export default Error;