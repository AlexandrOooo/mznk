import TheSearch from "../Search";
import OpenCartButton from "../OpenCartButton";
import CartPopup from "../CartPopup";

const TheNavigation: React.FC<{}> = () => {
    return (
        <>
            <nav className="bg-black h-16">
                <ul className="mx-auto my-0 w-[1440px] flex list-none">
                    <li>
                        <TheSearch />
                    </li>
                    <li>
                        <OpenCartButton />
                    </li>
                </ul>
            </nav>
            <CartPopup />
        </>
    );
};
export default TheNavigation;
