

import TopBarLeftSide from './TopBarLeftSide';
import SearchContacts from './SearchContacts.js';
import Users from './Users';
import auth from '../../../services/auth-service';
import { useEffect, useState } from 'react';
import './LeftSide.css';
import get from '../../../services/get-service'

function LeftSide(props) {
    const { user,
        contacts,
        setContacts,
        setCurrentChatId,
        setAuthenticated,
        contactFullPage,
        setContactFullPage,
        currentChatId,
        newMsg,
        socket,
        setNewMsg } = props;

    const [contactToShow, setContactToShow] = useState(contacts);
    const [selectedContact, setSelectedContact] = useState(null);
    const [addContact, setAddContact] = useState(false);


    useEffect(() => {
        const getChatsData = async () => {
            // getting the contacts from the server
            let contactsData = await get.Chats();
            if (contactsData !== null) {
                console.log(contactsData)
                setContacts(contactsData);
                setContactToShow(contactsData);
            } else {
                setAuthenticated(false);
                auth.logout();
            }
        };
        // Invoking the asynchronous function
        getChatsData();
    }, [addContact, newMsg]);

    useEffect(() => {
        setContactToShow(contacts);
    }, [contacts]);

    if (socket) {
        socket.on('update-contact-list', (data) => {
            if(data.id === currentChatId) {
                setContactFullPage(true);
            }
            setAddContact(!addContact);
        })

        socket.on('alert', (data) => {
            alert(`${data.data.sender.username} sent you: ${data.data.content}`);
            setNewMsg(!newMsg);
        })
    }


    function showContacts() {
        if (contactToShow.length > 0) {
            contactToShow.sort((c1, c2) => {
                if (c1.lastMessage === null && c2.lastMessage === null) {
                    return 0;
                }
                if (c1.lastMessage === null) {
                    return 1;
                }
                if (c2.lastMessage === null) {
                    return -1;
                }
                return c2.lastMessage.created - c1.lastMessage.created;
            });

            return contactToShow.map((contact, index) => {

                // getting contactInformation

                return <Users key={index}
                    {...contact}
                    currentChatId={currentChatId}
                    setCurrentChatId={setCurrentChatId}
                    setContactFullPage={setContactFullPage}
                    contacts={contacts}
                    setContacts={setContacts}
                    setContactToShow={setContactToShow}
                    contactToShow={contactToShow}
                    contactFullPage={contactFullPage}
                    setSelectedContact={setSelectedContact}
                    selectedContact={selectedContact}
                    socket={socket}
                />
            });
        }
        else if (contacts.length === 0) {
            return <h5 className="NoContactsMessage">No Contacts Yet</h5>
        }
        else {
            return <h5 className="NoContactsFoundMessage">No Contact Found</h5>
        }
    }


    return (
        <div className="col-4 left-slide justify-content-between border-right left-chat">
            <TopBarLeftSide
                setAuthenticated={setAuthenticated}
                addContact={addContact}
                setAddContact={setAddContact}
                contacts={contacts}
                setContacts={setContacts}
                user={user}
                contactToShow={contactToShow}
                setContactToShow={setContactToShow}
                socket={socket} />
            <SearchContacts contacts={contacts} setContactToShow={setContactToShow} />
            <ul className="list-group contact-list" >
                {showContacts()}
            </ul>
        </div>
    )

}
export default LeftSide;