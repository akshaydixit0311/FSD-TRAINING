import React from 'react'
export const card = () => {
  return (
    <div>
        <div style={{border: '1px solid red', width: '800px', height: '900px', margin: '20px', padding: '10px'}}>
         <h2 style={{color: 'blue'}}> ABES STUDENT ID CARD  </h2>
         <img
           src="https://www.w3schools.com/howto/img_avatar.png"
           alt="avatar"
           style={{width: '100px', height: '100px', borderRadius: '50%'}}
         />
         <h4>Name: DHAWAL GOEL</h4>
         <h4>Student ID: 123456</h4>
         <h4>Class: B.TECH. DS-B</h4>
         <h4>Year: 2023</h4>
        </div>
    </div>
  )
}
export default card 