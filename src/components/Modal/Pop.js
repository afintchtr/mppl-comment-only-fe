import React, { useState } from "react";
import PropTypes from "prop-types";

const Pop = (props) => {
  const fadeAnimate = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 0.7,
    },
    exit: {
      opacity: 0,
    },
    transition: {
      type: "tween",
      delay: 0,
      duration: 0.3,
      ease: [0.44, 0, 0.56, 1],
    },
  };
  const slideUpAnimate = {
    initial: {
      bottom: "-400px",
      opacity: 0,
    },
    animate: {
      bottom: 0,
      opacity: 1,
    },
    exit: {
      bottom: "-400px",
      opacity: 0,
    },
    transition: {
      type: "tween",
      delay: 0,
      duration: 0.3,
      ease: [0.44, 0, 0.56, 1],
    },
  };
  return (
    props.isShow && (
      <div className="modal--center">
        <div className="modal__content">{props.children}</div>
        <div className="modal__backdrop" onClick={props.onClose}></div>
      </div>
    )
  );
};

Pop.propTypes = {
  isShow: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Pop;
