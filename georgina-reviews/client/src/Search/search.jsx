import React from 'react';
import { Block, Border, IconBox, Icon, MagnifyingGlass, SearchBarWrapper, SearchBar } from './SearchStyles';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  handleKeyPress(e) {
    if (e.keyCode === 13) {
      this.props.handleSearchResults(this.state.value);
      this.props.changeSearchStatus();
      this.setState({
        value: '',
      });
    }
  }

  render() {
    return (
      <Block>
        <Border>
          <IconBox>
            <Icon>
              <MagnifyingGlass viewBox="0 0 24 24">
                <path d="m10.4 18.2c-4.2-.6-7.2-4.5-6.6-8.8.6-4.2 4.5-7.2 8.8-6.6 4.2.6 7.2 4.5 6.6 8.8-.6 4.2-4.6 7.2-8.8 6.6m12.6 3.8-5-5c1.4-1.4 2.3-3.1 2.6-5.2.7-5.1-2.8-9.7-7.8-10.5-5-.7-9.7 2.8-10.5 7.9-.7 5.1 2.8 9.7 7.8 10.5 2.5.4 4.9-.3 6.7-1.7v.1l5 5c .3.3.8.3 1.1 0s .4-.8.1-1.1" fillRule="evenodd" />
              </MagnifyingGlass>
            </Icon>
          </IconBox>
          <SearchBarWrapper>
            <SearchBar type="text" placeholder="Search reviews" value={this.state.value} onChange={this.handleChange} onKeyDown={this.handleKeyPress} />
          </SearchBarWrapper>
        </Border>
      </Block>
    );
  }
}

export default Search;
