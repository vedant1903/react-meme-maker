import React,{Component} from 'react'

class Canvas extends Component {
    constructor(props) {   
        super(props)
        this.state = {
            imgpath : this.props.img,
        }
    }

    componentDidMount() {
        this.setState({
             
        })

        console.log(this.refs.canva)
        const ctx = this.refs.canva.getContext("2d")
        let imgObj = new Image()
        imgObj.src = this.props.img
        //console.log(imgObj.src)
        imgObj.onload = function(){
            ctx.drawImage(imgObj,0,0,1000,900)
        }

    }

    componentDidUpdate(){
        console.log(this.refs.canva)
        const ctx = this.refs.canva.getContext("2d")
        let imgObj = new Image()
        imgObj.src = this.props.img
        //console.log(imgObj.src)
        imgObj.onload = function(){
            ctx.drawImage(imgObj,0,0,1000,900)
        }
    }


    render(){
        return (
                <canvas id={this.props.msg} ref="canva" width="500" height="500">
                </canvas>        
        )
    }
}

export default Canvas;