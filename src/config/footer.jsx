import react from "react";

const Footer = () => {
  return (
    <footer className="border-t mt-8 border-primary/20 dark:border-primary/30">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {["About", "Contact", "Privacy Policy", "Terms of Service"].map(
            (link, i) => (
              <a
                key={i}
                href="#"
                className="text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                {link}
              </a>
            )
          )}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-500 dark:text-gray-400">
            © 2025 Prime Sales. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
