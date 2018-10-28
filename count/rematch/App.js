import * as React from 'react';
import { render } from 'react-dom';
import store from './store';
import { connect, Provider } from 'react-redux';

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

const mapDispatchToProps = dispatch => ({
  add: () => dispatch.count.add(1),
  reduce: () => dispatch.count.reduce(1),
  reset: dispatch.count.reset
});

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
