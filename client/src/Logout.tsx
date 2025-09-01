function Logout() {
    localStorage.removeItem("accessToken");

    window.location.href = '/login';
    return null;
}

export default Logout