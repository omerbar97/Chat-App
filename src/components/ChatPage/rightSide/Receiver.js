


function Receiver({ message , time}) {
    return (
        <div className="chat-bubble-left">
            {message}
            <div className="chat-bubble-right-time">{time}</div>
        </div>
    )
}
export default Receiver;