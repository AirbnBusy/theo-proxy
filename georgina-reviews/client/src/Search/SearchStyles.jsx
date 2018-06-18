import styled from 'styled-components';

const Block = styled.div`
  padding-top: 20px;
  display: block;
  width: 100%;
  height: 2.15em;
  border-radius: 3px;
`;
const Border = styled.div`
  border-width: 1px 
  border-style: solid;
  border-color: #DBDBDB;
  border-radius: 2px;
  background-color: #ffffff;
  margin-bottom: 8px;
  position: relative;
  z-index: 0;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: normal;
  padding-top: 0px;
  padding-bottom: 0px;
  color: #484848;
  display: block;
  width: 45%;
  float: right;
  height: 2em;
`;
const IconBox = styled.div`
  float:left;
`;

const Icon = styled.div`
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: normal;
  padding-top: 7px;
  padding-bottom: 0px;
  color: #484848;
  padding-left: 8px;
`;
const MagnifyingGlass = styled.svg`
  height:1em;
  width:1em;
  display:block;
  fill:currentColor;
`;
const SearchBarWrapper = styled.div`
  overflow: hidden;
  position: relative;
  padding-top: 7px;
  padding-bottom: 0px;
  padding-left:4px;
`;
const SearchBar = styled.input`
  background-color: transparent;
  border: 0px;
  width: 100%;
  font-family: Roboto,Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: normal;
  padding-top: 0px;
  padding-right: 10px;
  padding-bottom: 0px;
  color: #484848;
  font-weight: 600;
  outline: none;
    
`;

module.exports = {
  Block,
  Border,
  IconBox,
  Icon,
  MagnifyingGlass,
  SearchBarWrapper,
  SearchBar,
};
