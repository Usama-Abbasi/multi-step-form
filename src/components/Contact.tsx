import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useDispatch} from 'react-redux';
import {addEmail,addPhoneNo} from '..//Redux/Slice';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
let ContactSchema = yup.object().shape({
    email: yup.string().email().required('This field is required.'),
    phoneno: yup.string()
    .min(11,"Minimum 11 digits")
    .max(13,'Maximum 12 Digits')
    .required('This field is required.'),

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
const Contact: React.FC<Props> = ({ handleNext }) => {
    const dispatch = useDispatch();
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Contact Information
                </Typography>
                <Formik
                    initialValues={{
                        email: "",
                        phoneno: "",
                    }}
                    validationSchema={ContactSchema}
                    onSubmit={values => {
                        dispatch(addEmail(values.email));
                        dispatch(addPhoneNo(values.phoneno));
                        // console.log(values);
                        handleNext();
                    }}
                >
                    {({ errors, handleChange, touched }) => (
                        <Form className={classes.form}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        // error={errors.firstName && touched.firstName}
                                        autoComplete="email"
                                        name="email"
                                        variant="outlined"
                                        fullWidth
                                        onChange={handleChange}
                                        id="email"
                                        label="First Email"
                                        autoFocus
                                        helperText={
                                            <span style={{color:'red'}}>{
                                            errors.email && touched.email
                                                ? errors.email
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
                                        id="phoneno"
                                        label="Enter Phone No"
                                        name="phoneno"
                                        autoComplete="phoneno"
                                        helperText={
                                            <span style={{color:'red'}}>{
                                            errors.phoneno && touched.phoneno
                                                ? errors.phoneno
                                                : null}</span>
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
export default Contact;