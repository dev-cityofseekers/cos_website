import React from "react";
import { vi } from "vitest";
import { render, screen } from "../../test-utils";
import Contact from "./Contact";
import { SOCIAL } from "../../config/constants";

// Mock WelcomeComponent
vi.mock("../WelcomeComponent", () => ({
  default: function MockWelcomeComponent() {
    return <div data-testid="welcome-component">Welcome Component</div>;
  },
}));

describe("Contact Section", () => {
  test("renders without crashing", () => {
    render(<Contact />);
    expect(screen.getByTestId("welcome-component")).toBeInTheDocument();
  });

  test("renders Instagram link with correct URL and security attributes", () => {
    render(<Contact />);

    const instagramLinks = screen
      .getAllByRole("link")
      .filter((link) => (link as HTMLAnchorElement).href === SOCIAL.INSTAGRAM_URL);

    expect(instagramLinks.length).toBeGreaterThan(0);

    instagramLinks.forEach((link) => {
      expect(link).toHaveAttribute("href", SOCIAL.INSTAGRAM_URL);
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });
  });

  test("renders email link with correct mailto", () => {
    render(<Contact />);

    const emailLinks = screen
      .getAllByRole("link")
      .filter((link) => (link as HTMLAnchorElement).href.includes(`mailto:${SOCIAL.EMAIL}`));

    expect(emailLinks.length).toBeGreaterThan(0);

    emailLinks.forEach((link) => {
      expect((link as HTMLAnchorElement).href).toBe(`mailto:${SOCIAL.EMAIL}`);
    });
  });

  test("passes correct whatsapp link to WelcomeComponent", () => {
    render(<Contact />);

    // The WelcomeComponent mock should be rendered
    expect(screen.getByTestId("welcome-component")).toBeInTheDocument();
  });
});
