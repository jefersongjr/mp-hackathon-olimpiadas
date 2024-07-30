import Link from 'next/link';

function NavBarMobile() {
  return (
    <nav
      className="flex flex-col bg-primary-light
       items-center justify-center space-y-4 dark:bg-primary-dark"
    >
      <Link
        href="/"
        className="cursor-pointer
        text-secondary-light dark:text-secondary-dark
        hover:text-secondary-light hover:dark:text-secondary-dark
        px-3 py-2 rounded-md text-sm md:text-2xl font-medium"
      >
        Início
      </Link>
      <Link
        href="sobre"
        className="cursor-pointer text-secondary-light
        dark:text-secondary-dark hover:text-secondary-light
         hover:dark:text-secondary-dark px-3 py-2 rounded-md
         text-sm md:text-2xl font-medium"
      >
        Ranking
      </Link>
      <Link
        href="services"
        className="cursor-pointer text-secondary-light
         dark:text-secondary-dark hover:text-secondary-light
         hover:dark:text-secondary-dark px-3 py-2 rounded-md
         text-sm md:text-2xl font-medium"
      >
        Modalidades
      </Link>
      <Link
        href="contact"
        className="cursor-pointer text-secondary-light
        dark:text-secondary-dark hover:text-secondary-light
        hover:dark:text-secondary-dark px-3 py-2 rounded-md
        text-sm text-xl md:text-2xl font-medium"
      >
        Eventos
      </Link>
    </nav>
  );
}

export default NavBarMobile;
