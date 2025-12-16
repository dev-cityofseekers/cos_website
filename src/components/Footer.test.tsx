import React from "react";
import { render, screen } from "../test-utils";
import Footer from "./Footer";
import { FESTIVAL, LOCATION, ORGANIZATION, SOCIAL } from "../config/constants";

describe("Footer Component", () => {
  test("renders without crashing", () => {
    render(<Footer />);
    expect(screen.getByText(FESTIVAL.NAME)).toBeInTheDocument();
  });

  test("displays festival information correctly", () => {
    render(<Footer />);

    // Check festival name
    expect(screen.getByText(FESTIVAL.NAME)).toBeInTheDocument();

    // Check festival dates
    expect(screen.getByText(FESTIVAL.DATE_DISPLAY)).toBeInTheDocument();

    // Check location
    expect(screen.getByText(LOCATION.FULL_ADDRESS)).toBeInTheDocument();
  });

  test("displays organization information", () => {
    render(<Footer />);

    // Check copyright
    expect(
      screen.getByText(`@${ORGANIZATION.COPYRIGHT_YEAR} ${ORGANIZATION.NAME}`)
    ).toBeInTheDocument();

    // Check registration address
    expect(screen.getByText(ORGANIZATION.REGISTRATION_ADDRESS)).toBeInTheDocument();

    // Check rights reserved text
    expect(screen.getByText("All rights reserved.")).toBeInTheDocument();
  });

  test("renders navigation links", () => {
    render(<Footer />);

    // Check for internal navigation links
    expect(screen.getByText("Imprint")).toBeInTheDocument();
    expect(screen.getByText("Privacy-policy")).toBeInTheDocument();
    expect(screen.getByText("Code Of Conduct")).toBeInTheDocument();
  });

  test("renders Instagram link with correct attributes", () => {
    render(<Footer />);

    // Find the Instagram link by href since it doesn't have accessible text
    const links = screen.getAllByRole("link");
    const instagramLink = links.find(
      (link) => (link as HTMLAnchorElement).href === SOCIAL.INSTAGRAM_URL
    ) as HTMLAnchorElement;

    expect(instagramLink).toBeDefined();
    expect(instagramLink).toHaveAttribute("href", SOCIAL.INSTAGRAM_URL);
    expect(instagramLink).toHaveAttribute("target", "_blank");
    expect(instagramLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  test("renders festival logo image", () => {
    const { container } = render(<Footer />);

    const logo = container.querySelector('img[alt="logo"]');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "/images/logo_white_transparent.png");
  });

  test("renders festival transition image", () => {
    const { container } = render(<Footer />);

    const transitionImg = container.querySelector('img[alt="Festival"]');
    expect(transitionImg).toBeInTheDocument();
    expect(transitionImg).toHaveAttribute("src", "/images/footer_transition.png");
  });
});
