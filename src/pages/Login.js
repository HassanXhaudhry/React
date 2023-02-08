import React from 'react'

const Login = () => {
  return (
    <>
    <div style={{display:"flex", justifyContent:"center", marginTop:"100px"}}>
      <form style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", textAlign:"center"}}>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
        <br />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <br />
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      </div>
    </>
    
  )
}

export default Login