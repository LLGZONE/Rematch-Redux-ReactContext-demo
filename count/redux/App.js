import * as React from 'react';
import { add, reduce, reset } from './action';
import { connect } from 'react-redux';

class Counter extends React.Component {
  handleClick(type) {
    this.props[type]();
  }

  render() {
    return (
      <div>
        <div>{this.props.count}</div>
        <button onClick={() => this.handleClick('add')}>+</button>
        <button onClick={() => this.handleClick('reduce')}>-</button>
        <button onClick={() => this.handleClick('reset')}>reset</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.count
  };
};

const App = connect(
  mapStateToProps,
  {
    add,
    reduce,
    reset
  }
)(Counter);

export default App;
