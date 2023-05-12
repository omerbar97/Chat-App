


function TopBarRightSlide(props) {
    // const { currentUser } = Data();
    const { currentUser } = props;

    return (
        <nav className="navbar navbar-expand-sm dark-blue1 top-chat small-nav p-0 m-0 rightNav">
            <div className="container-fluid small-screen">
                <img
                    src={currentUser.image}
                    className="rounded-circle topBarRightSlide profile-image"
                    alt="chatUserImg"
                />
                <div className="col-8">
                    <div>
                        <div className="row mt-0 mb-0">
                            <div class="profile-nav-chat-info">
                                <h6 className="profile-text-chat">{currentUser.display}</h6>
                                <p className="profile-text-about">When life's give you lemon, make lemonad!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-1">
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={22}
                            height={22}
                            fill="currentColor"
                            className="bi bi-search mx-4"
                            viewBox="0 0 16 16"
                        >
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                    </span>
                </div>
                <div className="col-1">
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={22}
                            height={22}
                            fill="currentColor"
                            className="bi bi-three-dots-vertical mx-3"
                            viewBox="0 0 16 16"
                        >
                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                        </svg>
                    </span>
                </div>
            </div>
        </nav>

    );
}
export default TopBarRightSlide;
