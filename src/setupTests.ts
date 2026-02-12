import "@testing-library/jest-dom";
import { vi } from "vitest";
import React from "react";

// Mock react-scroll
vi.mock("react-scroll", () => {
  return {
    Link: (props: React.PropsWithChildren<{ to: string }>) =>
      React.createElement("a", { href: `#${props.to}`, ...props }, props.children),
    animateScroll: {
      scrollToTop: vi.fn(),
      scrollToBottom: vi.fn(),
      scrollTo: vi.fn(),
    },
    scroller: {
      scrollTo: vi.fn(),
    },
    Element: (props: React.PropsWithChildren<object>) =>
      React.createElement("div", {}, props.children),
  };
});

// Mock window.matchMedia
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock YouTube Player API
const mockYT = {
  Player: vi.fn().mockImplementation(() => ({
    playVideo: vi.fn(),
    pauseVideo: vi.fn(),
    mute: vi.fn(),
    unMute: vi.fn(),
    setVolume: vi.fn(),
    destroy: vi.fn(),
    getPlayerState: vi.fn(() => 1),
  })),
};

(global as unknown as { YT: typeof mockYT }).YT = mockYT;

Object.defineProperty(window, "YT", {
  writable: true,
  value: mockYT,
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

// Mock @vercel/speed-insights
vi.mock("@vercel/speed-insights/react", () => ({
  SpeedInsights: () => null,
}));
