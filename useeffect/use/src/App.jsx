 import React from 'react'
 
 const App = () => {
  const [formData, setformData] =useState({
  name: '',
  email: '',
  password: '',
 })
 useEffect(() => {
  console.log("form data updated:", formData)
 }, [formData])
 const handleChange= (e) => {
  setformData({...formData, [e.target.name]: e.target.value})
 }
 const handleSubmit = (e) => {
  e.preventDefault()
  console.log("form submitted:", formData)
 }
   return (
     <div>
       <form onSubmit={handleSubmit}>
         <input type="text" placeholder="Enter your name" value={formData.name} onChange={handleChange} />
         <br />
         <input type="email" placeholder="Enter your email" value={formData.email} onChange={(e) => setformData({...formData, email: e.target.value})} />
         <br />
         <input type="password" name="password" placeholder="Enter your password" value={formData.password} onChange={(e) => setformData({...formData, password: e.target.value})} />
         <br />  
         <button type="submit">Registeration</button>
       </form>
     </div>
   )
 }
 export default App
 