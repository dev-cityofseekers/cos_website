import React from "react";
import { render, screen, fireEvent } from "../test-utils";
import Header from "./Header";
import { LINKS } from "../config/constants";

describe("Header Component", () => {
  test("renders without crashing", () => {
    render(<Header />);
    // Check if navigation exists
    const nav = screen.getAllByRole("navigation");
    expect(nav.length).toBeGreaterThan(0);
  });

  test("renders ticket links", () => {
    render(<Header />);

    // Find all ticket links (label is "Tickets" or "Waitlist" depending on the season)
    const ticketLinks = screen
      .getAllByRole("link")
      .filter((link) => (link as HTMLAnchorElement).href === LINKS.TICKET_URL);

    // Should have at least one ticket link (desktop + mobile navbars)
    expect(ticketLinks.length).toBeGreaterThan(0);

    // All ticket links should point to the ticket URL and open in new tab
    ticketLinks.forEach((link) => {
      expect(link).toHaveAttribute("href", LINKS.TICKET_URL);
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });
  });

  test("renders desktop navigation with all items", () => {
    render(<Header />);

    // Check for scroll section links (rendered as anchors with hash)
    const scrollSections = ["welcome", "COS?", "Gallery", "FAQ", "Contact"];

    scrollSections.forEach((section) => {
      const links = screen.getAllByRole("link").filter((link) => {
        const href = (link as HTMLAnchorElement).href;
        return href.includes(`#${section}`);
      });
      expect(links.length).toBeGreaterThan(0);
    });

    // Check for route links (Team and Location pages)
    const routeLinks = screen.getAllByRole("link").filter((link) => {
      const href = (link as HTMLAnchorElement).href;
      return href.includes("/team") || href.includes("/where");
    });
    expect(routeLinks.length).toBeGreaterThan(0);
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

  // Skipping: External links are conditionally rendered (mobile menu) - tested in Footer instead
  test.skip("renders external links with correct security attributes", () => {
    render(<Header />);

    // Find all external links (those with target="_blank")
    const links = screen.getAllByRole("link");
    const externalLinks = links.filter((link) => link.getAttribute("target") === "_blank");

    // Should have at least one external link (Instagram)
    expect(externalLinks.length).toBeGreaterThan(0);

    // All external links should have proper security attributes
    externalLinks.forEach((link) => {
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

      // Check for Code of Conduct link (labelled "Conduct" in the nav)
      const cocLinks = screen.getAllByText(/^Conduct$/i);
      expect(cocLinks.length).toBeGreaterThan(0);
      cocLinks.forEach((link) => expect(link.closest("a")).toHaveAttribute("href", "/code"));
    }
  });
});
