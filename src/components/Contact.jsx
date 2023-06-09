import React from "react";
import { TextField, Box, MenuItem } from "@mui/material";
import { classes } from "../constants";

const Contact = () => {
  return (
    <div id="contact" className="font-poppins">
      <div className="ml-12 mb-12 mt-14">
        <h1 className="text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-blue-700 drop-shadow-lg">
          Interested?
        </h1>
        <p className="text-sm text-gray-500 tracking-wider drop-shadow-lg">
          Sign Up Now to check class availability.
        </p>
      </div>

      <form
        action="https://getform.io/f/d25d9251-7a81-4330-afc5-44c0f0c49ffb"
        method="POST"
      >
        <div className="flex flex-col gap-4 w-3/4 mx-auto">
          <TextField label="Name" variant="outlined" required name="name" />
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            required
            name="email"
          />
          <TextField
            label="Phone Number"
            variant="outlined"
            required
            name="phone"
          />
          <TextField
            name="class"
            select
            defaultValue={""}
            label="Select a class"

            required
          >
            {classes.map((item) => (
              <MenuItem key={item.id} value={item.title}>
                {item.title}
              </MenuItem>
            ))}
          </TextField>
          <TextField name='message' label="Message" helperText='Leave a message' multiline rows={5}/>

         
          <button className="btn btn-primary w-3/4 mx-auto" type="submit">
            Check availability now
          </button>
          <p className="text-error text-xs text-center -mt-2">
            * Please allow up to 48 hours for a response
          </p>
        </div>
      </form>
    </div>
  );
};

export default Contact;
