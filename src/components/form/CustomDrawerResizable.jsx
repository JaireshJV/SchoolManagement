import React, { useState, useEffect } from "react";
import { Drawer } from "antd";

const ResizableDrawer = ({
  open,
  onClose,
  title = "Drawer",
  placement = "right",
  initialSize = 300,
  children,
  ...restProps
}) => {
  const [drawerSize, setDrawerSize] = useState(initialSize);

  useEffect(() => {
    setDrawerSize(initialSize);
  }, [initialSize, placement]);

  // decide dimension dynamically
  const dimensionProps =
    placement === "left" || placement === "right"
      ? { width: drawerSize }
      : { height: drawerSize };

  return (
    <Drawer
      title={title}
      placement={placement}
      open={open}
      onClose={onClose}
      key={placement}
      {...dimensionProps}
      resizable={{
        onResize: (newSize) => {
          setDrawerSize(newSize);
        },
      }}
      {...restProps}
    >
      {children}
    </Drawer>
  );
};

export default ResizableDrawer;