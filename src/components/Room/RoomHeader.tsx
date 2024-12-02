type Props = {
  id: string;
  numberOfParticipants: number;
};

export const RoomHeader = ({ id, numberOfParticipants }: Props) => {
  return (
    <div className="bg-blue-700 text-white p-4 flex items-center gap-4">
      <span>Room id: {id}</span>
      <button
        onClick={() => navigator.clipboard.writeText(`${id}`)}
        className="text-white font-semibold">
        Copy ID
      </button>
      <span>Number of participants: {numberOfParticipants}</span>
    </div>
  );
};
