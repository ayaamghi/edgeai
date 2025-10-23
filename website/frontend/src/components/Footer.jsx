import Container from './Container';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
      <Container>
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} Edge Labs @ UNC. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-brand transition-colors focus:outline-none focus:ring-2 focus:ring-brand rounded"
            >
              GitHub
            </a>
            <a
              href="#"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-brand transition-colors focus:outline-none focus:ring-2 focus:ring-brand rounded"
            >
              Contact
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
