import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

const Popup = (props) => {
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
    <div className="sticky--bottom">
      <AnimatePresence>
        {props.isShow && (
          <motion.div className="modal" {...slideUpAnimate}>
            {props.children}
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {props.isShow && (
          <motion.div
            className="modal__backdrop"
            onClick={props.onClose}
            {...fadeAnimate}
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

Popup.propTypes = {
  isShow: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Popup;
