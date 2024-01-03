import React from 'react';

const Stats = () => {
  return (
    <div>
      <div className="flex gap-5 text-center ">
        <div>
          <span className="countdown font-mono text-4xl">
            <span style={{ "--value": 15 }}></span>
          </span>
          days
        </div>
        <div>
          <span className="countdown font-mono text-4xl">
            <span style={{ "--value": 10 }}></span>
          </span>
          hours
        </div>
        <div>
          <span className="countdown font-mono text-4xl">
            <span style={{ "--value": 24 }}></span>
          </span>
          min
        </div>
        <div>
          <span className="countdown font-mono text-4xl">
            <span style={{ "--value": 36 }}></span>
          </span>
          sec
        </div>
      </div>
    </div>
  );
};

export default Stats;