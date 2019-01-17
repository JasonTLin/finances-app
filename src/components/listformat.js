import React from "react";
import moment from 'moment';
import { connect } from 'react-redux';
import Modal from 'react-responsive-modal';
import { deletelistItem } from '../store/actions/Actions';
import Update from "./updatelistformat";

class Listformat extends React.Component{
    handledelete = (e) => {
        e.preventDefault();
        this.props.deletelistItem(this.props.listItem.id)
    }

    state = {
        open: false,
    };

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    render(){
    const {listItem} = this.props
    return(
    <div className="container list-section">
        <p className="listformat">${listItem.amount}</p>

{/*Delete Logic*/}
        <button className="buttonright" onClick={this.onOpenModal}>
        <i className="fas fa-trash-alt"></i></button>

        <Modal open={this.state.open} onClose={this.onCloseModal} little>
        <div className="container space">
            <h3>Are you sure?</h3>
        </div>
        <div className="deletespace">
            <button type="button" class="btn btn-danger" onClick={this.handledelete}>
            Delete</button>
        </div>
        </Modal>
{/*Update Logic*/}
    <Update listItem={listItem}/>

    <p className="listformat listtime">
    {moment(listItem.dateTime.toDate()).format('ll')}</p>
    <p className="listformat listitem">{listItem.item}</p>
    </div>
    )
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        deletelistItem: (id) => dispatch(deletelistItem(id))
    }
}

export default connect(null, mapDispatchToProps)(Listformat)
