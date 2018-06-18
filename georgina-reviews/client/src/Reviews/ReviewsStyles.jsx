import styled from 'styled-components';

const Box = styled.div`
  border-top: none;
  background-color:purple;
`;
const InnerBox = styled.div`
  margin: 0px;
  padding: 0px;
`;
const Avatar = styled.img`
  border-radius: 100%;
  float:left;
  width: 8%;
  margin:1%;
`;
const UserName = styled.div`
  width:87%;
  float:left;
  font-weight: bold;
  text-align: left;
  margin-top: 2px;
  padding-left: 3%;
  font-size: 16px;
`;
const Dated = styled.span`
  width:87%;
  float:left;
  text-align: left;
  margin-bottom:12px;
  padding-left: 3%
`;
const Review = styled.p`
  margin-top: 3%;
  font-family: Roboto,Circular,"Helvetica Neue",Helvetica,Arial,sans-serif;
  text-align:left;
  padding-bottom: 25px;
  border-bottom: 1px solid #DCDCDC;
`;

module.exports = {
  Box,
  InnerBox,
  Avatar,
  UserName,
  Dated,
  Review,
};
