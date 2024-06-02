import { Reorder } from "framer-motion";
import { useState } from "react";
import { FaGripVertical, FaTrash } from "react-icons/fa6";
import DIALOG_IDS from "../../../../shared/core/Dialog/dialogIds";
import Dialog from "../../../../shared/core/Dialog";
import { COMMISSION_PERCENTAGE } from "../../../../shared/constants";

type Option = {
  id: string;
  value: string;
};

const TaskPosterDashboard = () => {
  const [options, setOptions] = useState<Option[]>([]);
  const [limit, setLimit] = useState("0.1");
  const [submissionsCount, setSubmissionsCount] = useState("100");

  const openLimitSetter = () => {
    (document.getElementById(DIALOG_IDS.SET_SOL_LIMIT) as HTMLDialogElement)!.showModal();
  };

  const handleSubmit = () => {};

  return (
    <div className="px-6 py-8 max-w-[75vw] mx-auto">
      <Dialog id={DIALOG_IDS.SET_SOL_LIMIT} title="Set sol limit" onClick={handleSubmit}>
        <div className="flex flex-col gap-8 py-4 px-4">
          <span className="flex flex-col gap-2">
            <span>Limit (in SOL)</span>
            <input type="text" className="input input-bordered w-full" value={limit} onChange={(e) => setLimit(e.target.value)} />
          </span>
          <span className="flex flex-col gap-2">
            <span>Submissions count</span>
            <input type="text" className="input input-bordered w-full" value={submissionsCount} onChange={(e) => setSubmissionsCount(e.target.value)} />
          </span>
          <span>{Number(limit || 0) / Number(submissionsCount || 1)} SOL paid per submission</span>
          <span>
            +{Number(limit || 0) * COMMISSION_PERCENTAGE} SOL ({COMMISSION_PERCENTAGE * 100}%) commission charge
          </span>
          <span className="font-bold text-primary">Total: {(Number(limit || 0) * COMMISSION_PERCENTAGE + Number(limit || 0)).toFixed(5)} SOL</span>
        </div>
      </Dialog>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-8">
          <textarea className="textarea textarea-bordered bg-base-200 border-2 h-50 w-full" placeholder="Task description..." />
          <button className="btn btn-secondary" onClick={() => setOptions([...options, { id: Math.random().toString(), value: "" }])}>
            Add option
          </button>
          <button disabled={options.length < 2} className="btn btn-primary" onClick={openLimitSetter}>
            Submit task
          </button>
        </div>
        <Reorder.Group axis="y" className="flex flex-col gap-4" values={options} onReorder={setOptions}>
          {options.map((option, index) => (
            <Reorder.Item value={option} key={option.id}>
              <div className="card bg-base-100 shadow-xl">
                <div className="card-body flex items-center flex-row gap-4">
                  <span>{index + 1}.</span>
                  <input type="text" className="input input-bordered w-full" />
                  <span className="cursor-pointer">
                    <FaGripVertical className="text-tertiary" />
                  </span>
                  <button
                    className="btn btn-error"
                    onClick={() => {
                      const newOptions = options.filter((o) => o.id !== option.id);
                      setOptions(newOptions);
                    }}
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </div>
    </div>
  );
};

export default TaskPosterDashboard;
