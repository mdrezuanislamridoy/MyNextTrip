import {
  faBed,
  faEarthAmerica,
  faPlane,
  faSpoon,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Categories() {
  const ctg = [
    {
      name: "Places",
      icon: faEarthAmerica,
      link: "/places",
    },
    {
      name: "Hotels",
      icon: faBed,
      link: "/hotels",
    },
    {
      name: "Resturants",
      icon: faSpoon,
      link: "/resturants",
    },
    {
      name: "Flights",
      icon: faPlane,
      link: "/flights",
    },
  ];

  return (
    <div className="flex flex-col text-center md:flex-row md:justify-center gap-8 py-8 mx-2 md:mx-auto">
      {ctg.map((category, index) => (
        <Link
          key={index}
          to={category.link}
          className="flex items-center text-gray-800 bg-gray-100 rounded-xl px-8 py-4 shadow-md transition-transform transition-shadow duration-200 hover:-translate-y-1 hover:scale-105 hover:shadow-lg no-underline"
        >
          <FontAwesomeIcon
            icon={category.icon}
            size="2x"
            className="my-1 mr-2 text-green-800"
          />
          <span className="font-bold text-lg ">{category.name}</span>
        </Link>
      ))}
    </div>
  );
}
