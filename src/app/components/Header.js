import React, {PropTypes, Component} from 'react';
import TodoTextInput from './TodoTextInput';

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave(text) {
    if (text.length !== 0) {
      this.props.addTodo(text);
    }
  }

  render() {
    return (
      <header className="header">
        <h1>To do List</h1>
        <TodoTextInput
          newTodo
          onSave={this.handleSave}
          placeholdery="What needs to be done?"
          />
      </header>
    );
  }
}

Header.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default Header;
