import styled from 'styled-components';

const Box = styled.div`
  border-top: none;
  border-bottom:none;
  padding: 10px;
  background-color:red;
`;
const Page = styled.button`
  width: 35px;
  height: 35px;
  margin: 5px;
  border-radius: 10%;
  color: #0b888c;
  font-size:13px;
  font-weight: bold;
`;
const Arrow = styled.button`
  border: none;
`;

module.exports = {
  Box,
  Page,
  Arrow,
};
