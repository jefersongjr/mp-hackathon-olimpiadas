import Link from 'next/link';

function NavBar() {
  return (
    <nav className="flex space-x-4 ml-auto">
      <Link
        href="/"
        className="cursor-pointer text-secondary-light hover:text-third-light px-3 py-2 rounded-md text-sm md:text-2xl font-medium"
      >
        Início
      </Link>
      <Link
        href="/sobre"
        className="cursor-pointer text-secondary-light hover:text-third-light px-3 py-2 rounded-md text-sm md:text-2xl font-medium"
      >
       Ranking
      </Link>
      <Link
        href="/servicos"
        className="cursor-pointer text-secondary-light hover:text-third-light px-3 py-2 rounded-md text-sm md:text-2xl font-medium"
      >
        Modalidades
      </Link>
      <Link
        href="/contato"
        className="cursor-pointer text-secondary-light hover:text-third-light px-3 py-2 rounded-md text-sm md:text-2xl font-medium"
      >
        Eventos
      </Link>
    </nav>
  );
}

export default NavBar;