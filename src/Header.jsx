import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="border-b border-gray-200">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <h1 className="text-xl font-bold tracking-[4px]">
          NORDLY
        </h1>

        <div className="flex gap-10">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
        </div>

        <div>🛍️</div>
      </nav>
    </header>
  );
}