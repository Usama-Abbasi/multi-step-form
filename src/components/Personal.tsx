import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Formik, Form } from 'formik';
import {useDispatch} from 'react-redux';
import {addFirstname,addLastname,addFathername,addAddress} from '..//Redux/Slice';
import * as yup from 'yup';
let PersonalSchema = yup.object().shape({
    firstName: yup.string().required('This field is required.'),
    lastName: yup.string().required('This field is required.'),
    father: yup.string().required('This field is required.'),
    address: yup.string()
        .required('This field is required.')
});
const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));
interface Props {
    handleNext: () => void
}
const Personal: React.FC<Props> = ({ handleNext }) => {
     const dispatch = useDispatch();
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Personal Data
                </Typography>
                <Formik
                    initialValues={{
                        firstName: "",
                        lastName: "",
                        father: "",
                        address: ""
                    }}
                    validationSchema={PersonalSchema}
                    onSubmit={values => {
                        // console.log(values);
                        dispatch(addFirstname(values.firstName));
                        dispatch(addLastname(values.lastName));
                        dispatch(addFathername(values.father));
                        dispatch(addAddress(values.address));
                        handleNext();
                    }}
                >
                    {({ errors, handleChange, touched }) => (
                        <Form className={classes.form}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        // error={errors.firstName && touched.firstName}
                                        autoComplete="fname"
                                        name="firstName"
                                        variant="outlined"
                                        fullWidth
                                        onChange={handleChange}
                                        id="firstName"
                                        label="First Name"
                                        autoFocus
                                        helperText={
                                           <span style={{color:'red'}}> {errors.firstName && touched.firstName
                                                ? errors.firstName
                                                : null}</span>
                                        }
                                    />
                                </Grid>
                                <Grid item xs={12} >
                                    <TextField
                                        // error={errors.lastName && touched.lastName}
                                        variant="outlined"
                                        fullWidth
                                        onChange={handleChange}
                                        id="lastName"
                                        label="Last Name"
                                        name="lastName"
                                        autoComplete="lname"
                                        helperText={
                                            <span style={{color:'red'}}>{
                                            errors.lastName && touched.lastName
                                                ? errors.lastName
                                                : null}
                                                </span>
                                        }
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        // error={errors.email && touched.email}
                                        variant="outlined"
                                        fullWidth
                                        onChange={handleChange}
                                        id="father"
                                        label="Father Name"
                                        name="father"
                                        autoComplete="father"
                                        helperText={
                                            <span style={{color:'red'}}>
                                            {errors.father && touched.father ? errors.father : null}</span>
                                        }
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        // error={errors.password && touched.password}
                                        variant="outlined"
                                        fullWidth
                                        onChange={handleChange}
                                        name="address"
                                        label="Address"
                                        type="text"
                                        id="address"
                                        autoComplete="address"
                                        helperText={
                                            <span style={{color:'red'}}>
                                            {errors.address && touched.address
                                                ? errors.address
                                                : null}
                                                </span>
                                        }
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Next
                        </Button>
                        </Form>

                    )}
                </Formik>
            </div>
        </Container>
    );
};
export default Personal;