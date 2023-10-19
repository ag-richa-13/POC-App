import Link from 'next/link';
import PlanCard from '../components/PlanCard';

export default function Home() {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold">Choose a Plan</h1>
      <div className="flex mt-4 space-x-4">
        <PlanCard name="Basic Plan" price="$9.99/month" />
        <PlanCard name="Premium Plan" price="$19.99/month" />
        <PlanCard name="Business Plan" price="$29.99/month" />
      </div>
      <Link href="/login">
        <a className="text-blue-600 mt-4 block">Login to subscribe</a>
      </Link>
    </div>
  );
}
