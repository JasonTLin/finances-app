import React from "react";
import { compose } from 'redux';
import Analytics from "./Analytics"
import Form from "./Form"
import List from "./List"
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'

class Dashboard extends React.Component{
    render(){
        const { listItems } = this.props;
        return(
        <div className="dashboard container">
            <div className="row">
                <div className="col-md-6">
                <Form/>
                <List listItems={listItems}/>
                </div>
                <div className="col-md-6">
                <Analytics listItems={listItems}/>
                </div>
            </div>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
    listItems: state.firestore.ordered.listItems
  }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
    { collection: 'listItems', orderBy:['dateTime', 'desc']}
        ])
    )(Dashboard);
