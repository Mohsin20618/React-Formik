import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
    age:yup
    .number('Enter your age in numbers')
    .required('age is required')
    .positive('please enter age correctly')
    .integer('Number should be an integer'),
    website:yup
    .string('Enter url')
    .required('url is required')
    .url('please enter valid url e.g: https://somewebsite.com '),
});


  function App() {
    const formik = useFormik({
      initialValues: {
        email: 'foobar@example.com',
        password: 'foobar',
        age: '',
        website: '',
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
        // alert(JSON.stringify(values, null, 2));
        alert("Form Submit successfully");
      },
    });
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >

            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Form
            </Typography>

          </Toolbar>
        </AppBar>
        <div >
          <h1>Registration Form</h1>
          <form onSubmit={formik.handleSubmit} >
            <TextField
             fullWidth='100%'
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <br/><br/>
            <TextField
              fullWidth
              id="age"
              name="age"
              label="Age"
             
              value={formik.values.age}
              onChange={formik.handleChange}
              error={formik.touched.age && Boolean(formik.errors.age)}
              helperText={formik.touched.age && formik.errors.age}
            />
             <br/><br/>
             <TextField
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <br/><br/>
            <TextField
             fullWidth='100%'
              id="website"
              name="website"
              label="Website"
              value={formik.values.website}
              onChange={formik.handleChange}
              error={formik.touched.website && Boolean(formik.errors.website)}
              helperText={formik.touched.website && formik.errors.website}
            />
            
            <Button color="primary" variant="contained" fullWidth type="submit">
              Submit
            </Button>
          </form>
        </div>
      </div>

    );
  }

  export default App;
