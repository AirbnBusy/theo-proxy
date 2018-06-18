import React from 'react';
import PropTypes from 'prop-types';
import helper from '../helperFunctions';
import { Box, InnerBox, CategoriesLeftGroup, CategoriesRightGroup, Name, Stars } from './CategoriesStyles';

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const categories1 = helper.getAvgRatingPerCategory(this.props.listingData).slice(0, 3);
    const categories2 = helper.getAvgRatingPerCategory(this.props.listingData).slice(3);
    return (
      <Box>
        <InnerBox>
          <CategoriesLeftGroup>
            {categories1.map((category, i) => (
              <div key={i}>
                <Name>{category.name}</Name>
                <Stars>
                  <img src={category.rating[0]} alt="star" />
                  <img src={category.rating[1]} alt="star" />
                  <img src={category.rating[2]} alt="star" />
                  <img src={category.rating[3]} alt="star" />
                  <img src={category.rating[4]} alt="star" />
                </Stars>
              </div>
             ))}
          </CategoriesLeftGroup>
          <CategoriesRightGroup>
            {categories2.map((category, i) => (
              <div key={i}>
                <Name>{category.name}</Name>
                <Stars>
                  <img src={category.rating[0]} alt="star" />
                  <img src={category.rating[1]} alt="star" />
                  <img src={category.rating[2]} alt="star" />
                  <img src={category.rating[3]} alt="star" />
                  <img src={category.rating[4]} alt="star" />
                </Stars>
              </div>
           ))}
          </CategoriesRightGroup>
        </InnerBox>
      </Box>
    );
  }
}


export default Categories;

Categories.propTypes = {
  listingData: PropTypes.arrayOf(PropTypes.object).isRequired,
};
