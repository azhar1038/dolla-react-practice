import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaLinkedin,
    FaYoutube
} from 'react-icons/fa'
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLink,
    FooterLinkTitle,
    SocialMedia,
    SocialMediaWrap,
    SocialIconLink,
    SocialIcons,
    SocialLogo,
    WebsiteRights
} from './FooterElements';

const Footer = () => {
    const toggleHome = ()=>{
        scroll.scrollToTop();
    };

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/signup">How it Works</FooterLink>
                            <FooterLink to="/signup">Testimonials</FooterLink>
                            <FooterLink to="/signup">Investors</FooterLink>
                            <FooterLink to="/signup">Careers</FooterLink>
                            <FooterLink to="/signup">Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to="/signup">Contact</FooterLink>
                            <FooterLink to="/signup">Support</FooterLink>
                            <FooterLink to="/signup">Destinations</FooterLink>
                            <FooterLink to="/signup">Sponsorships</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>

                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Videos</FooterLinkTitle>
                            <FooterLink to="/signup">Submit Video</FooterLink>
                            <FooterLink to="/signup">Ambassadors</FooterLink>
                            <FooterLink to="/signup">Agency</FooterLink>
                            <FooterLink to="/signup">Influencer</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to="/signup">Instagram</FooterLink>
                            <FooterLink to="/signup">Facebook</FooterLink>
                            <FooterLink to="/signup">Youtube</FooterLink>
                            <FooterLink to="/signup">Twitter</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome} >dolla</SocialLogo>
                        <WebsiteRights>dolla &copy; {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria_label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria_label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria_label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria_label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria_label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
