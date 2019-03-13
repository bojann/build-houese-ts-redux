import React from "react";

const layout = (props: { children: React.ReactNode }) => {
  return (
    <>
      navigation
      {props.children}
    </>
  );
};

export default layout;
