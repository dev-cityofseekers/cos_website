import React from "react";
import { act, fireEvent, render, screen } from "../test-utils";
import i18n from "../i18n";
import LanguageSwitcher from "./LanguageSwitcher";
import Contact from "./sections/Contact";
import translations from "./text/translations.json";
import easyTranslations from "./text/translations.easy.json";

describe("LanguageSwitcher", () => {
  afterEach(async () => {
    await act(() => i18n.changeLanguage("en"));
  });

  test("easy language toggle keeps the selected language", async () => {
    await act(() => i18n.changeLanguage("de"));
    render(<LanguageSwitcher />);

    const toggle = screen.getByRole("button", { name: "Einfache Sprache" });
    expect(toggle).toHaveAttribute("aria-pressed", "false");

    fireEvent.click(toggle);
    expect(i18n.language).toBe("de-x-easy");
    expect(toggle).toHaveAttribute("aria-pressed", "true");

    fireEvent.click(screen.getByText("EN"));
    expect(i18n.language).toBe("en-x-easy");

    fireEvent.click(screen.getByRole("button", { name: "Easy language" }));
    expect(i18n.language).toBe("en");
  });

  test("sets the html lang attribute to the base language", async () => {
    await act(() => i18n.changeLanguage("de-x-easy"));
    expect(document.documentElement.lang).toBe("de");
  });

  test("easy mode shows simplified texts and falls back for missing keys", async () => {
    await act(() => i18n.changeLanguage("de-x-easy"));
    render(<Contact />);

    expect(screen.getByText(easyTranslations.de.contact.awareness.text)).toBeInTheDocument();
    // No easy version for this key, so the standard German text is used
    expect(screen.getByText(translations.de.contact.donate.heading)).toBeInTheDocument();
  });
});
