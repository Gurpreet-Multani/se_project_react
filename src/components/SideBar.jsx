function SideBar({ user, onLogout }) {
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
      <button onClick={onLogout} className="sidebar__logout">
        Log out
      </button>
    </div>
  );
}

export default SideBar;
