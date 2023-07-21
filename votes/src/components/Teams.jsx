import React from 'react';
import {myTeams} from '../data/data';
import Team from './Team';

class Teams extends React.Component{
    constructor(){
        super()
        this.state = {myTeams:myTeams}
    }

    addANewVote = (index) =>{

        const newState = [...this.state.myTeams]
        newState[index].votes++
        this.setState({myTeams:newState})

    }

    render(){
        return(
     <div className='container'>    
         {
            this.state.myTeams.map((team,index)=>{
                return(
                   <Team team={team} 
                   index={index} 
                   key={team.name}
                   addANewVote = {this.addANewVote}
                   />
                )
            })
         }
    
        </div>
        )
     
    }
}

export default Teams
