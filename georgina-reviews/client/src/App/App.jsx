import React from 'react';
import axios from 'axios';
import Header from '../Header/header';
import Categories from '../Categories/categories';
import Reviews from '../Reviews/reviews';
import Pagination from '../Pagination/pagination';
import helper from '../helperFunctions';
import SearchDetails from '../SearchDetails/searchDetails';
import { Container } from './AppStyles';

class AppReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listingData: null,
      avgRating: 0,
      filteredData: [],
      searched: false,
      currentPage: 1,
    };
    this.handleSearchResults = this.handleSearchResults.bind(this);
    this.changeSearchStatus = this.changeSearchStatus.bind(this);
    this.removeFilteredSearch = this.removeFilteredSearch.bind(this);
    this.changeCurrentPage = this.changeCurrentPage.bind(this);
    this.substractFromCurrentPage = this.substractFromCurrentPage.bind(this);
    this.addToCurrentPage = this.addToCurrentPage.bind(this);
  }

  componentDidMount() {
    this.receiveData();
  }

  changeCurrentPage(value) {
    const number = Number(value);
    if (number <= Math.ceil(this.state.filteredData.length / 7)) {
      this.setState({
        currentPage: number,
      });
    }
  }

  addToCurrentPage() {
    let activePage = this.state.currentPage;
    activePage += 1;
    this.setState({
      currentPage: activePage,
    });
  }

  substractFromCurrentPage() {
    let activePage = this.state.currentPage;
    activePage -= 1;
    this.setState({
      currentPage: activePage,
    });
  }

  receiveData() {
    axios.defaults.baseURL = 'http://localhost:3002';
    const self = this;
    const id = document.location.href.slice(31, 35);
    axios.get(`/api/listings/${id}/reviews`)
      .then((response) => {
        self.setState({
          listingData: response.data,
          avgRating: helper.getAvgRating(response.data),
          filteredData: response.data,
          value: null,
        });
      })
      .catch((error) => {
        console.log('georgina did not get her DATA', error.message);
      });
  }

  changeSearchStatus() {
    if (!this.state.searched) {
      this.setState({
        searched: true,
      });
    }
  }

  handleSearchResults(currentValue) {
    const data = this.state.listingData;
    const currentFilteredData = [];
    data.forEach((listing) => {
      if (listing.review.includes(currentValue)) {
        currentFilteredData.push(listing);
      }
    });
    this.setState({
      filteredData: currentFilteredData,
      value: currentValue,
    });
  }

  removeFilteredSearch() {
    const allData = this.state.listingData;
    this.setState({
      filteredData: allData,
      searched: false,
    });
  }

  render() {
    if (this.state.listingData) {
      return (
        <Container>
          <Header
            handleSearchResults={this.handleSearchResults}
            changeSearchStatus={this.changeSearchStatus}
            listingData={this.state.listingData}
            avgRating={this.state.avgRating}
          />
          {this.state.searched ?
            <SearchDetails
              removeFilteredSearch={this.removeFilteredSearch}
              filteredData={this.state.filteredData}
              value={this.state.value}
            />
            : <Categories listingData={this.state.listingData} />}
          <Reviews
            filteredData={this.state.filteredData}
            currentPage={this.state.currentPage}
          />
          <Pagination
            changeCurrentPage={this.changeCurrentPage}
            filteredData={this.state.filteredData}
            currentPage={this.state.currentPage}
            addToCurrentPage={this.addToCurrentPage}
            substractFromCurrentPage={this.substractFromCurrentPage}
          />
        </Container>
      );
    }
    return null;
  }
}

export default AppReviews;

