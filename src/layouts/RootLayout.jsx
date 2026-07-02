import { Outlet, Link } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow p-4">
        <nav className="flex gap-6 text-lg">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/polaris" className="hover:text-blue-600">Polaris</Link>
          <Link to="/api" className="hover:text-blue-600">API</Link>
          <Link to="/webhooks" className="hover:text-blue-600">Webhooks</Link>
          <Link to="/structure" className="hover:text-blue-600">App Structure</Link>
        </nav>
      </header>

      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}
