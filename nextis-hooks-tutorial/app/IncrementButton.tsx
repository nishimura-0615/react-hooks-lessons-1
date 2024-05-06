import { useFormStatus } from "react-dom";

const IncrementButton = () => {
  const { pending } = useFormStatus();
  return(
    <div>
      <button className={`px-4 py-2 border-2 border-red-400 rounded-md ${
        pending && "border-green-400"
      }`}
      disabled={pending}
      >
        Increment
      </button>
      <p>{pending && "送信中です..."}</p>
    </div>
  );
};

export default IncrementButton;
