import * as React from "react";
import styles from "./counter.module.scss";
import { connect } from "react-redux";

class Counter extends React.Component {
  increment = () => {
    this.props.dispatch({
      type: "INCREMENT"
    });
    console.log(this.props.output);
  };
  decrement = () => {
    this.props.dispatch({
      type: "DECREMENT"
    });
    console.log(this.props.output);
  };
  render() {
    return (
      <section className={styles.counterContainer}>
        <div>
          <p className={styles.LeNumber}>{this.props.output}</p>
        </div>
        <div className={styles.buttons}>
          <div className={styles.increase} onClick={this.increment}>
            <span>Increment</span>
          </div>
          <div className={styles.decrease} onClick={this.decrement}>
            <span>Decrement</span>
          </div>
        </div>
        <p className={styles.comment}>
          A simple application where redux is being utilised to manage the
          output above.
        </p>
      </section>
    );
  }
}
const mapStateToProps = state => ({
  output: state.output
});
export default connect(mapStateToProps)(Counter);
