import Link from 'next/link';

export default function Register() {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold">Register</h1>
      {/* Add your registration form here */}
      <Link href="/login">
        <a className="text-blue-600 mt-4 block">Already have an account? Login</a>
      </Link>
    </div>
  );
}
