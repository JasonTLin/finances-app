import React from 'react'
import { connect } from 'react-redux'
import DropdownList from 'react-widgets/lib/DropdownList'
import NumberPicker from 'react-widgets/lib/NumberPicker'
import DateTimePicker from 'react-widgets/lib/DateTimePicker'
import moment from 'moment'
import momentLocalizer from 'react-widgets-moment';
import simpleNumberLocalizer from 'react-widgets-simple-number';
import { createlistItem } from '../store/actions/Actions';

import 'react-widgets/dist/css/react-widgets.css';

momentLocalizer(moment)
simpleNumberLocalizer()

const data = ['Food', 'Refreshments', 'Anime', 'Transportation', 'Events', 'Other']


class Form extends React.Component {
    state = {
        item : "Food",
        amount : 0,
        dateTime : new Date()
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createlistItem(this.state)
    }

    render(){
        return(
            <div className="content-section">
            <form onSubmit={this.handleSubmit}>
                <DropdownList className="form-section"
                    item = {this.state.item}
                    data = {data}
                    defaultValue = {"Food"}
                    onChange = {item => this.setState({item})}
                />
                <NumberPicker className="form-section"
                    format="$####.00"
                    amount = {this.state.amount}
                    onChange = {amount => this.setState({amount})}
                />
                <DateTimePicker className="form-section"
                    dateTime = {this.state.dateTime}
                    defaultValue = {new Date()}
                    onChange = {dateTime => this.setState({dateTime})}
                />
            <button className="btn btn-primary" type="submit">Submit</button>
            </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        createlistItem: (listItem) => dispatch(createlistItem(listItem))
    }
}


export default connect(null, mapDispatchToProps)(Form)
