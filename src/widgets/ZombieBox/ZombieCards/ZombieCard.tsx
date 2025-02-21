type ZombieProps = {
  name: string;
};

export default function ZombieCards({ name }: Readonly<ZombieProps>) {
  return (
    <div>
      <h3>{name}</h3>
    </div>
  );
}
