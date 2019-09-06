export function isAuth(token) {
    return !!token || !!localStorage.getItem("token");
}