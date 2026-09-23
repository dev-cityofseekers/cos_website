import React from "react";
import { render, screen } from "../../test-utils";
import Contact from "./Contact";
import { SOCIAL } from "../../config/constants";

describe("Contact Section", () => {
  test("renders WhatsApp welcome link", () => {
    render(<Contact />);

    const whatsappLinks = screen
      .getAllByRole("link")
      .filter((link) => (link as HTMLAnchorElement).href === SOCIAL.WHATSAPP_WELCOME_URL);

    expect(whatsappLinks.length).toBeGreaterThan(0);
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
});
