import React, { useState } from "react";

function NewPlantForm() {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: "",
  });

  function handleChange(e){
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  }

  function handleSubmit (e){
    e.preventDefault();
    fetch("https://phase2-week2-plantsy-code-challenge.onrender.com/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },







      body: JSON.stringify(formData),
    })
    .then((response)=>response.json())
    .then((newPlant)=>onAddPlant(newPlant));
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" />
        <input type="text" name="image" placeholder="/images/image_name" />
        <input type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
