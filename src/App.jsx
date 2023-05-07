import './App.css'

function App() {
  const handelFormData = (event) => {
    event.preventDefault()
    const form = event.target
    const name = form.name.value
    const email = form.email.value
    const newUser = {
      name,
      email
    }
    console.log(newUser);
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(newUser)
    })
      .then(res => res.json())
      .then(data =>{
         console.log(data) 
        if (data.insertedId){
          alert("User Added Succesfully")
          form.reset()
         }
        } )
  }

  return (
    <>
      <h1>Simple CRUD</h1>
      <div>
        <form onSubmit={handelFormData} className='formStyle'>
          <input className='inputStyle' type="text" name="name" id="" placeholder='Client Name' />
          <input className='inputStyle' type="email" name="email" id="" placeholder='Client Email' />
          <button type="submit">Submit</button>
        </form>

      </div>
    </>
  )
}

export default App
