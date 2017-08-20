import React, { Component } from "react";
import "./MapTypeMenu.css";

class MapTypeMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showMenu: false
        };

        this.setState = this.setState.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState(prevState => {
            return { showMenu: !prevState.showMenu };
        });
    }

    render() {
        console.log(Object.keys(this.props.mapTypes), "mapTypes");
        return (
            <div className="MapTypeMenu">
                <button
                    className="MapTypeMenu--toggle"
                    onClick={this.toggleMenu}
                >
                    &#9776;
                </button>
                <ul
                    className={
                        "MapTypeMenu--list" +
                        (this.state.showMenu ? " show" : "")
                    }
                >
                    {this.props.mapTypes &&
                        Object.keys(this.props.mapTypes).map((type, i) =>
                            <li
                                key={type + "_" + i}
                                onClick={() => {
                                    this.props.toggleMapType(type);
                                    this.toggleMenu();
                                }}
                            >
                                {type}
                            </li>
                        )}
                </ul>
            </div>
        );
    }
}

export default MapTypeMenu;
