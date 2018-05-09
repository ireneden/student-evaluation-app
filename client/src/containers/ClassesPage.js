import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {getClasses} from '../actions/classes'
import {Link} from 'react-router-dom'
import ClassForm from './ClassForm'
import Paper from 'material-ui/Paper'

class ClassesPage extends PureComponent {

    componentWillMount(){
        this.props.getClasses()
    }

    render(){
        const {classes} = this.props
        const {currentUser} = this.props
        if (this.props.currentUser)
        return(
            <Paper className="outer-paper">
            <h2>Add a new class</h2>
            <p>Please make sure to insert the date in MM/DD/YYYY or MM-DD-YYYY format</p>
            <ClassForm />
            <h2>All classes: </h2>
            { classes.map(classes =>
                <div className= "classPage">
                <Link to={`/classes/${classes.batchNumber}`}><h3>BATCH NUMBER {classes.batchNumber}  -   Start Date: {classes.startDate}  End Date: {classes.endDate}</h3></Link>
                </div>
            )}
            </Paper>
        )
    }
}

const mapStateToProps = (state) => ({
    classes: state.classes,
    currentUser: state.currentUser
})

export default connect (mapStateToProps, {getClasses})(ClassesPage)