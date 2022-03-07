import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";

function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header__icon" />
      </IconButton>

      <img
        className="header__logo"
        src="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/tinder.png"
        alt=""
      />
      <IconButton>
        <ForumIcon />
      </IconButton>
    </div>
  );
}

export default Header;
