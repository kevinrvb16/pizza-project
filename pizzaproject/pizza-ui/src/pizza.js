import { Component } from "react";

class Pizza extends Component {
    render() {
        return (
            <div>
                <div>
                    Sabor: {this.props.sabor}
                </div>
                <div>
                    Foto: <img src={this.props.photo}></img>
                </div>
            </div>
        );
    }
}

export default Pizza;