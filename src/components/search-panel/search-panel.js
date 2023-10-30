import {Component} from "react";

import './search-panel.css';
class SearchPanel extends Component{
    constructor(props) {
        super(props);
        this.state = {
            letter: ''
        }
    }

    onUpdateSearch = (e) => {
        const letter = e.target.value;
        this.setState({letter});
        this.props.onUpdateSearch(letter);
    }
  render() {
      return(
          <input
              type="text"
              className="form-control search-input"
              placeholder="найти сотрудника"
              value={this.state.letter}
              onChange={this.onUpdateSearch}
          />
      )
  }
}
export default SearchPanel;