import * as React from 'react';
import { render } from 'react-dom';
import store from './store';
import { add, reduce, reset } from './action';
import { connect, Provider } from 'react-redux';

class Counter extends React.Component {
  handleClick(type) {
    console.log(this.props, type);
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

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
