import styled from 'styled-components';

const Box = styled.div`
  margin-left: 0px;
  margin-right: 0px;
  padding-top: 0px;
  padding-bottom: 12px;
  border-bottom: 1px solid #DCDCDC;
  background-color:teal;
`;
const InnerBox = styled.div`
  padding-left: 8px;
  padding-right: 8px;
  min-height: 1px;
  position: relative;
`;
const CategoriesLeftGroup = styled.div`
  width:45%;
  float:left;
  margin-right:10%;
  color: #484848;
    font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
    margin: 0px;
    word-wrap: break-word;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: normal;
    font-weight: normal;
    display: inline;
    text-align: left;
    padding-top: 12px;
`;
const CategoriesRightGroup = styled.div`
  width:45%;
  float:right;
  color: #484848;
    font-family: Roboto,Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif ;
    margin: 0px;
    word-wrap: break-word;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: normal;
    font-weight: normal;
    display: inline;
    padding-top: 12px;
`;
const Name = styled.div`
  text-align: left;
  width:50%;
  float:left;
  margin-bottom:5px;
`;
const Stars = styled.div`
  margin-bottom: 12px;
  text-align: right;
  width:50%;
  float:right;
`;

module.exports = {
  Box,
  InnerBox,
  CategoriesLeftGroup,
  CategoriesRightGroup,
  Name,
  Stars,
};
