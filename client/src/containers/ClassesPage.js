
import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {addClass} from '../actions/classes'
import {Link} from 'react-router-dom'
import ClassForm from './ClassForm'
import Paper from 'material-ui/Paper'

class ClassesPage extends PureComponent {

    componentWillMount(){
        this.props.addClass()
    }

    render(){
        const {classes} = this.props

        return(
            <Paper className="outer-paper">
            <h2>Add a new class</h2>
            <ClassForm />
            { classes.map(classes =>
                <div className= "classPage">
                <h2>All classes: </h2>
                <Link to={`/classes/${classes.id}`}><h3>Batch number {classes.batchNumber}</h3></Link>
                </div>
            )}
            </Paper>
        )
    }
}

const mapStateToProps = (state) => ({
    classes: state.classes
})

export default connect (mapStateToProps, {addClass})(ClassesPage)