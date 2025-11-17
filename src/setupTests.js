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

// Mock YouTube Player API
global.YT = {
  Player: jest.fn().mockImplementation(() => ({
    playVideo: jest.fn(),
    pauseVideo: jest.fn(),
    mute: jest.fn(),
    unMute: jest.fn(),
    setVolume: jest.fn(),
    destroy: jest.fn(),
    getPlayerState: jest.fn(() => 1),
  })),
};

Object.defineProperty(window, "YT", {
  writable: true,
  value: global.YT,
});

// Prevent the YouTube API script from actually loading
Object.defineProperty(window, "onYouTubeIframeAPIReady", {
  writable: true,
  value: undefined,
});

// Ensure there's at least one script tag in the document for YouTube API injection
if (document.getElementsByTagName("script").length === 0) {
  const mockScript = document.createElement("script");
  document.head.appendChild(mockScript);
}
