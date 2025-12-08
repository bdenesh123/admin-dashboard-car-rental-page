import { User } from "@/lib/data";

type CarDetailOwnerProps = {
  owner?: User;
};

export default function CarDetailOwner({ owner }: CarDetailOwnerProps) {
  return (
    <div className="mb-4">
      <h3 className="font-semibold text-slate-800 mb-1">Owner</h3>
      {owner ? (
        <p className="text-slate-700">
          {owner.name} ({owner.role})
        </p>
      ) : (
        <p className="text-slate-500">Unknown</p>
      )}
    </div>
  );
}
