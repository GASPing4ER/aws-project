import { useState } from "react";

const DashboardForm = () => {
  const [page, setPage] = useState(1);

  const handleNext = () => {
    setPage(page === 2 ? 1 : page + 1);
  };

  return (
    <form className="bg-slate-900 text-slate-50 p-10 w-[600px] rounded-lg flex flex-col items-start gap-4">
      {page === 1 && <PhaseOne handleNext={handleNext} />}
      {page === 2 && <PhaseTwo handleNext={handleNext} />}
    </form>
  );
};

export default DashboardForm;

type PhaseOneProps = {
  handleNext: () => void;
};

const PhaseOne = ({ handleNext }: PhaseOneProps) => {
  return (
    <>
      <h2 className="text-3xl tracking-widest text-center font-thin border-b pb-1">
        PHASE<span className="font-medium"> 01</span>
      </h2>
      <input
        className="bg-transparent"
        type="text"
        placeholder="Choose Industry:"
      />
      <input
        className="bg-transparent"
        type="text"
        placeholder="Choose Location:"
      />
      <input
        className="bg-transparent"
        type="text"
        placeholder="Choose Company Size:"
      />
      <input
        className="bg-transparent"
        type="text"
        placeholder="Profit range:"
      />
      <button
        onClick={handleNext}
        className="bg-slate-50 rounded-lg text-slate-900 text-xs px-6 py-1"
      >
        NEXT
      </button>
    </>
  );
};

type PhaseTwoProps = {
  handleNext: () => void;
};

const PhaseTwo = ({ handleNext }: PhaseTwoProps) => {
  return (
    <>
      <h2 className="text-3xl tracking-widest text-center font-thin border-b pb-1">
        PHASE<span className="font-medium"> 02</span>
      </h2>
      <input
        className="bg-transparent"
        type="text"
        placeholder="Choose Industry:"
      />
      <input
        className="bg-transparent"
        type="text"
        placeholder="Choose Location:"
      />
      <input
        className="bg-transparent"
        type="text"
        placeholder="Choose Company Size:"
      />
      <input
        className="bg-transparent"
        type="text"
        placeholder="Profit range:"
      />
      <button
        onClick={handleNext}
        className="bg-slate-50 rounded-lg text-slate-900 text-xs px-6 py-1"
      >
        NEXT
      </button>
    </>
  );
};
