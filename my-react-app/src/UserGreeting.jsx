import PropTypes from 'prop-types';

function UserGreeting(props){
    const welcomeMessage =  <h2 className="welcome-message"> 
                            Welcome {props.username}!! 
                            </h2>

    const loginPrompt =     <h2 className="login-prompt">
                             Please Log in to continue 
                            </h2>

    if(props.isLoggedIn){
        return(welcomeMessage);
    }
    else{
        return(loginPrompt);
    }
}

UserGreeting.proptypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
}

UserGreeting.defaultProps = {
    isLoggedIn: false
}


export default UserGreeting