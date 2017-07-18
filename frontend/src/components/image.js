import React, { Component } from 'react';
import classNames from 'classnames';

class Brand extends Component {


    constructor(props) {
        super(props)

        this.state = {
            isLoaded: false
        }

        this.loaded = this.loaded.bind(this)

    }

    loaded() {

        this.setState({
            isLoaded: true
        })

    }


    render() {

        const { src, title } = this.props

        let imgClass = classNames({
            'loaded': this.state.isLoaded,
        });

        return (
            <img src={src} alt={title} onLoad={this.loaded} className={imgClass} />
        )
    }
}

export default Brand;
