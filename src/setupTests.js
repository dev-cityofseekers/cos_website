// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

// Mock react-scroll
jest.mock("react-scroll", () => {
  const React = require("react");
  return {
    Link: (props) => React.createElement("a", { href: `#${props.to}`, ...props }, props.children),
    animateScroll: {
      scrollToTop: jest.fn(),
      scrollToBottom: jest.fn(),
      scrollTo: jest.fn(),
    },
    scroller: {
      scrollTo: jest.fn(),
    },
    Element: (props) => React.createElement("div", {}, props.children),
  };
});

// Mock window.matchMedia
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
