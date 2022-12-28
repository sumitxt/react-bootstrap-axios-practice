import React from 'react';
import readXlsxFile from "read-excel-file";

const ReadExcel = () => {
    const ReadExcel=()=>{
        document.getElementById("myFile")
        readXlsxFile(myFile.files[0]).then((data)=>{
            alert(data)
        })
    }
    return (
        <div>
        <input id="myFile" className="m-2 form-control" type="file"/>
        <button onClick={ReadExcel} className="btn btn-primary m-2">Read Excel</button>
        </div>
    );
};

export default ReadExcel;