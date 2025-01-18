import "./App.css";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    isVisible: false,
    mode: "",
    favCar: "",
    pushNotifications: "",
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;

    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(event){
    event.preventDefault();
    console.log("Form Data Submitted: ", formData);
  }

  return (
    
    <div className="App">
      <form className="form-container" onSubmit={handleSubmit}>
      <h2 className="form-title">User Registration Form</h2>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            placeholder="First name"
            onChange={changeHandler}
            name="firstName"
            value={formData.firstName}
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            placeholder="Last name"
            onChange={changeHandler}
            name="lastName"
            value={formData.lastName}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            placeholder="Enter your email here"
            onChange={changeHandler}
            name="email"
            value={formData.email}
          />
        </div>

        <div className="form-group">
          <label htmlFor="country">Country</label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={changeHandler}
          >
            <option value="">Select a country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="streetAddress">Street Address</label>
          <input
            type="text"
            placeholder="1234 Main St"
            onChange={changeHandler}
            name="streetAddress"
            value={formData.streetAddress}
          />
        </div>

        <div className="form-group">
          <label htmlFor="city">City</label>
          <select
            id="city"
            name="city"
            value={formData.city}
            onChange={changeHandler}
          >
            <option value="">Select a city</option>
            <option value="Asansol">Asansol</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Durgapur">Durgapur</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="state">State / Province</label>
          <input
            type="text"
            placeholder="West Bengal"
            onChange={changeHandler}
            name="state"
            value={formData.state}
          />
        </div>

        <div className="form-group">
          <label htmlFor="zipCode">ZIP / Postal Code</label>
          <input
            type="text"
            placeholder="713301"
            onChange={changeHandler}
            name="zipCode"
            value={formData.zipCode}
          />
        </div>

        <div className="form-group">
          <label>
            <input
              type="checkbox"
              onChange={changeHandler}
              name="isVisible"
              checked={formData.isVisible}
            />
            Comments
          </label>
          Get notified when someones posts a comment on a posting.
        </div>

        <div className="form-group">
          <label>
            <input
              type="checkbox"
              onChange={changeHandler}
              name="isVisible"
              checked={formData.isVisible}
            />
            Offers
          </label>
          Get notified when offers are available.
        </div>

        <div className="push-notifications">
          <h3>Push Notifications</h3>
          <p>These are delivered via SMS to your mobile phone.</p>

          <div className="radio-group">
            <input
              type="radio"
              id="everything"
              name="pushNotifications"
              value="everything"
              onChange={changeHandler}
              checked={formData.pushNotifications === "everything"}
            />
            <label htmlFor="everything">Everything</label>
          </div>

          <div className="radio-group">
            <input
              type="radio"
              id="sameAsEmail"
              name="pushNotifications"
              value="sameAsEmail"
              onChange={changeHandler}
              checked={formData.pushNotifications === "sameAsEmail"}
            />
            <label htmlFor="sameAsEmail">Same as email</label>
          </div>

          <div className="radio-group">
            <input
              type="radio"
              id="noPushNotifications"
              name="pushNotifications"
              value="noPushNotifications"
              onChange={changeHandler}
              checked={formData.pushNotifications === "noPushNotifications"}
            />
            <label htmlFor="noPushNotifications">No push notifications</label>
          </div>
        </div>

    
          <button type="submit" className="submit-button">
            Save
          </button>
        
      </form>
    </div>
  );
}

export default App;

// import logo from "./logo.svg";
// import "./App.css";
// import { useState } from "react";
// function App(event) {
//   // const[firstName, setFirstName] = useState("");
//   // const[lastName, setlastName] = useState("");

//   // function changeHandler(event){

//   //   // console.log("printing first name:");
//   //   // console.log(event.target.value);
//   //   setFirstName(event.target.value);
//   // }

//   // function changelastNameHandler(event){
//   //   // console.log("printing last name:");
//   //   // console.log(event.target.value);
//   //   setlastName(event.target.value);

//   // }

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     country: "",
//     streetAddress: "",
//     city: "",
//     state: "",
//     zipCode: "",
//     // comments: "",
//     // isVisible: "true",
//     // favCar: "favCar",
//   });
//   console.log(formData);
//   console.log(formData.comments);

//   function changeHandler(event) {
//     const { name, value, checked, type } = event.target;

//     setFormData((prevFormData) => {
//       return {
//         ...prevFormData,
//         [name]: type === "checkbox" ? checked : value,
//       };
//     });
//   }

//   return (
//     <div className="App">
//       <form>
//         <label htmlFor="first name">First Name</label>
//         <br />
//         <input
//           type="text"
//           placeholder="First name"
//           onChange={changeHandler}
//           name="firstName"
//           value={formData.firstName}
//         />
//         <br />

//         <label htmlFor="last name">Last Name</label>
//         <br />
//         <input
//           type="text"
//           placeholder="last name"
//           onChange={changeHandler}
//           name="lastName"
//           value={formData.lastName}
//         />
//         <br />

//         <label htmlFor="email">Email address</label>
//         <br />
//         <input
//           type="email"
//           placeholder="Enter Your email here"
//           onChange={changeHandler}
//           name="email"
//           value={formData.email}
//         />
//         <br />

//         <label htmlFor="country">country</label>
//         <br />
//         <input
//           type="country"
//           placeholder="India"
//           onChange={changeHandler}
//           name="country"
//           value={formData.country}
//         />
//         <br />

//         <label htmlFor="streetAddress">Street Address</label>
//         <br />
//         <input
//           type="streetAddress"
//           placeholder="1234 Main St"
//           onChange={changeHandler}
//           name="streetAddress"
//           value={formData.country}
//         />
//         <br />

//         {/* city drop down section  */}
//         <label htmlFor="city">City</label>
//         <br />
//         <select
//           id="city"
//           name="city"
//           value={formData.city}
//           onChange={changeHandler}
//         >
//           <option value="">Select a city</option>
//           <option value="Asansol">Asansol</option>
//           <option value="Kolkata">Kolkata</option>
//           <option value="Durgapur">Durgapur</option>
//           <option value="Siliguri">Siliguri</option>
//         </select>
//         <br />

//         <br />
//         <label htmlFor="state">State/province </label>
//         <br />
//         <input
//           type="state"
//           placeholder="West Bengal"
//           onChange={changeHandler}
//           name="state"
//           value={formData.state}
//         />
//         <br />

//         <label htmlFor="zipCode">zip/Postal code </label>
//         <br />
//         <input
//           type="zipCode"
//           placeholder="110083"
//           onChange={changeHandler}
//           name="zipCode"
//           value={formData.zipCode}
//         />
//         <br />

//         <label>
//           <input
//             type="checkbox"
//             onChange={changeHandler}
//             name="isVisible"
//             id="isVisible"
//             checked={formData.isVisible}
//           />
//           comments
//           <br />
//           Get notified when someone posts a comment on a posting.
//         </label>
//         <label htmlFor="isVisible">Am I visible ?</label>
//         <br />
//         <br />

//         <input
//           type="radio"
//           onChange={changeHandler}
//           name="mode"
//           value="Online-Mode"
//           id="Online-Mode"
//           checked={formData.mode === "Online-Mode"}
//         />
//         <label htmlFor="Online-Mode">Online-Mode</label>

//         <input
//           type="radio"
//           onChange={changeHandler}
//           name="mode"
//           value="Offline-Mode"
//           id="Offline-Mode "
//           checked={formData.mode === "Offline-Mode"}
//         />
//         <label htmlFor="Offline-Mode">Offline-Mode</label>

//         <br />
//         <br />

//         <select
//           name="favCar"
//           id="favCar"
//           value={formData.favCar}
//           onChange={changeHandler}
//         >
//           <option value="Scorpio">Scorpio</option>
//           <option value="Fortuner">Fortuner</option>
//           <option value="Thaar">Thaar</option>
//           <option value="Mercedes">Mercedes</option>
//         </select>

//         {/* <input type="submit" value="sumbit"/> */}
//       </form>
//     </div>
//   );
// }

// export default App;
