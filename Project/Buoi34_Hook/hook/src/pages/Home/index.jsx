import React, { useState } from "react";
import Game from "../Game";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";

const schema = yup.object().shape({
  username: yup.string().required("This field is required"),
  email: yup.string().required("This field is required").email("Email is invalid"),
  phone: yup.string().required("This field is required").matches(/^[0-9]+$/g)
})

const Home = () => {
  const [ isGameStarted, setIsGameStarted ] = useState(false);

  const { handleChange, values, errors, touched, handleBlur, setTouched, isValid } = useFormik({
    initialValues: {
      username: "danhngo",
      email: "danh@gmail.com",
      phone: "0963705653",
    },
    validationSchema: schema,
    validateOnMount: true,
  })

  const dispatch = useDispatch ();

  const handleSubmit = (event) => {
    event.preventDefault();
    setTouched({
      username: true,
      email: true,
      phone: true,
    })
    if(!isValid) return;
    setIsGameStarted(true);

    const newPlayer = {
      ...values,
      totalPoint: 25000,
      cards: []
    }

    dispatch({
      type: "ADD_PLAYER",
      payload: newPlayer 
    })

    console.log("value", values);
    console.log("error", errors);
    console.log("touched", touched);
  }

  return (
    <>
      { isGameStarted ? (<Game />) : (
        <div
        className="text-center"
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 className="diplay-4 mb-5"> Welcome to Pocker Center</h1>
        <h3>Fill your info and start</h3>
        <form className="w-25 mx-auto" onSubmit={handleSubmit}>
          <input
            name="username"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.username}
            type="input"
            placeholder="username"
            className="w-100 form-control mb-3"
          />
          { touched.username && <p className="text-danger">{errors.username}</p>}
          <input
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            type="input"
            placeholder="email"
            className="w-100 form-control mb-3"
          />
          { touched.email && <p className="text-danger">{errors.email}</p>}
          <input
            name="phone"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.phone}
            type="input"
            placeholder="phone"
            className="w-100 form-control mb-3"
          />
          { touched.phone && <p className="text-danger">{errors.phone}</p>}
          <button className="btn btn-success">Start new Game</button>
        </form>
      </div>
      )}
    </>
  );
};

export default Home;
