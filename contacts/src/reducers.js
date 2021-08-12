var initialState = {
    contacts: [{name: 'Cassie', phone: '555-5678'}] 
};

export function contacts (state, action) {
    if (state === undefined) {
        return initialState;
    }

    switch (action.type) {
        case 'ADD_CONTACT':
            let new_state = Object.assign(
                {}, state, {contacts: []});

            state.contacts.forEach((old_contact, index) => {
                let new_contact = Object.assign({}, old_contact);
                new_state.contacts.push(new_contact);
            });

            new_state.contacts.push(action.data);
            return new_state;

        default:
            return state;
    }

    return state;
}

export default contacts;