import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

const API = 'http://localhost:3000/stocks'
class MainContainer extends Component {
  state ={
    allStocks: [],
    portfolios: [],
    filterTerm: 'All',
    sortTerm: ''
  }
  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(stocks => {
      this.setState({
        allStocks: stocks
      })
    })
  }

  buyStock = (stock) => {
    this.setState({
      portfolios: [...this.state.portfolios,stock]
    })
  }

  removeStock = (stock) => {
    let index = this.state.portfolios.indexOf(stock)
    let copyPortfolio = [...this.state.portfolios]
    copyPortfolio.splice(index, 1)
    this.setState({
      portfolios: copyPortfolio
    })
  }

  setFilterTerm=(term) => {
    this.setState({
      filterTerm: term
    })

  }

  setSortTerm = (term) => {
    this.setState ({
      sortTerm: term
    })
  }

  stocksToRender = () => {
    let copiedStocks = [...this.state.allStocks]
    if(this.state.filterTerm === 'All'){
      copiedStocks = [...this.state.allStocks]
    }
    else {
      copiedStocks =  this.state.allStocks.filter(stock => stock.type === this.state.filterTerm)
    }
    if(this.state.sortTerm === "Price"){
      copiedStocks.sort((stockA, stockB) => {
        return stockA.price-stockB.price
      })
    }
    else if(this.state.sortTerm === "Alphabetically"){
      copiedStocks.sort((stockA,stockB) => {
        return stockA.name.localeCompare(stockB.name)
      })
    }

    return copiedStocks
  }

  render() {
    // console.log(this.state.allStocks);
    return (
      <div>
        <SearchBar setFilterTerm={this.setFilterTerm}
          term ={this.state.filterTerm}
          setSortTerm = {this.setSortTerm}
          sortTerm = {this.state.sortTerm}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.stocksToRender()}
                buyStock={this.buyStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolios={this.state.portfolios}
                removeStock={this.removeStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
