const redux = require("redux");

const initialState = {
    contacts: [
        {
            name: "Tommy Oliver",
            phone: "925-867-5309",
            email: "thegreenranger@powerrangers.com"
        },
        {
            name: "Danielle Walker",
            phone: "801-633-4338",
            email: "yeller22@gmail.com"
        }
    ],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CONTACT":
            return {
                contacts: [...state.contacts, action.contact]
            }
        case "REMOVE_CONTACT":
            return {
                contacts: state.contacts.filter(contact => contact.name !== action.name)
            }
        default:
            return state;
    }
};
const store = redux.createStore(reducer);
store.subscribe(() => console.log(store.getState()));

const addContact = (contact) => {
    store.dispatch({
        type: "ADD_CONTACT",
        contact
    });
}

addContact({
    name: "Ben Turner",
    phone: "555-555-5555",
    email: "ben@gmail.com"
});

const removeContact = name => {
    store.dispatch({
        type: "REMOVE_CONTACT",
        name
    })
}

removeContact("Danielle Walker");

// store.dispatch(add);
// store.dispatch(remove);
console.log(store.getState());