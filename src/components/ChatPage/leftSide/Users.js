
import { useState } from 'react';

function Users(props) {

    
    const { id, 
        name, 
        image, 
        lastMessageTime, 
        lastMessage, 
        unRead, 
        setCurrentChatId, 
        setContactFullPage ,
        setContacts,
        contacts,
        setContactToShow} = props;

    const [showContextMenu, setShowContextMenu] = useState(false);
    const [contextMenuPosition, setContextMenuPosition] = useState({ x: 0, y: 0 });

    function goToChat() {
        setCurrentChatId(id);
        setContactFullPage(false);
    }

    function handleRightClick(e) {
        e.preventDefault();
        if (showContextMenu == true) {
            setShowContextMenu(false);
            setContextMenuPosition({ x: 0, y: 0 })
        } else {
            setShowContextMenu(true); // Show the custom context menu
            setContextMenuPosition({ x: e.clientX, y: e.clientY }); // S
        }
    }

    function handleDeleteUser(e) {
        e.preventDefault();
        let updatedLst = contacts.filter((contact) => contact.id !== id);
        setContacts(updatedLst);
        setContactToShow(updatedLst)
        setShowContextMenu(false);
        setContextMenuPosition({ x: 0, y: 0 })
    }

    return (
        <>
            <li className="list-group-item d-flex contact-list-item contact-list-hover" onClick={goToChat} onContextMenu={handleRightClick}>
                {showContextMenu && (
                    <div
                        className="col-4 pt-1"
                        style={{ top: contextMenuPosition.y, left: contextMenuPosition.x }}
                    >
                        <button className='btn btn-danger' onClick={handleDeleteUser}>Delete</button>
                    </div>
                )}
                <div className="col-3 m-0">
                    <img src={image} className="rounded-circle profile-image"
                        alt="profile img"></img>
                </div>
                <div className="col-6">
                    <div className="row">
                        <span className="p-0 m-0">{name}</span>
                        <span className="p-0 text-muted">{lastMessage}</span>
                    </div>
                </div>
                <div className="col-2 text-end">
                    <div className="col-12 last-seen opacity">{lastMessageTime}</div>
                    <div>
                        {/*if lastSeen is 0, then don't show the badge*/}
                        {unRead ? <span className="badge bg-primary rounded-pill">{unRead}</span> : null}
                    </div>
                </div>

            </li>

        </>

    );
}

export default Users;