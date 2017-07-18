import React, { Component } from 'react';

import Brand from './components/brand'

class App extends Component {

  constructor(props) {

    super(props)

    this.state = {
      brands: [],
      isLoading: false,
      order: ''
    }

    this.updateBrands = this.updateBrands.bind(this)
    this.setorder = this.setorder.bind(this)

  }


  componentDidMount() {

    this.updateBrands()
  }


  setorder(e, order){

    e.preventDefault()

    this.setState({
      order: order
    }, () => {
      this.updateBrands()
    })


  }
  
  updateBrands() {
    
    this.setState({
      isLoading: true
    })

    let url = `/api/brands/?order=${this.state.order}`


    fetch(url)
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Bad response from server")
        }
        return response.json()
      })
      .then((data) => {

        this.setState({
          brands: data.brands,
          isLoading: false
        })

      });

  }


  render() {
    return (
      <div className="App">

        <h1>Brands</h1>

        <nav>
          <ul>
            <li>
              <a href="jsx-a11y/href-no-hash" onClick={(e) => this.setorder(e, 'fields.name')}>Name</a>
            </li>
            <li>
              <a href="jsx-a11y/href-no-hash" onClick={(e) => this.setorder(e, 'sys.createdAt')}>Created</a>
            </li>
          </ul>
        </nav>


        {this.state.isLoading &&
          <div className="loading">Loading</div>
        }

        {this.state.brands.map((brand, index) => {
          return <Brand key={brand.sys.id} brand={brand} />
        })}

      </div>
    );
  }
}

export default App;
