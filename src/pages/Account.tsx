import { Link } from "react-router-dom";

function Account() {
  return (
    <>
      <section className="mx-auto max-w-screen-xl px-3">
        <h1 className="flex items-center justify-between">
          <span>Account</span> <Link to={"/login"}>Login</Link>
        </h1>

        <div className="flex items-center justify-center h-screen bg-gray-200">
          <div className="bg-white p-8 rounded shadow-md">
            <h1 className="text-4xl font-bold mb-4">Currently Not Available</h1>
            <p className="text-gray-600">
              We're sorry, but the content you're looking for is currently not
              available. Please try again later.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Account;
