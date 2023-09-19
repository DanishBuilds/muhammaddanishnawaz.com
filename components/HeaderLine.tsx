import Link from 'next/link';

const HeaderLine = () => (
  <header className="sticky top-0 left-0 right-0 z-10 w-full border-t-4 border-gray-800 dark:border-gray-700">
    <div className="mx-auto w-full max-w-2xl">
      <Link
        href="/"
        className="ml-10 inline-block bg-gray-800 px-3 pb-1 font-medium text-white no-underline dark:bg-gray-700"
      >
        Muhammad Danish Nawaz
      </Link>
    </div>
  </header>
);

export default HeaderLine;
