from fastapi import APIRouter, UploadFile, File, Form
import pandas as pd
from reg_functions import *
import io


router = APIRouter()


@router.post("/regression")
async def reg_master(
    file: UploadFile = File(...),
    lda: float = Form(...),
    add_intercept: bool = Form(...),
):
    contents = await file.read()
    df = None

    if file.filename.endswith(".csv"):
        df = pd.read_csv(io.BytesIO(contents))
    else:
        return {"error": "Unsupported file type"}

    """elif file.filename.endswith(".tsv"):
        df = pd.read_csv(io.BytesIO(contents), sep='\t')
    elif file.filename.endswith(".xlsx") or file.filename.endswith(".xls"):
        df = pd.read_excel(io.BytesIO(contents))
    elif file.filename.endswith(".parquet"):
        df = pd.read_parquet(io.BytesIO(contents))"""

    y = extract_y(df)
    X = clean_data(df)
    Phi = build_phi(X, False, add_intercept)
    w, e_sq = run_regression(Phi, y, lda)

    return {
        "Weights": w.flatten().tolist(),
        "Total error squared": e_sq,
    }
