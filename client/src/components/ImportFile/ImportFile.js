import React from "react";
import Papa from "papaparse";
const ImportFile=()=> {
    const changeHandler = (event) => {
      Papa.parse(event.target.files[0], {
        header: true,
        skipEmptyLines: true,
        complete: function (results) {
          console.log(results.data)
        },
      });
    };
    return (
      <div>
        {/* File Uploader */}
        <input
          type="file"
          name="file"
          accept=".csv"
          onChange={changeHandler}
          style={{ display: "block", margin: "10px auto" }}
        />
      </div>
    );
  }

  export default ImportFile;