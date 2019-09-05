import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    const stockData = this.props.stocks.map(stock =>{
      return <Stock stock={stock}
         key={stock.id}
         handleClick={this.props.buyStock}
         />
    })
    return (
      <div>
        <h2>Stocks</h2>
        {
          stockData
        }
      </div>
    );
}

}

export default StockContainer;
