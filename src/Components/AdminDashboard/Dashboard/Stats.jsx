import React from 'react';

const Stats = () => {
  return (
    <div>
     

      <div>
        <div className='w-full'>
          <h2 className='m-4 text-5xl text-center shadow-xl p-4 m-2'>Admin Stats</h2>

          {/* Stats Cards */}
          <div className="stats shadow-xl w-full p-10 m-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Product Stats */}
            <div className="stat bg-white rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-2">Product Stats</h3>
              <p>Total Products: <span className="text-primary">520</span></p>
              <p>Most Sold Product: <span className="text-primary">Widget A</span></p>
              {/* Add other relevant product stats */}
            </div>

            {/* Order Stats */}
            <div className="stat bg-white rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-2">Order Stats</h3>
              <p>Total Orders: <span className="text-primary">870</span></p>
              <p>Pending Orders: <span className="text-primary">25</span></p>
              {/* Add other relevant order stats */}
            </div>

            {/* Payment Stats */}
            <div className="stat bg-white rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-2">Payment Stats</h3>
              <p>Total Revenue: <span className="text-primary">$68,000</span></p>
              <p>Successful Payments: <span className="text-primary">820</span></p>
              {/* Add other relevant payment stats */}
            </div>

            {/* User Stats */}
            <div className="stat bg-white rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-2">User Stats</h3>
              <p>Total Users: <span className="text-primary">1,500</span></p>
              <p>New Users Today: <span className="text-primary">35</span></p>
              {/* Add other relevant user stats */}
            </div>
          </div>

          {/* Charts and Graphs */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-10">
            {/* User Analytics Chart */}
            <div className="shadow-xl p-6 bg-white rounded-lg">
              {/* User Analytics Chart Content (e.g., Line Chart, Bar Chart) */}
              {/* Example: Chart.js or other chart libraries to visualize user trends */}
            </div>

            {/* Other Analytics Graph */}
            <div className="shadow-xl p-6 bg-white rounded-lg">
              {/* Other Analytics Graph Content (e.g., Pie Chart, Area Chart) */}
              {/* Example: Chart.js or other libraries for various analytics */}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Stats;