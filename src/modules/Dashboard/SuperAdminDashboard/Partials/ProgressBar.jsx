import React from "react";
import { Flex, Progress } from "antd";

const ProgressBar = () => (
  <Flex gap="middle" vertical>

    {/* Row 1 */}
    <div style={styles.row}>
      <p style={styles.label}>NEET & JEE</p>
      <Progress percent={72} strokeColor="#16a34a" style={styles.progress} />
    </div>

    {/* Row 2 */}
    <div style={styles.row}>
      <p style={styles.label}>Accounting</p>
      <Progress percent={48} strokeColor="#f59e0b" style={styles.progress} />
    </div>

    {/* Row 3 */}
    <div style={styles.row}>
      <p style={styles.label}>Air Hostess</p>
      <Progress percent={28} strokeColor="#4d1dddff" style={styles.progress} />
    </div>

  </Flex>
);

export default ProgressBar;

const styles = {
  row: {
    display: "flex",
    alignItems: "center",
  },
  label: {
    minWidth: "80px", // keeps text aligned in same line
    margin: 0
  },
  progress: {
    flex: 1 // makes bar take remaining space
  }
};