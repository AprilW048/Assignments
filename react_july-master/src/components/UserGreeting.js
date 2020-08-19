import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:false
        }
    }
    
    render() {

        return this.state.isLoggedIn && <div>User Logged In</div>

        // return(
        //     this.state.isLoggedIn ?
        //     <div>User Logged In</div> : 
        //     <div>User has not Logged In</div>
        // )



        // let message 
        // if(this.state.isLoggedIn){
        //     message =  <div>User Logged In</div>
        // }else{
        //     message = <div>User has not Logged In</div>
        // }

        // return <div>{message}</div>

        // if(this.state.isLoggedIn)
        // {
        //     return(
        //         <div>User Logged In</div>
        //     )
        // }else{
        //     return (
        //         <div>
        //             <div>User has not Logged In</div>
        //         </div>
        //     )
        // }
        
    }
}

export default UserGreeting
