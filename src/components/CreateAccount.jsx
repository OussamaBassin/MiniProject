import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { addFetchedUsers } from "@/redux/userSlice";

const CreateAccount = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    age: "",
    admin: false,
    pseudo: "",
    MotDePasse: "",
    confirmMotDePasse: "",
    couleur: "orange", // Default value for the select input
    Devise: "",
    Pays: "",
    avatar: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked, tagName } = e.target;
  
    setFormData((prev) => ({
      ...prev,
      [name]: tagName === "SELECT" ? value : type === "checkbox" ? checked : value,
    }));
  }

  const sendNewUser = async (id) => {
    try {
      await axios.post("https://670ed5b73e7151861655eaa3.mockapi.io/Stagiaire", {
        ...formData,
        id: id,
      });
      dispatch(addFetchedUsers({...formData , id: id}));
      console.log(formData);
    } catch (error) {
      alert(`We caught an error: ${error}`);
    }
  };

  const passwordVerification = () => {
    const validationErrors = [];
    const password = formData.MotDePasse || ""; // Ensure it's a string

    if (!password.match(/[A-Z]/)) validationErrors.push("Password must have an uppercase letter.");
    if (!password.match(/[a-z]/)) validationErrors.push("Password must have a lowercase letter.");
    if (!password.match(/[0-9]/)) validationErrors.push("Password must have a number.");
    if (!password.match(/[^a-zA-Z0-9]/)) validationErrors.push("Password must have a special character.");
    if (password.length < 8) validationErrors.push("Password must be at least 8 characters.");
    if (password !== formData.confirmMotDePasse) validationErrors.push("Passwords do not match.");

    if (validationErrors.length > 0) {
      validationErrors.forEach((error) => alert(error));
      return false;
    }
    return true;
  };

  const validateFormFields = () => {
    if (Object.values(formData).some((value) => value === "")) {
      alert("All fields are required.");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random());

    if (validateFormFields() && passwordVerification()) {
      sendNewUser(id);
      navigate(`/accueil/${id}`);
      console.log(formData);
    }
  };

  return (
    <>
      <main className="w-screen h-full flex flex-col items-center">
        <h2 className="font-bold text-2xl">Create Account</h2>
        <form onSubmit={handleSubmit} className="w-1/2 flex flex-col items-center p-4 justify-evenly h-full">
          <div className="w-full flex gap-2">
            <div>
              <label>First Name:</label>
              <Input type="text" className="bg-white text-gray-700" name="prenom" value={formData.prenom} onChange={handleChange} />
            </div>
            <div>
              <label>Last Name:</label>
              <Input type="text" className="bg-white text-gray-700" name="nom" value={formData.nom} onChange={handleChange} />
            </div>
            <div>
              <label>Email:</label>
              <Input type="email" className="bg-white text-gray-700" name="email" value={formData.email} onChange={handleChange} />
            </div>
            <div>
              <label>Age:</label>
              <Input type="number" className="bg-white text-gray-700" name="age" value={formData.age} onChange={handleChange} />
            </div>
          </div>
          <div className="w-full flex gap-2">
            <div className="w-1/2 flex items-center gap-6">
              <label>Admin:</label>
              <input type="checkbox" className="w-5 h-5 border-none bg-white" name="admin" checked={formData.admin} onChange={handleChange} />
            </div>
            <div className="w-1/2">
              <label>Username:</label>
              <Input type="text" className="bg-white text-gray-700" name="pseudo" value={formData.pseudo} onChange={handleChange} />
            </div>
          </div>
          <div className="w-full flex gap-2">
            <div className="w-1/2">
              <label>Password:</label>
              <Input
                type="password"
                className="bg-white text-gray-700"
                name="MotDePasse"
                value={formData.MotDePasse}
                onChange={handleChange}
              />
            </div>
            <div className="w-1/2">
              <label>Confirm Password:</label>
              <Input
                type="password"
                name="confirmMotDePasse"
                value={formData.confirmMotDePasse}
                onChange={handleChange}
                className="bg-white text-gray-700"
              />
            </div>
          </div>
          <div className="w-full flex gap-2">
            <div>
              <label>Favorite Color:</label>
              <select
                name="couleur"
                value={formData.couleur}
                className="w-full py-1.5 px-0.5 rounded-sm"
                onChange={handleChange}
              >
                <option value="#FFA500">orange</option>
                <option value="#00008B">dark-blue</option>
                <option value="#555555">gray</option>
              </select>
            </div>
            <div>
              <label>Currency:</label>
              <Input type="text" className="bg-white text-gray-700" name="Devise" value={formData.Devise} onChange={handleChange} />
            </div>
            <div>
              <label>Country:</label>
              <Input type="text" className="bg-white text-gray-700" name="Pays" value={formData.Pays} onChange={handleChange} />
            </div>
            <div>
              <label>Avatar URL:</label>
              <Input type="text" className="bg-white text-gray-700" name="avatar" value={formData.avatar} onChange={handleChange} />
            </div>
          </div>
          <Button className="bg-orange-600" type="submit">
            Create Account
          </Button>
        </form>
      </main>
    </>
  );
};

export default CreateAccount;
