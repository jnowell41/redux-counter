import * as React from "react";
import Counter from "../component/index";
import styles from "./container.module.scss";
class Container extends React.Component {
  render() {
    return (
      <body className={styles.myBody}>
        <Counter />
      </body>
    );
  }
}

export default Container;
