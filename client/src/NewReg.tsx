import { use, useState } from "react";
import './NewReg.css'
import axios from "axios";

function NewReg() {
    const algoOptions = ['Linear', 'Quadratic'];

    const [pickedAlgo, setPickedAlgo] = useState<number>(0);

    const [lda, setLda] = useState<number>(0);

    const [addIntercept, setAddIntercept] = useState<boolean>(false);

    const [results, setResults] = useState(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const choseFile = (document.getElementById("fileSelect") as HTMLInputElement).files[0];
        if (!choseFile) {
            console.error("You need to input a file!");
            return;
        }

        const formData = new FormData();
        formData.append('file', choseFile);
        formData.append('lda', lda.toString());
        formData.append('add_intercept', addIntercept.toString());

        try {
            const response = await axios.post("http://127.0.0.1:8000/regression", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log(response.data);

            setResults(response.data);

        }
        catch (err) {
            console.error(err);
        }

    }

    return (
        <div>
            <h1>New Regression Project</h1>


            <h2>Upload a data file (.csv, .xlsx, .xls, .tsv, .parquet):</h2>
            <input type="file" accept=".csv, .xlsx, .xls, .tsv, .parquet" id="fileSelect" />
            <h4>(Note: Make sure your y term is the first column!)</h4>

            <h2>Select regression type:</h2>
            <div className="algo-options">
                {algoOptions.map((label, index) => (
                    <button
                        key={label}
                        onClick={() => setPickedAlgo(index)}
                        style={{
                            backgroundColor: pickedAlgo === index ? '#007bff' : '#e0e0e0',
                            color: pickedAlgo === index ? 'white' : 'black',
                        }}>
                        {label}
                    </button>
                ))}
            </div>

            <div className="icpt-selection" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: '0.2rem'
            }}>
                <h3>Add intercept?</h3>
                <input type="checkbox" onClick={() => setAddIntercept(prev => !prev)} />
            </div>
            <div className="lda-selection" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
            }}>
                <h3>λ for regularization (Leave blank for none):</h3>
                <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    placeholder="0"
                    value={lda}
                    onChange={(e) => {
                        const val = e.target.value;
                        const numTest: RegExp = /^\d*$/;
                        if (numTest.test(val)) {
                            setLda(val === "" ? 0 : Number(val))
                        }
                    }}
                />

            </div >

            <form onSubmit={(e) => handleSubmit(e)}>
                <button type="submit">Run Regression!</button>
            </form>

            <div>
                {!results ? (<div />) :
                    (<div>
                        <h3>Results:</h3>
                        {Object.entries(results).map(([key, value]) => (
                            <div key={key}>
                                <strong>{key}:</strong>{" "}
                                {Array.isArray(value) ? value.join(", ") : value}
                            </div>
                        ))}
                    </div>)
                }
            </div>

        </div>
    );
}

export default NewReg