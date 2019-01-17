import React from "react";
import moment from 'moment';
import { connect } from 'react-redux'
import DropdownList from 'react-widgets/lib/DropdownList'
import NumberPicker from 'react-widgets/lib/NumberPicker'
import DateTimePicker from 'react-widgets/lib/DateTimePicker'
import momentLocalizer from 'react-widgets-moment';
import simpleNumberLocalizer from 'react-widgets-simple-number';
import Modal from 'react-responsive-modal';
import { updatelistItem } from '../store/actions/Actions';

import 'react-widgets/dist/css/react-widgets.css';

const data = ['Food', 'Refreshments', 'Anime', 'Transportation', 'Events', 'Other']

momentLocalizer(moment)
simpleNumberLocalizer()

class Update extends React.Component{
    handleupdate = (e) => {
        e.preventDefault();
        this.props.updatelistItem(this.props.listItem.id, this.state)
    }
    state = {
        open: false,
        item : this.props.listItem.item,
        amount : this.props.listItem.amount,
        dateTime : new Date(this.props.listItem.dateTime.seconds*1000)
    };

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };
    render(){
        return(
        <div className="buttonformat buttonright">
        <button className="buttonright" onClick={this.onOpenModal}>
        <i className="fas fa-pencil-alt"></i></button>
        <Modal open={this.state.open} onClose={this.onCloseModal} little>
            <form onSubmit={this.handleupdate} className="space">
                <DropdownList className="form-section"
                    item = {this.state.item}
                    data = {data}
                    defaultValue = {this.props.listItem.item}
                    onChange = {item => this.setState({item})}
                />
                <NumberPicker className="form-section"
                    format="$####.00"
                    amount = {this.state.amount}
                    defaultValue = {this.props.listItem.amount}
                    onChange = {amount => this.setState({amount})}
                />
                <DateTimePicker className="form-section"
                    dateTime = {this.state.dateTime}
                    defaultValue = {new Date(this.props.listItem.dateTime.seconds*1000)}
                    onChange = {dateTime => this.setState({dateTime})}
                />
            <button className="btn btn-primary" type="submit" onClick={this.onCloseModal}>Edit</button>
            </form>
        </Modal>
        </div>
        );
    }
};

const mapDispatchToProps = (dispatch) =>{
    return {
        updatelistItem: (id, listItem) => dispatch(updatelistItem(id, listItem))
    }
}



export default  connect(null, mapDispatchToProps)(Update);
