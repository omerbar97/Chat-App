


function Receiver({ message, time }) {

    // converting the time to hh:mm
    let createdDate = new Date(time);
    let hours = createdDate.getHours();
    let minutes = createdDate.getMinutes();
    time = hours + ":" + minutes;

    return (
        <div className="chat-bubble-right">
            {message}
            <div className="chat-bubble-right-time">{time}</div>
        </div>
    )
}
export default Receiver;