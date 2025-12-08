import HomeActions from "./HomeActions";

type HomeContentProps = {
  handleUserRedirect: () => void;
  handleAdminRedirect: () => void;
};

export default function HomeContent({
  handleUserRedirect,
  handleAdminRedirect,
}: HomeContentProps) {
  return (
    <div className="md:w-1/2 flex flex-col justify-center items-start p-12 bg-green-100">
      <h1 className="text-5xl font-extrabold text-green-700 mb-6">SewaCar</h1>
      <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 mb-4">
        Your Journey Starts Here
      </h2>
      <p className="text-slate-700 text-lg mb-8">
        Click “User” to find your ride, or “Admin” to take control of the fleet.
      </p>

      <HomeActions
        handleUserRedirect={handleUserRedirect}
        handleAdminRedirect={handleAdminRedirect}
      />
    </div>
  );
}
