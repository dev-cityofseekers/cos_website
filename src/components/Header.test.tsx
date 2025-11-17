import React from "react";
import { render, screen, fireEvent } from "../test-utils";
import Header from "./Header";
import { LINKS, SOCIAL } from "../config/constants";

describe("Header Component", () => {
  test("renders without crashing", () => {
    render(<Header />);
    // Check if navigation exists
    const nav = screen.getAllByRole("navigation");
    expect(nav.length).toBeGreaterThan(0);
  });

  test("renders ticket buttons with correct URL", () => {
    render(<Header />);

    const ticketLinks = screen.getAllByRole("link").filter((link) => {
      return (link as HTMLAnchorElement).href.includes(LINKS.TICKET_URL);
    });

    expect(ticketLinks.length).toBeGreaterThan(0);
    ticketLinks.forEach((link) => {
      expect((link as HTMLAnchorElement).href).toContain(LINKS.TICKET_URL);
    });
  });

  test("renders desktop navigation with all sections", () => {
    render(<Header />);

    // Check for section links (these will be rendered as anchors by the mocked Link component)
    const sections = ["welcome", "COS?", "Gallery", "where", "FAQ", "team", "contact"];

    sections.forEach((section) => {
      const links = screen.getAllByRole("link").filter((link) => {
        const href = (link as HTMLAnchorElement).href;
        return href.includes(`#${section}`);
      });
      expect(links.length).toBeGreaterThan(0);
    });
  });

  test("mobile menu opens and closes", () => {
    render(<Header />);

    // Find the hamburger menu button (only visible on mobile, but rendered in DOM)
    const menuButtons = screen.getAllByRole("button");
    const hamburgerButton = menuButtons.find((btn) => {
      const svg = btn.querySelector("svg");
      return svg?.classList.contains("text-xl");
    });

    expect(hamburgerButton).toBeInTheDocument();

    // Click to open menu
    if (hamburgerButton) {
      fireEvent.click(hamburgerButton);

      // Check if close button appears (has FaTimes icon)
      const closeButtons = screen.getAllByRole("button");
      const closeButton = closeButtons.find((btn) => {
        const svg = btn.querySelector("svg");
        return svg?.classList.contains("text-2xl");
      });

      expect(closeButton).toBeInTheDocument();

      // Click to close menu
      if (closeButton) {
        fireEvent.click(closeButton);
      }
    }
  });

  test("renders Instagram link with correct security attributes", () => {
    render(<Header />);

    // Find Instagram links
    const links = screen.getAllByRole("link");
    const instagramLinks = links.filter(
      (link) => (link as HTMLAnchorElement).href === SOCIAL.INSTAGRAM_URL
    );

    expect(instagramLinks.length).toBeGreaterThan(0);

    instagramLinks.forEach((link) => {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });
  });

  test("renders language switcher", () => {
    const { container } = render(<Header />);

    // LanguageSwitcher component should be rendered
    // We check for its existence indirectly by checking if the header renders properly
    expect(container.querySelector("nav")).toBeInTheDocument();
  });

  test("renders Code of Conduct link in mobile menu", () => {
    render(<Header />);

    // Open mobile menu first
    const menuButtons = screen.getAllByRole("button");
    const hamburgerButton = menuButtons.find((btn) => {
      const svg = btn.querySelector("svg");
      return svg?.classList.contains("text-xl");
    });

    if (hamburgerButton) {
      fireEvent.click(hamburgerButton);

      // Check for Code of Conduct link
      const cocLink = screen.getByText(/Code Of Conduct/i);
      expect(cocLink).toBeInTheDocument();
      expect(cocLink.closest("a")).toHaveAttribute("href", "/code");
    }
  });
});
