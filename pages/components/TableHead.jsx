import { hours } from "../../data";

const TableHead = () => {
  return (
    <thead>
      <tr>
        <th className="px-4 py-2 font-extrabold border rounded-lg font-display border-slate-600">
          Location
        </th>
        {hours.map((hour, idx) => (
          <th
            key={idx}
            className="px-4 py-2 font-extrabold border rounded-lg font-display border-slate-600"
          >
            {hour}
          </th>
        ))}
        <th className="px-4 py-2 font-extrabold border rounded-lg font-display border-slate-600">
          Total
        </th>
      </tr>
    </thead>
  );
};

export default TableHead;
