import { StyledFooter, Logo } from "./styles/Footer.styled";
import Link from "next/link";

const Footer = () => {
    return (
        <StyledFooter>
            <div className="logo">
                    <Link href="/">
                        <a><Logo src='../images/logo.svg' alt='' /></a>
                    </Link>
                </div>
        </StyledFooter>
    );
}

export default Footer;