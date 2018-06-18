import React from 'react';
import PropTypes from 'prop-types';
import helper from '../helperFunctions';
import Search from '../Search/search';
import { HeadWrapper, Row, HeaderDescription, Title, Box, InnerBox, Heading, ReviewsTotal, StarsTotal } from './HeaderStyles';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const stars = helper.convertRatingsToStars(this.props.avgRating);
    return (
      <HeadWrapper>
        <Row>
          <HeaderDescription>
            <Title>
              <Box>
                <InnerBox>
                  <Heading>
                    <ReviewsTotal> {this.props.listingData.length} Reviews</ReviewsTotal>
                    <StarsTotal>
                      <div>
                        {stars.map((star, i) => (
                          <img key={i} src={star} alt="star" />
                        ))}
                      </div>
                    </StarsTotal>
                  </Heading>
                </InnerBox>
              </Box>
            </Title>
          </HeaderDescription>
          <Search
            handleSearchResults={this.props.handleSearchResults}
            changeSearchStatus={this.props.changeSearchStatus}
          />
        </Row>
      </HeadWrapper>
    );
  }
}

export default Header;

Header.propTypes = {
  avgRating: PropTypes.number.isRequired,
  listingData: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleSearchResults: PropTypes.func.isRequired,
  changeSearchStatus: PropTypes.func.isRequired,
};
