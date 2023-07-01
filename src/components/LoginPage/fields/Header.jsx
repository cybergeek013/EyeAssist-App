import { Link } from "react-router-dom";
import Logo from "../../../assets/Logo.png";

function Header({ heading, paragraph, linkName, linkUrl = "#" }) {
  return (
    <div className="mb-10">
      <div className="flex justify-center">
        <img alt="Logo" className="h-14 w-14" src={Logo} />
      </div>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-[--medium_green]">
        {heading}
      </h2>
      <p className="mt-2 text-center text-sm text-[--medium_green] mt-5">
        {paragraph}{" "}
        <Link
          to={linkUrl}
          className="font-medium text-[--orange_color] hover:text-[--dark_green]"
        >
          {linkName}
        </Link>
      </p>
    </div>
  );
}

export default Header;
