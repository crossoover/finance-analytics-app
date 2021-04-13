import React from 'react';
import {FooterWrap,LinksWrapper,LinkImage,FooterText} from './styles';

export const Footer = () => {
     return (
          <FooterWrap>
               <LinksWrapper>
                    <a target="_blank" href="https://www.instagram.com/crossoover/"><LinkImage src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2016/png/iconmonstr-instagram-14.png&r=254&g=183&b=45" alt="instagram"/></a>
                    <a target="_blank" href="https://github.com/crossoover"><LinkImage src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2012/png/iconmonstr-github-4.png&r=104&g=31&b=172" alt="github"/></a>
                    <a target="_blank" href="https://www.linkedin.com/in/viacheslav-savratskyi-1142a61bb/"><LinkImage src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2012/png/iconmonstr-linkedin-4.png&r=45&g=90&b=170" alt="linkedin"/></a>
                    <a target="_blank" href="https://t.me/react_with_crossoover"><LinkImage src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2018/png/iconmonstr-telegram-4.png&r=64&g=145&b=216" alt="telegram"/></a>
               </LinksWrapper>
               <div>
                    <FooterText>@ 2021 Viacheslav Savratsky</FooterText>
               </div>
          </FooterWrap>
     )
}
