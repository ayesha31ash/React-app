// MainTable.tsx
import React, { useState } from 'react';

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

const MainTable: React.FC = () => {
  const [tableData, setTableData] = useState<DataRow[]>(data);

  const sortTable = (columnIndex: number) => {
    const sortedData = [...tableData].sort((a, b) => {
      const keysA = Object.keys(a) as (keyof DataRow)[];
      const keysB = Object.keys(b) as (keyof DataRow)[];

      if (columnIndex >= 0 && columnIndex < keysA.length) {
        const aValue = a[keysA[columnIndex]];
        const bValue = b[keysB[columnIndex]];
        return aValue - bValue;
      } else {
        return 0;
      }
    });
    setTableData(sortedData);
  };

  return (
    <div>
      <h1>Main Table</h1>
      <table>
        <thead>
          <tr>
            <th onClick={() => sortTable(0)}>Year</th>
            <th onClick={() => sortTable(1)}>Number of Total Jobs</th>
            <th onClick={() => sortTable(2)}>Average Salary (USD)</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((value, i) => (
                <td key={i}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MainTable;