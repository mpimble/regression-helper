function NewReg() {
    return (
        <div>
            <h1>New Regression Project</h1>
            <h2>Upload a data file (.csv, .xlsx, .xls, .tsv, .parquet):</h2>
            <input type="file" accept=".csv, .xlsx, .xls, .tsv, .parquet" />
            <h2>Select ML algorithm:</h2>
        </div>
    );
}

export default NewReg