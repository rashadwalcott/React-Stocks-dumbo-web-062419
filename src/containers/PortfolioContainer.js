import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    const portfolioData = this.props.portfolios.map((stock,index) =>{
      return <Stock stock={stock}
         key={`${stock.name} - ${index}`}
         handleClick={this.props.removeStock}
         />
    })
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            portfolioData
          }
      </div>
    );
  }

}

export default PortfolioContainer;
