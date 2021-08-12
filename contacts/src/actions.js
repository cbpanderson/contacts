export function addContact (data) {
    //data => {name, phone}
    return {
        type: 'ADD_CONTACT',
        data: data
    }
}