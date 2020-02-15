import React, {Component} from 'react';

class MemeGenerator extends Component {
    constructor(props){
        super(props);
        this.state = {
            topText: '',
            bottomText: '',
            randomImg: 'http://i.imgflip.com/1bij.jpg',
            memesArr: []
        };

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
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
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.memesArr.length);
        const randMemeImg = this.state.memesArr[randNum].url;
        this.setState({ randomImg: randMemeImg});
    }

    render(){
        return (
            <div class="main">
                <form className="meme-form" onSubmit = {this.handleSubmit}>
                    <input type="text" name="topText" placeholder="Top Text" 
                        value={this.state.topText}
                        onChange={this.handleChange} 
                    />

                    <input type="text" name="bottomText" placeholder="Bottom Text" 
                        value={this.state.bottomText}
                        onChange={this.handleChange} 
                    />
                    <button>Random</button>
                </form>
                <div class="meme-container">
                    <img src={this.state.randomImg} alt='Oops, couldnt get the image. Sorry!' />
                    <div className="divtop">
                        <h2 className= "top">{this.state.topText}</h2>
                    </div>
                    <div className="divBottom">
                        <h2 className= "bottom">{this.state.bottomText}</h2>
                    </div>               
                </div>
            </div>
        )
    }
}

export default MemeGenerator;