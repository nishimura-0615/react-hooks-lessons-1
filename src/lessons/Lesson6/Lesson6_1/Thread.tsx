import { useRef } from "react";
import { useOptimistic } from "react";
import { Message } from "./Lesson6_1";

const Thread = ({
  messages,
  sendMessage,
}: {
  messages: Message[];
  sendMessage: (formData: FormData) => Promise<void>;
}) => {
  const formRef = useRef<HTMLFormElement>(null);

  const formAction = async () => {
    const formData = new FormData(formRef.current!)
    addOptimisticMessage(formData.get("message"));
    await sendMessage(formData);
    formRef.current?.reset();
  };

  const [ optmisticMessages, addOptimisticMessage ] = useOptimistic(
    messages,
    (state:Message[], newMessage: Message) => [
    ...state,
    {
      text: newMessage,
      sending: true,
    },
   ]
  );
  //small sending*APIを送っている間にsendingを表示している
  return (
    <div>
      {optmisticMessages.map((message: Message, index: number) => (
        <div key={index}>{message.text} {!!message.sending && <small>(Sending...)</small>}</div>
      ))}
      <form action={formAction} ref={formRef}>
        <input
          type="text"
          name="message"
          placeholder="Hello!"
          className="border-2 px-2 py-2 rounded-md"
        />
        <button type="submit" className="ml-2 border-2 px-2 py-2 rounded-md">
          送信
        </button>
      </form>
    </div>
  );
};

export default Thread;
