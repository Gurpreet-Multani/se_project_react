function SideBar({ user, onLogout, onChangeProfile }) {
  return (
    <div className="sidebar">
      <div className="sidebar__user">
        <img
          src={user?.avatar}
          alt={`${user?.name}'s avatar`}
          className="sidebar__avatar"
        />
        <p className="sidebar__username">{user?.name}</p>
      </div>
      <button
        type="button"
        onClick={onChangeProfile}
        className="sidebar__button"
      >
        Change profile data
      </button>
      <button onClick={onLogout} className="sidebar__logout sidebar__button">
        Log out
      </button>
    </div>
  );
}

export default SideBar;
