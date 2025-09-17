import HeaderPFP from "../assets/HeaderPFP.svg";

function SideBar() {
  return (
    <div className="Sidebar">
      <img className="Sidebar__img" src={HeaderPFP} alt="PFP" />
      <p className="Sidebar__name">Terrence Tegegne</p>
    </div>
  );
}

export default SideBar;
