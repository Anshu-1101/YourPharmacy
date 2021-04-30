import React from 'react';
import {FaFacebook,FaTwitter, FaLinkedin, FaYoutube} from 'react-icons/fa';
import {FooterContainer, FooterLinksContainer,FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterWrap, FooterLink,SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons,SocialIconLink  } from './FooterElements';
 
const Footer = () => {
    return (
        <>
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About </FooterLinkTitle>  
                                <FooterLink to ="/About">How it works</FooterLink>
                                <FooterLink to ="/About">Testimonals</FooterLink>
                                <FooterLink to ="/About">Terms of Service</FooterLink>       
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Products </FooterLinkTitle>  
                                <FooterLink to ="/products">Service we provide</FooterLink>
                                <FooterLink to ="/products">Product Details</FooterLink>
                                <FooterLinkItems>
                                 
                        </FooterLinkItems>
                                     
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                     
                     
                         

                        
                      
                    
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">YourPharmacy</SocialLogo>
                        
                        <WebsiteRights>
                        © {new Date().getFullYear()} YourPharmacy All rights reserved 
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink herf="//www.facebook.com/mcme.techserve" target="_blank" aria-label="Facebook"><FaFacebook/></SocialIconLink>
                            <SocialIconLink herf="//www.twitter.com/mcme_techserve" target="_blank" aria-label="Twitter"><FaTwitter/></SocialIconLink>
                            <SocialIconLink herf="//www.linkedin.com/company/mcnmetechserve" target="_blank" aria-label="Linkedin"><FaLinkedin/></SocialIconLink>
                            <SocialIconLink herf="https://www.youtube.com/channel/UCqdE-hF1fg3BhJbUV5EMOUA/featured?view_as=subscriber" target="_blank" aria-label="YouTube"><FaYoutube/></SocialIconLink>
                        </SocialIcons>

                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
            
        </>
    )
}

export default Footer
