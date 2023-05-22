const config = { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
console.log(localStorage.getItem('token'))
export default config