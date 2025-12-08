export default function AdminLoginInfo() {
  return (
    <div className="md:w-1/2 flex flex-col justify-center items-start p-12 bg-green-100">
      <h1 className="text-5xl font-extrabold text-green-700 mb-6">
        SewaCar Admin
      </h1>
      <p className="text-slate-900 text-lg mb-8">
        Securely manage your car rental system. Use the credentials below for
        testing.
      </p>
      <div className="bg-green-200 text-green-900 p-6 rounded-xl text-base sm:text-lg font-medium shadow-md w-full max-w-sm text-start">
        <p>
          <strong>Email:</strong> admin@example.com
        </p>
        <p>
          <strong>Password:</strong> password123
        </p>
      </div>
    </div>
  );
}
