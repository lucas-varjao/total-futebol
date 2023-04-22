"use client";
import Container from "../Container";
import Logo from "./Logo";
import MenuNav from "./MenuNav";
import UserMenu from "./UserMenu";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white dark:bg-verde-900 shadow-sm flex items-center fixed w-screen h-18 border-b-[1px] border-verde-500">
      <Container>
        <div className="flex w-full">
          {/* Opções */}
          <MenuNav></MenuNav>
          {/* Logo e nome */}
          <Logo></Logo>
          {/* Login e Toggle */}
          <UserMenu></UserMenu>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
