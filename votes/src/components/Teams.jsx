import React from 'react';
import {myTeams} from '../data/data';

class Teams extends React.Component{
    constructor(){
        super()
        this.state = {myTeams:myTeams}
    }
    render(){
        return(<h1>hello</h1>)
    }
}

export default Teams
