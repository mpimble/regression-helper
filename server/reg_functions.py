import pandas as pd
import numpy as np
from sklearn.preprocessing import MinMaxScaler


def extract_y(df: pd.DataFrame) -> np.ndarray:
    y = df.iloc[:, 0].values
    return y


def clean_data(df: pd.DataFrame) -> np.ndarray:
    df.drop(df.columns[0], axis=1)
    onehot_raw_X = pd.get_dummies(df, drop_first=True, dtype=int)
    np_X = onehot_raw_X.to_numpy()
    scaler = MinMaxScaler()
    X = scaler.fit_transform(np_X).round(4)
    return X


def build_phi(X: np.ndarray, is_quad: bool, add_intercept: bool) -> np.ndarray:
    X_sqd = X**2
    Phi = np.hstack([X, np.ones_like(X[:, 0]).reshape(-1, 1)])

    if is_quad:
        Phi = np.hstack([X_sqd, Phi])

    return Phi


def run_regression(Phi, y, lda: float) -> {np.ndarray, float}:
    w = np.dot(np.linalg.inv(np.dot(Phi.T, Phi)), np.dot(Phi.T, y))
    y_hat = np.matmul(Phi, w)
    e = y_hat - y

    return w, np.sum(e**2)
