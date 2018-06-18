import styled from 'styled-components';

const Box = styled.div`
  border-bottom: 1px solid #DCDCDC;
  padding:12px;
`;
const Description = styled.div`
  padding: 11px;
  float: left;
  font-size: 14px;
`;
const ReturnButton = styled.button`
  padding: 8px;
  float: right; 
  color:#0b888c;
  background-color:transparent;
  border: none;
  font-size:14px;

  &:hover{
   text-decoration: underline;
  };
`;

module.exports = {
  Box,
  Description,
  ReturnButton,
};
