export function Champion({ champ }: { champ: any }) {
  return (
    <div>
      <h1 className="peer relative">{champ.name}</h1>
      <p className="text-xl hidden z-50 absolute bg-slate-500 peer-hover:block w-72  rounded-lg px-4">
        {champ.blurb}
      </p>
    </div>
  );
}
