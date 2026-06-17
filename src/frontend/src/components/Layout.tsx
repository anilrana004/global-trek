import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Treks", href: "/treks" },
  { label: "Yatras", href: "/yatras" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const trekLinks = [
  { label: "Chopta Tungnath", href: "/treks/chopta-tungnath" },
  { label: "Har Ki Dun", href: "/treks/har-ki-dun" },
  { label: "Kedarkantha", href: "/treks/kedarkantha" },
  { label: "Kuari Pass", href: "/treks/kuari-pass" },
  { label: "Hampta Pass", href: "/treks/hampta-pass" },
  { label: "Sar Pass", href: "/treks/sar-pass" },
  { label: "Phulara Ridge", href: "/treks/phulara-ridge" },
  { label: "View all treks", href: "/treks" },
];

const yatraLinks = [
  { label: "Kedarnath Yatra", href: "/yatras/kedarnath" },
  { label: "Do Dham Yatra", href: "/yatras/do-dham" },
  { label: "Char Dham Yatra", href: "/yatras/char-dham" },
  { label: "View all yatras", href: "/yatras" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/faq" },
  { label: "Terms", href: "/terms" },
  { label: "Privacy", href: "/privacy" },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ease-out ${
          scrolled
            ? "bg-surface-white shadow-[rgba(0,0,0,0.06)_0px_1px_6px_0px,rgba(0,0,0,0.16)_0px_2px_32px_0px]"
            : "bg-transparent"
        }`}
        data-ocid="header"
      >
        <div className="mx-auto max-w-[1280px] px-6 md:px-10">
          <div className="flex h-[72px] items-center justify-between">
            {/* Wordmark */}
            <Link
              to="/"
              className={`font-display text-2xl font-bold transition-colors duration-200 ${
                scrolled ? "text-deep-green" : "text-white"
              }`}
              data-ocid="header.wordmark"
            >
              Global Trek
            </Link>

            {/* Desktop Nav */}
            <nav
              className="hidden items-center gap-8 md:flex"
              data-ocid="header.nav"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`font-body text-base font-medium transition-colors duration-200 ${
                    scrolled ? "text-deep-green" : "text-white"
                  }`}
                  data-ocid={`header.nav.${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="rounded-full bg-deep-green px-6 py-2 font-body text-base font-medium text-white transition-colors duration-200 hover:bg-deep-green/90"
                data-ocid="header.cta_button"
              >
                Plan My Trip
              </Link>
            </nav>

            {/* Mobile Hamburger */}
            <button
              type="button"
              className={`md:hidden ${scrolled ? "text-deep-green" : "text-white"}`}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
              data-ocid="header.mobile_menu_button"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Overlay */}
      {menuOpen && (
        <dialog
          open
          className="fixed inset-0 z-[60] flex flex-col bg-surface-white m-0 p-0 w-full h-full max-w-none max-h-none border-0"
          aria-modal="true"
          data-ocid="mobile_menu"
        >
          <div className="mx-auto flex h-[72px] w-full max-w-[1280px] items-center justify-between px-6">
            <span className="font-display text-2xl font-bold text-deep-green">
              Global Trek
            </span>
            <button
              type="button"
              className="text-deep-green"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              data-ocid="mobile_menu.close_button"
            >
              <X size={28} />
            </button>
          </div>

          <nav className="flex flex-1 flex-col items-center justify-center gap-6 px-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="flex min-h-[48px] items-center font-body text-xl font-medium text-deep-green"
                onClick={() => setMenuOpen(false)}
                data-ocid={`mobile_menu.nav.${link.label.toLowerCase()}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="px-6 pb-10">
            <button
              type="button"
              className="flex h-12 w-full items-center justify-center rounded-full bg-deep-green font-body text-base font-medium text-white"
              onClick={() => setMenuOpen(false)}
              data-ocid="mobile_menu.cta_button"
            >
              Plan My Trip
            </button>
          </div>
        </dialog>
      )}
    </>
  );
}

function Footer() {
  return (
    <footer className="bg-surface-black text-white" data-ocid="footer">
      <div className="mx-auto max-w-[1280px] px-6 py-16 md:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-4">
            <span className="font-display text-2xl font-bold">Global Trek</span>
            <p className="font-body text-sm leading-6 text-text-secondary">
              Small-group treks and yatras across the Himalaya.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white transition-colors duration-150 hover:text-text-secondary"
                data-ocid="footer.social.instagram"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <title>Instagram</title>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-white transition-colors duration-150 hover:text-text-secondary"
                data-ocid="footer.social.youtube"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <title>YouTube</title>
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1C5.12 19.56 12 19.56 12 19.56s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z" />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-white transition-colors duration-150 hover:text-text-secondary"
                data-ocid="footer.social.facebook"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <title>Facebook</title>
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2 — Treks */}
          <div className="flex flex-col gap-4">
            <h3 className="font-body text-sm font-semibold uppercase tracking-wider text-text-secondary">
              Treks
            </h3>
            <ul className="flex flex-col gap-3">
              {trekLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-white transition-colors duration-150 hover:text-text-secondary"
                    data-ocid={`footer.treks.${link.label.toLowerCase().replace(/\s+/g, "_")}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Yatras */}
          <div className="flex flex-col gap-4">
            <h3 className="font-body text-sm font-semibold uppercase tracking-wider text-text-secondary">
              Yatras
            </h3>
            <ul className="flex flex-col gap-3">
              {yatraLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-white transition-colors duration-150 hover:text-text-secondary"
                    data-ocid={`footer.yatras.${link.label.toLowerCase().replace(/\s+/g, "_")}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Company */}
          <div className="flex flex-col gap-4">
            <h3 className="font-body text-sm font-semibold uppercase tracking-wider text-text-secondary">
              Company
            </h3>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-white transition-colors duration-150 hover:text-text-secondary"
                    data-ocid={`footer.company.${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1280px] px-6 py-6 text-center md:px-10">
          <p className="font-body text-sm text-text-secondary">
            © 2026 Global Trek. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
