const WantToCook = () => {
  return (
    <div className="border border-[#28282833] rounded-xl h-min p-6 w-full max-w-[41%] text-center">
      <h3 className="text-2xl font-semibold text-[#282828]">Want to cook:</h3>
      <hr className="my-4" />
      <div className="overflow-x-hidden w-full">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
              <th>
                <button className="btn p-1">Preparing</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WantToCook;
