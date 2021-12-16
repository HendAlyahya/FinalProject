import React from 'react'

function SingUp() {
    return (
        <div>
            
<div id="login-card" class="card">
<div class="card-body">
  <h2 class="text-center">Login form</h2>
  <br/>
  <form action="/action_page.php">
    <div class="form-group">
      <input type="email" class="form-control" id="email" placeholder="Enter email" name="email"></input>
    </div>
    <div class="form-group">
      <input type="password" class="form-control" id="email" placeholder="Enter password" name="pswd"></input>
    </div>
    <button type="submit" id="button" class="btn btn-primary deep-purple btn-block ">Submit</button>
<br/>
    <br/>
   
    <div id="btn" class="text-center">
   <button type="button" class="btn btn-primary btn-circle btn-sm"><i class="fa fa-facebook"></i></button>
   <button type="button" class="btn btn-danger btn-circle btn-sm"><i class="fa fa-google"></i></button>
   <button type="button" class="btn btn-info btn-circle btn-sm"><i class="fa fa-twitter"></i></button>
   </div>

  </form>
  </div>
  </div>
            
        </div>
    )
}

export default SingUp



