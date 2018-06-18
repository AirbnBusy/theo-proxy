import React from 'react';
import PropTypes from 'prop-types';
import { Box, Page, Arrow } from './PaginationStyles';

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstPage: 1,
    };
    this.changeCurrentPageBack = this.changeCurrentPageBack.bind(this);
    this.changeCurrentPage = this.changeCurrentPage.bind(this);
    this.changeCurrentPageToNext = this.changeCurrentPageToNext.bind(this);
  }

  changeCurrentPage(e) {
    this.props.changeCurrentPage(e.target.value);
  }

  changeCurrentPageToNext() {
    this.props.addToCurrentPage();
  }

  changeCurrentPageBack() {
    this.props.substractFromCurrentPage();
  }

  render() {
    if (this.props.filteredData.length > 1) {
      return (
        <Box>
          <div>
            {this.props.currentPage === 1 ? <Arrow /> : <Page onClick={this.changeCurrentPageBack}><img src="././arrowBack.png" alt="star" /></Page> }
            <Page
              value={this.state.firstPage}
              onClick={this.changeCurrentPage}
            >
              {this.state.firstPage}
            </Page>
            <Page value={2} onClick={this.changeCurrentPage}>{2}</Page>
            <Page value={3} onClick={this.changeCurrentPage}>{3}</Page>
            ...
            <Page
              value={Math.ceil(this.props.filteredData.length / 7)}
              onClick={this.changeCurrentPage}
            >
              {Math.ceil(this.props.filteredData.length / 7)}
            </Page>
            <Page onClick={this.changeCurrentPageToNext}><img src="././arrowNext.png" alt="star" /></Page>
          </div>
        </Box>
      );
    }
    return <Box />;
  }
}
export default Pagination;

Pagination.propTypes = {
  changeCurrentPage: PropTypes.func.isRequired,
  addToCurrentPage: PropTypes.func.isRequired,
  substractFromCurrentPage: PropTypes.func.isRequired,
  filteredData: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentPage: PropTypes.number.isRequired,
};
