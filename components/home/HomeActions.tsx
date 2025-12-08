type HomeActionsProps = {
  handleUserRedirect: () => void;
  handleAdminRedirect: () => void;
};

export default function HomeActions({
  handleUserRedirect,
  handleAdminRedirect,
}: HomeActionsProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 w-full">
      <button
        onClick={handleUserRedirect}
        className="flex-1 px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition shadow-md text-lg"
      >
        Continue as User
      </button>
      <button
        onClick={handleAdminRedirect}
        className="flex-1 px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition shadow-md text-lg"
      >
        Continue as Admin
      </button>
    </div>
  );
}
