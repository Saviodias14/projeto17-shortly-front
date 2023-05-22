const config = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
config.headers.Authorization.replace(/"/g, '');
export default config