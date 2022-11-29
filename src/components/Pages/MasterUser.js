import { useEffect, useState, useMemo, useCallback } from "react";

const MasterUser = () => {
  const [mainData, setMainData] = useState(useMemo(() => [], []));

  const fetchData = useCallback(async () => {
    const response = await fetch(
      "https://international-driving-sc-af89c-default-rtdb.firebaseio.com/regdata.json"
    );
    if (response.ok) {
      const data = await response.json();
      //console.log(data);
      setMainData([...mainData, data]);
    }
  }, [mainData]);

  const allData = [];
  for (const otherdata of mainData) {
    for (const key in otherdata) {
      allData.push(otherdata[key]);
    }
  }

  // console.log(allData);

  useEffect(() => {
    fetchData();
  }, []);

  // console.log(mainData);

  return (
    <div className="table-responsive" style={{ marginTop: 50 }}>
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Header</th>
            <th scope="col">Header</th>
            <th scope="col">Header</th>
            <th scope="col">Header</th>
          </tr>
        </thead>
        <tbody>
          {allData.map((data) => (
            <tr key={Math.random()}>
              <td>#</td>
              <td>{data.title}</td>
              <td>{data.openingText}</td>
              <td>{data.releaseDate}</td>
              <td>nill</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MasterUser;
