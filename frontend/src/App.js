import React, { Component } from 'react';

class App extends Component {

  constructor(props) {

    super(props)

    this.state = {
      brands: [],
      isLoading: false
    }

  }


  componentDidMount() {

    console.log('componentDidMount')

    this.setState({
      isLoading: true
    })


    let url = '/api/brands/'

    fetch(url)
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then((data) => {

        console.log(data)

        this.setState({ 
          brands: data.brands,
          isLoading: false
        });
      });


  }


  render() {
    return (
      <div className="App">

        <h1>Brands</h1>

        {this.state.isLoading &&
          <div>loading...</div>
        }

        {this.state.brands.map((brand, index) => {
          return <div className="brand" key={brand.sys.id}>
            {brand.fields.name}
          </div>
        })}

      </div>
    );
  }
}

export default App;
