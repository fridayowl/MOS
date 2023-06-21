import React from 'react';
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';

const RiskStatusDistributionChart = ({ risks }) => {
  const riskStatusCount = risks.reduce((count, risk) => {
    const { RiskMonitoring } = risk;
    const status = RiskMonitoring.RiskStatus;
    if (count[status]) {
      count[status]++;
    } else {
      count[status] = 1;
    }
    return count;
  }, {});

  const data = Object.entries(riskStatusCount).map(([status, count]) => ({
    status,
    count,
  }));

  const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#FF0000'];

  return (
    <div>
      <h3>Risk Status Distribution</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="count"
            nameKey="status"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RiskStatusDistributionChart;
