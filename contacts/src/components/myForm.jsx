
import React, { Component } from 'react';

import { connect } from 'react-redux';
import {addContact} from '../actions.js';

class MyForm extends Component {
    constructor(props) {
        super(props);

        this.state = {name: '', phone: ''}
    }

    submit(event) {
        event.preventDefault();
        this.props.onSubmit(this.state);
    }

    update_state(event, attr) {
        this.setState({[attr]: event.target.value});
    }

    render(){
        return (
           <form onSubmit={(e) => this.submit(e)}>
               Name: <input onChange={event => this.update_state(event, 'name')}/>
               <br />
               Phone: <input onChange={event => this.update_state(event, 'phone')}/>
               <br />
               <button type="Submit">Submit</button>
            </form>
        );
    }

}

function mapStateToProps (state) { //functions you want to come in to component from data store
    return {};
}

function mapDispatchToProps (dispatch) { //dispatch sends data to data store
    return {
        onSubmit: function (data) { //whatever we call this function we will get as props above
            dispatch(addContact(data))//calls our action and sends it the data
        }
    }
}

var ConnectedForm = connect(mapStateToProps, mapDispatchToProps)(MyForm)


export default ConnectedForm;