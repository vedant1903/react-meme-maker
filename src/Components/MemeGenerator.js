import React, {Component} from 'react';

class MemeGenerator extends Component {
    constructor(props){
        super(props);
        this.state = {
            topText: '',
            bottomText: '',
            randomImg: 'http://i.imgflip.com/1bij.jpg'
        };
    }
    render(){
        return <h2>Ready to roll?</h2>;
    }
}

export default MemeGenerator;