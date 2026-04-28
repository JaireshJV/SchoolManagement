import React from "react";
import { Drawer } from "antd";
import { createStaticStyles } from "antd-style";

/* ---------- Styles ---------- */

const classNames = createStaticStyles(({ css }) => ({
  container: css`
    border-radius: 10px;
    padding: 10px;
  `,
}));

const maskStyle = {
  backgroundImage:
    "linear-gradient(to top, #18181b 0, rgba(21,21,22,0.2) 100%)",
};

const stylesFn = (info) => {
  if (info.props.footer) {
    return {
      header: { padding: 16 },
      body: { padding: 16 },
      footer: {
        padding: "16px 10px",
        backgroundColor: "#fafafa",
      },
    };
  }
  return {};
};

/* ---------- Component ---------- */

const CustomDrawer = ({
  open,
  onClose,
  title,
  footer = null,
  children,
  height,
  placement = "right",
  drawerSize = 500, // 👈 numeric size
  useFunctionStyles = false,
  maskBlur = false,
  ...rest
}) => {

  // ✅ decide width/height automatically
  const dimensionProps =
    placement === "left" || placement === "right"
      ? { width: drawerSize }
      : { height: drawerSize };

  return (
    <Drawer
      open={open}
      onClose={onClose}
      title={title}
      footer={footer}
      placement={placement}
      classNames={classNames}
      styles={useFunctionStyles ? stylesFn : { mask: maskStyle }}
      mask={maskBlur ? { enabled: true, blur: true } : undefined}
      {...dimensionProps}
      {...rest}
    >
      {children}
    </Drawer>
  );
};

export default CustomDrawer;