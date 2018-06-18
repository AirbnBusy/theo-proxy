import styled from 'styled-components';

const HeadWrapper = styled.div`
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #DCDCDC;
  background-color:green;
`;
const Row = styled.div`
  display: flex;
`;
const HeaderDescription = styled.div`
  padding-left: 8px; 
  padding-right: 8px; 
  min-height: 1px; 
  position: relative; 
`;
const Title = styled.div`
  height: 56px;
`;
const Box = styled.div`
  display: table;
  position: relative;
  height: 100%;
  width: 100%;
`;
const InnerBox = styled.div`
  display: table-cell;
  vertical-align: bottom;
`;
const Heading = styled.h4`
  padding-top: 15px;
  margin-bottom: 4px; 
  padding-bottom: 15px;
`;
const ReviewsTotal = styled.span`
  font-size: 25px;
  line-height: 30px;
  letter-spacing: normal;
`;
const StarsTotal = styled.div`
  display: inline-block;
  margin-left: 16px;
`;
module.exports = {
  HeadWrapper,
  Row,
  HeaderDescription,
  Title,
  Box,
  InnerBox,
  Heading,
  ReviewsTotal,
  StarsTotal,
};
