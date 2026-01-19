import Logo from "./Logo";
import SettingsBtn from "./SettingsBtn";
export default function NavBar(){
  
  return(<div className="self-stretch inline-flex justify-center items-start gap-2.5">
           <Logo />
           <SettingsBtn />
         </div>);
}
