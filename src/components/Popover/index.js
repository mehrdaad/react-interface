import React, { Fragment, PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { borderRadius } from 'styled-system'
import Portal from '../Portal'
import calculatePosition from "./utils";
import styles from "./popover.css.js"
import Show from 'react-show'

class Popover extends React.Component {
  state = {
    isOpen: this.props.defaultOpen
  };

  constructor(props) {
    super(props);
    this.setTriggerRef = r => (this.TriggerEl = r);
    this.setContentRef = r => (this.ContentEl = r);
    this.setArrowRef = r => (this.ArrowEl = r);
    this.setHelperRef = r => (this.HelperEl = r);
    this.timeOut = 0;
  }

  componentDidMount() {
    if (this.props.defaultOpen) this.setPosition();
  }

  componentWillUnmount() {
    clearTimeout(this.timeOut);
  }

  togglePopup = () => {
    if (this.state.isOpen) this.closePopup();
    else this.openPopup();
  };
  openPopup = () => {
    if (this.state.isOpen) return;
    this.setState({ isOpen: true }, () => {
      this.setPosition();
      this.props.onOpen();
    });
  };
  closePopup = () => {
    if (!this.state.isOpen) return;
    this.setState({ isOpen: false }, () => {
      this.props.onClose();
    });
  };
  onMouseEnter = () => {
    clearTimeout(this.timeOut);
    const { mouseEnterDelay } = this.props;
    this.timeOut = setTimeout(() => this.openPopup(), mouseEnterDelay);
  };
  onMouseLeave = () => {
    clearTimeout(this.timeOut);
    const { mouseLeaveDelay } = this.props;
    this.timeOut = setTimeout(() => this.closePopup(), mouseLeaveDelay);
  };

  setPosition = () => {
    const { arrow, position, offset } = this.props;
    const helper = this.HelperEl.getBoundingClientRect();
    const trigger = this.TriggerEl.getBoundingClientRect();
    const content = this.ContentEl.getBoundingClientRect();
    const cords = calculatePosition(trigger, content, position, arrow, offset);
    this.ContentEl.style.top = cords.top - helper.top + "px";
    this.ContentEl.style.left = cords.left - helper.left + "px";
    if (arrow) {
      this.ArrowEl.style["transform"] = cords.transform;
      this.ArrowEl.style["-ms-transform"] = cords.transform;
      this.ArrowEl.style["-webkit-transform"] = cords.transform;
      this.ArrowEl.style.top = cords.arrowTop;
      this.ArrowEl.style.left = cords.arrowLeft;
    }
    if (
      this.TriggerEl.style.position == "static" ||
      this.TriggerEl.style.position == ""
    )
      this.TriggerEl.style.position = "relative";
  };

  addWarperAction = () => {
    const { contentStyle, className, menu, on, fullWidth } = this.props;
    const popupContentStyle = styles.popupContent.tooltip;

    if (fullWidth) {
      popupContentStyle.width = this.TriggerEl.getBoundingClientRect().width
    }

    const childrenElementProps = {
      className: `ri-popup-content ${className}`,
      style: Object.assign({}, popupContentStyle, contentStyle),
      ref: this.setContentRef,
      onClick: e => {
        e.stopPropagation();
      }
    };
    if (on.includes("hover")) {
      childrenElementProps.onMouseEnter = this.onMouseEnter;
      childrenElementProps.onMouseLeave = this.onMouseLeave;
    }
    return childrenElementProps;
  };

  renderTrigger = () => {
    const triggerProps = {
      key: "T",
      style: styles.trigger,
    };
    const { on, trigger } = this.props;
    triggerProps.ref = this.setTriggerRef;
    const onAsArray = Array.isArray(on) ? on : [on];
    for (let i = 0, len = onAsArray.length; i < len; i++) {
      switch (onAsArray[i]) {
        case "click":
          triggerProps.onClick = this.togglePopup;
          break;
        case "hover":
          triggerProps.onMouseEnter = this.onMouseEnter;
          triggerProps.onMouseLeave = this.onMouseLeave;
        case "focus":
          triggerProps.onFocus = this.onMouseEnter;
          break;
      }
    }

    if (typeof trigger === "function")
      return React.cloneElement(trigger(this.state.isOpen), triggerProps);

    return React.cloneElement(trigger, triggerProps);
  };

  renderContent = () => {
    // if (!this.state.isOpen) return null

    const { arrow, arrowStyle, animation, duration, easing } = this.props;
    const animations = {
      scale: {
        default: { opacity: 0 },
        hide: { opacity: 0, transform: 'scale(.8) translateY(-30%)', pointerEvents: 'none' },
        show: { opacity: 1, transform: 'none', pointerEvents: 'auto' },
      },
      fade: {
        default: { opacity: 0 },
        hide: { opacity: 0 },
        show: { opacity: 1 },
      },
      slide: {
        default: { opacity: 0 },
        hide: { opacity: 0, transform: 'translateY(-2em)' },
        show: { opacity: 1, transform: 'translateY(0)' },
      }
    }

    const contentProps = !this.state.isOpen ? {} : this.addWarperAction()

    return (
      <Portal>
        <div {...contentProps} key="C">
          <Show
            show={this.state.isOpen}
            easing={easing}
            duration={duration}
            unmountOnHide={true}
            style={animations[animation].default}
            styleHide={animations[animation].hide}
            styleShow={animations[animation].show}
          >
            <div>
              {
                arrow &&
                <div
                  ref={this.setArrowRef}
                  style={Object.assign({}, styles.popupArrow, arrowStyle)}
                />
              }
              {typeof this.props.children === "function"
                ? this.props.children(this.closePopup, this.state.isOpen)
                : this.props.children}
            </div>
          </Show>
        </div>
      </Portal>
    )
  };

  render() {
    const { overlayStyle, closeOnDocumentClick } = this.props;
    const { isOpen } = this.state
    const ovStyle = styles.overlay.tooltip
    return (
      <Fragment>
        <div
          key="H"
          style={{ position: "absolute", top: "0px", left: "0px" }}
          ref={this.setHelperRef}
        />
        {
          isOpen &&
          <div
            key="O"
            className="ri-popover-overlay"
            style={Object.assign({}, ovStyle, overlayStyle)}
            onClick={closeOnDocumentClick ? this.closePopup : undefined}
          />
        }
        {this.renderContent()}
        {this.renderTrigger()}
      </Fragment>
    )
  }
}

Popover.propTypes = {
  arrowStyle: PropTypes.object,
  animation: PropTypes.oneOf(["fade", "scale", "slide"]),
  duration: PropTypes.number,
  contentStyle: PropTypes.object,
  overlayStyle: PropTypes.object,
  className: PropTypes.string,
  closeOnDocumentClick: PropTypes.bool,
  offset: PropTypes.number,
  mouseEnterDelay: PropTypes.number,
  mouseLeaveDelay: PropTypes.number,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  trigger: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
    .isRequired,
  on: PropTypes.oneOfType([
    PropTypes.oneOf(["hover", "click", "focus"]),
    PropTypes.arrayOf(PropTypes.oneOf(["hover", "click", "focus"]))
  ]),
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.element,
    PropTypes.string
  ]).isRequired,
  position: PropTypes.oneOf([
    "top left",
    "top center",
    "top right",
    "bottom left",
    "bottom center",
    "bottom right",
    "right top",
    "right center",
    "right bottom",
    "left top",
    "left center",
    "left bottom"
  ])
};

Popover.defaultProps = {
  children: () => <span> Your Content Here !!</span>,
  onOpen: () => {},
  onClose: () => {},
  closeOnDocumentClick: true,
  defaultOpen: false,
  on: ["click"],
  contentStyle: {},
  arrowStyle: {},
  overlayStyle: {},
  className: "",
  position: "bottom center",
  modal: false,
  arrow: true,
  offset: 0,
  mouseEnterDelay: 100,
  mouseLeaveDelay: 100,
  animation: 'scale',
  easing: 'easeOutQuint',
  duration: 250,
};

export default Popover