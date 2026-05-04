import React from "react";
import { Breadcrumb, Flex, Progress } from "antd";

const FeesCollectionProgress = () => (
  <Flex gap="middle" vertical>

    {/* Row 1 */}
    <div style={styles.row}>
      <p style={styles.label}>Collected</p>
      <Progress percent={72} strokeColor="#16a34a" style={styles.progress} />
    </div>

    {/* Row 2 */}
    <div style={styles.row}>
      <p style={styles.label}>Pending</p>
      <Progress percent={48} strokeColor="red" style={styles.progress} />
    </div>

    {/* Row 3 */}
    <div style={styles.row}>
      <p style={styles.label}>Waiver</p>
      <Progress percent={28} strokeColor="#e6da00" style={styles.progress} />
    </div>
<Breadcrumb />
  </Flex>
);

export default FeesCollectionProgress;

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