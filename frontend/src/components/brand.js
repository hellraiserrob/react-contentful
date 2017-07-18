import React, { Component } from 'react';

import Image from './image'

class Brand extends Component {

    render() {

        const { brand } = this.props

        return (
            <div className="brand">

                <h4>{brand.fields.name}</h4>

                {brand.fields.logo &&
                    <div>
                        <Image src={brand.fields.logo.fields.file.url} alt={brand.fields.logo.fields.title} />
                    </div>
                }

            </div>
        )
    }
}

export default Brand;
