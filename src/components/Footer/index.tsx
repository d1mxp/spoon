import style from "./style.module.css";
import Logo from "../Logo/Logo";
import { DesktopMenu } from "../Header/DesktopMenu";

const Footer = () => {
  return (
    <div className={style.wrapper}>
      <footer className={style.container}>
        <div className={style.nav}>
          <Logo />

          <DesktopMenu />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
