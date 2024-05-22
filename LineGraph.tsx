import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';

interface DataRow {
  year: number;
  totalJobs: number;
  avgSalary: number;
}

const data: DataRow[] = [
  { year: 2020, totalJobs: 1000, avgSalary: 80000 },
  { year: 2021, totalJobs: 1200, avgSalary: 85000 },
  { year: 2022, totalJobs: 1500, avgSalary: 90000 },
  { year: 2023, totalJobs: 1800, avgSalary: 95000 },
  { year: 2024, totalJobs: 2000, avgSalary: 100000 },
];

const LineGraph: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  const handleClick = (year: number) => {
    setSelectedYear(year);
  };

  const lineChartData = {
    labels: data.map((item) => item.year.toString()), // Convert year to string for categorical labels
    datasets: [
      {
        label: 'Total Jobs',
        data: data.map((item) => item.totalJobs),
        borderColor: 'blue',
        backgroundColor: 'rgba(0, 0, 255, 0.2)',
      },
      {
        label: 'Average Salary (USD)',
        data: data.map((item) => item.avgSalary),
        borderColor: 'green',
        backgroundColor: 'rgba(0, 255, 0, 0.2)',
      },
    ],
  };

  return (
    <div>
      <h1>Line Graph</h1>
      <Line key="line-chart" data={lineChartData} />
      <br />
      <h2>Click a row to view aggregated job titles for that year</h2>
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Number of Total Jobs</th>
            <th>Average Salary (USD)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} onClick={() => handleClick(row.year)}>
              <td>{row.year}</td>
              <td>{row.totalJobs}</td>
              <td>{row.avgSalary}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedYear && (
        <div>
          <h2>Aggregated Job Titles for {selectedYear}</h2>
          {/* Include code to display aggregated job titles here */}
        </div>
      )}
    </div>
  );
};

export default LineGraph;
