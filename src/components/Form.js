import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [submittedData, setSubmittedData] = useState([])
  const [errors, setErrors] = useState([])

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

//
function handleSubmit(event) {
  event.preventDefault();
  if(firstName.length > 0 && lastName.length > 0){
  const formData = {
    firstName: firstName,
    lastName: lastName,
  };
  const dataArray = [...submittedData,formData]
  setSubmittedData(dataArray )
  setFirstName("");
  setLastName("");
  setErrors([])

} else {
  setErrors(["please enter name"])
}

}

// submitted data display
const listOfSubmissions = submittedData.map((data,index) => 
<div key={index}> {data.firstName} {data.lastName} </div> ) 

//error message display
const errorMessage = errors.length > 0 //mabasty awaya agar error message ka lasare nusitman away naw (setErrors)
  ? errors.map((error, index) => (       //gawratr bu la 0 binawa ,agar 100 dabneyn nayatawa error messageaka
      <p key={index} style={{ color: "red" }}>
        {error}
      </p>
    ))
  : null

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
      </form>

      {errorMessage}

    <h3>Submitted Data</h3>
      {listOfSubmissions}
      </div>
  );
}

export default Form;
