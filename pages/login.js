import Link from 'next/link';

export default function Login() {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold">Login</h1>
      {/* Add your login form here */}
      <Link href="/register">
        <a className="text-blue-600 mt-4 block">Create an account</a>
      </Link>
    </div>
  );
}
