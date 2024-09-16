import Link from "next/link";
import './category.css';
import { FaAngleRight } from "react-icons/fa6";

interface SortCatProps {
  className?: string;
}

export const SortCat: React.FC<SortCatProps> = ({className}) => {
  return (
    <div className={`sortcat_section ${className}`}>
      <div className="sortcat_container flex flex-col">
        <span>
          <Link
            href="/"
            className="sortcat_item flex flex-row items-center justify-between"
          >
            <span>Woman's Fashion</span>
            <FaAngleRight />
          </Link>
        </span>
        <span>
          <Link
            href="/"
            className="sortcat_item flex flex-row items-center justify-between"
          >
            <span>Men's Fashion</span>
            <FaAngleRight />
          </Link>
        </span>
        <span>
          <Link href="/" className="sortcat_item">
            <span>Electronics</span>
          </Link>
        </span>
        <span>
          <Link href="/" className="sortcat_item">
            <span>Home & Lifestyle</span>
          </Link>
        </span>
        <span>
          <Link href="/" className="sortcat_item">
            <span>Medicine</span>
          </Link>
        </span>
        <span>
          <Link href="/" className="sortcat_item">
            <span>Sport & Outdoor</span>
          </Link>
        </span>
        <span>
          <Link href="/" className="sortcat_item">
            <span>Baby's & Toys</span>
          </Link>
        </span>
        <span>
          <Link href="/" className="sortcat_item">
            <span>Groceries & Pets</span>
          </Link>
        </span>
        <span>
          <Link href="/" className="sortcat_item">
            <span>Beauty & Health</span>
          </Link>
        </span>
      </div>
    </div>
  );
};