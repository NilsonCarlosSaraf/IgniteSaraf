import { Check, Trash } from "@phosphor-icons/react";
import style from "./TaskCard.module.css";
import { useState } from "react";

interface IProps {
  content: string;
  deleteFunction: () => void;
}

export function TaskCard({ content, deleteFunction }: IProps) {

  const [taskStatus, setTaskStatus] = useState<boolean>(true);

  function handleTaskStatus() {
    setTaskStatus((state) => !state);
  }

  return (
    <div className={style.taskCard}>
      {taskStatus ? (
        <div
          className={style.taskCheckBoxUntoggled}
          onClick={handleTaskStatus}
        />
      ) : (
        <div className={style.taskCheckBoxToggled} onClick={handleTaskStatus}>
          <Check size={9} color="white" />
        </div>
      )}
      <div
        style={
          taskStatus
            ? { textDecoration: "none", textAlign: "start" }
            : { textDecoration: "line-through", textAlign: "start" }
        }
      >
        {content}
      </div>
      <div>
        <button>
          <Trash size={16} onClick={deleteFunction} />
        </button>
      </div>
    </div>
  );
}
