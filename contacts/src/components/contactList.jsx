import React, { Component } from 'react';

import { connect } from 'react-redux';

class ContactList extends Component {

    render(){
        return (
           <div> 
            <h2>Contacts</h2>
            <ul>
                {this.props.contacts.map((person) =>
                    <li key={person.name}>{person.name} - {person.phone}</li>
                )}
                
            </ul>
           </div> 
        );
    }

}

function mapStateToProps (state) {
    return {
        contacts: state.contacts//this contacts: is from reducer
    }
}

var ConnectedContacts = connect(mapStateToProps)(ContactList)

export default ConnectedContacts;