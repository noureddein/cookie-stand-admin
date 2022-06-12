const TableBody = ({ cookiesData }) => {
  return (
    <tbody>
      {!cookiesData.length ? (
        <tr>
          <td
            colSpan="16"
            className="p-1 text-center border rounded-lg border-slate-700"
          >
            No records
          </td>
        </tr>
      ) : (
        cookiesData.map((item, idx) => {
          return (
            <tr key={idx}>
              <td className="p-1 border rounded-lg border-slate-700">
                {item.location}
              </td>
              {item.cookiesPerHour.map((hourly, idx) => {
                return (
                  <td
                    key={idx}
                    className="p-1 border rounded-lg border-slate-700"
                  >
                    {hourly}
                  </td>
                );
              })}
              <td className="p-1 border rounded-lg border-slate-700">
                {item.totalCookiesDaily}
              </td>
            </tr>
          );
        })
      )}
    </tbody>
  );
};

export default TableBody;
