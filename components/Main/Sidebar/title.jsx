export function Title(props) {
  return (
    <div className="flex justify-center">
      <h2 className="inline-block text-2xl font-bold text-center border-b-4 border-primary">
        {props.title}
      </h2>
    </div>
  );
}
