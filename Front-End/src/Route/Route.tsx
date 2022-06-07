import { Route, Switch } from "react-router-dom";
import home from "../Page/Home";
import menu from "../Page/Menu";
import contact from "../Page/Contact";
import about from "../Page/About";
import oneColumn from "../Page/OneColumn";
import twoColumn from "../Page/TwoColumn";
import sidebarPost from "../Page/SidebarPost";
import seConnecter from "../Page/Administrateur";

const Router = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact={true} component={home} />
        <Route path="/menu" exact={true} component={menu} />
        <Route path="/contact" exact={true} component={contact} />
        <Route path="/about" exact={true} component={about} />
        <Route path="/oneColumn" exact={true} component={oneColumn} />
        <Route path="/twoColumn" exact={true} component={twoColumn} />
        <Route path="/sidebarPost" exact={true} component={sidebarPost} />
        <Route path="/user/list" exact={true} component={seConnecter} />
      </Switch>
    </>
  );
};

export default Router;
