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
  };
  const slideUpAnimate = {
    initial: { right: -100, opacity: 0 },
    animate: { right: 0, opacity: 1 },
    exit: { right: -400, opacity: 0 },
  };
  return (
    <AnimatePresence>
      {props.isShow && (
        <div className="modal--right">
          <motion.div className="modal__content" {...slideUpAnimate}>
            {props.children}
          </motion.div>
          <motion.div
            className="modal__backdrop"
            onClick={props.onClose}
            {...fadeAnimate}
          ></motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

Popup.propTypes = {
  isShow: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Popup;
