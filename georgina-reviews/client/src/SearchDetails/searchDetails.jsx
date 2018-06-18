import React from 'react';
import PropTypes from 'prop-types';
import { Box, Description, ReturnButton } from './SearchDetailsStyles';

class SearchDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.undoFilteredSearch = this.undoFilteredSearch.bind(this);
  }

  undoFilteredSearch() {
    this.props.removeFilteredSearch();
  }

  render() {
    return (
      <Box>
        <Description>
          {this.props.filteredData.length} guests have mentioned "
          <strong>{this.props.value}</strong>"
        </Description>
        <div>
          <ReturnButton onClick={this.undoFilteredSearch}>Back to all reviews</ReturnButton>
        </div>
      </Box>
    );
  }
}

export default SearchDetails;

SearchDetails.propTypes = {
  removeFilteredSearch: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  filteredData: PropTypes.arrayOf(PropTypes.object).isRequired,
};
