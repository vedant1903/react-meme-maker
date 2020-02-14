import React, {Component} from 'react';

class MemeGenerator extends Component {
    constructor(props){
        super(props);
        this.state = {
            topText: '',
            bottomText: '',
            randomImg: 'http://i.imgflip.com/1bij.jpg'
        };

        this.handleChange = this.handleChange.bind(this)
    }



    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                console.log(memes[0])
                this.setState({memesArr: memes})
            })
    }

    handleChange(event) {

    }

    render(){
        return (
            <div>
                <form className="meme-form">
                    <input type="text" name="topText" placeholder="Top Text" 
                        value={this.state.topText}
                        onChange={this.handleChange} 
                    />

                    <input type="text" name="bottomText" placeholder="Bottom Text" 
                        value={this.state.topText}
                        onChange={this.handleChange} 
                    />
                    <button>Generate</button>
                </form>
            </div>
        )
    }
}

export default MemeGenerator;