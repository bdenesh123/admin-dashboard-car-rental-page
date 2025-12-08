type SidebarOverlayProps = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (value: boolean) => void;
};

export default function SidebarOverlay({
  isSidebarOpen,
  setIsSidebarOpen,
}: SidebarOverlayProps) {
  if (!isSidebarOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/30 z-30 md:hidden"
      onClick={() => setIsSidebarOpen(false)}
    />
  );
}
