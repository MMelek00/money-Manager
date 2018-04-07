import Login from "./Login";
import Signup from "./Signup";
import { StackNavigator } from "react-navigation";

const Nav = StackNavigator({
  Login: { screen: Login },
  Signup: { screen: Signup }
});
export default Nav;
