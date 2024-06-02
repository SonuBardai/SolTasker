import React, { useState } from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { FaExclamation, FaInfo } from "react-icons/fa6";
import Status from "./status";
import DIALOG_IDS from "./dialogIds";

const Dialog = ({
  id,
  title,
  children,
  buttonText = "Confirm",
  cancelText = "Cancel",
  onClick,
  status = undefined,
}: {
  id: DIALOG_IDS;
  title: React.ReactNode | string;
  children: React.ReactNode;
  onClick: ({ closeFn, setLoading, setError }: { closeFn: () => void; setLoading: (loading: boolean) => void; setError: (error: string) => void }) => void | Promise<void>;
  buttonText?: string;
  cancelText?: string;
  status?: Status;
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const closeFn = () => {
    (document.getElementById(id) as HTMLDialogElement)?.close();
  };

  return (
    <dialog id={id} className="modal">
      <div className="modal-box">
        <h3
          className={`flex items-center gap-2 rounded-md px-4 py-2 text-lg font-bold ${
            status === Status.WARNING ? "bg-warning" : status === Status.INFO ? "bg-info" : status === Status.ERROR ? "bg-error" : ""
          }`}
        >
          {status === Status.WARNING ? <FaExclamation /> : status === Status.INFO ? <FaInfo /> : status === Status.ERROR ? <FaExclamationTriangle /> : ""}
          {title}
        </h3>
        {children}
        <div className="modal-action flex justify-between">
          <form method="dialog">
            <button className="btn">{cancelText}</button>
          </form>
          <button
            className="btn btn-info"
            onClick={async () => {
              try {
                await onClick({ closeFn, setLoading, setError });
              } catch (e) {
                console.error(e);
              }
            }}
            disabled={loading}
          >
            {loading ? <span className="loading loading-spinner loading-sm"></span> : <span>{buttonText}</span>}
          </button>
        </div>
        <span className="text-error">{error}</span>
      </div>
    </dialog>
  );
};

export default Dialog;
