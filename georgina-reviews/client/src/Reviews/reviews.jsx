import React from 'react';
import PropTypes from 'prop-types';
import helper from '../helperFunctions';
import { Box, InnerBox, Avatar, UserName, Dated, Review } from './ReviewsStyles';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const data =
      this.props.filteredData.slice(this.props.currentPage - 1, this.props.currentPage + 6);
    return (
      <Box>
        {data.map((review, i) => (
          <InnerBox key={i}>
            <div>
              <Avatar src={review.photo} />
            </div>
            <div>
              <UserName>{review.user_name}</UserName>
              <Dated>{helper.changeDateFormat(review.review_date)}</Dated>
            </div>
            <div>
              <Review>{review.review}</Review>
            </div>
          </InnerBox>
        ))}
      </Box>
    );
  }
}

export default Reviews;

Reviews.propTypes = {
  filteredData: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentPage: PropTypes.number.isRequired,
};
