import React from 'react'
import { useSelector} from 'react-redux';
import { data } from '..//Redux/Slice';
import { Grid, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        backButton: {
            marginRight: theme.spacing(1),
        },
        instructions: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
        },
        submit: {
            margin: theme.spacing(3, 0, 2),
        },

    }),
);
interface Props {
    handleNext: () => void
}
const UserData: React.FC<Props> = ({ handleNext }) => {
    const handleSubmit = () => {
        handleNext();
    }
    const classes = useStyles();
    const { user } = useSelector(data);
    const { firstname, lastname, fname, address, email, phoneno } = user
    return (
        <div>
            <div className={classes.root}>
                <Grid container alignItems="center" justify="center" xs={12} >
                    <Grid item xs={12} sm={4} style={{border:'solid 2px black'}}>
                        <Paper elevation={3} >
                            <Typography variant="h4">Your Data</Typography>
                            <Typography variant="h6" align="left" style={{ marginLeft: '10px' }}>First Name: {firstname}</Typography>
                            <Typography variant="h6" align="left" style={{ marginLeft: '10px' }}>Last Name: {lastname}</Typography>
                            <Typography variant="h6" align="left" style={{ marginLeft: '10px' }}>Father Name: {fname}</Typography>
                            <Typography variant="h6" align="left" style={{ marginLeft: '10px' }}>Address: {address}</Typography>
                            <Typography variant="h6" align="left" style={{ marginLeft: '10px' }}>Email: {email}</Typography>
                            <Typography variant="h6" align="left" style={{ marginLeft: '10px' }}>Phone No: {phoneno}</Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
            <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={handleSubmit}
                        style={{width:'30%'}}
                    >
                        Submit
                        </Button>
            <div>
            </div>
        </div>
    )
}
export default UserData;