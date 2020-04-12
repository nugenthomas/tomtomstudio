import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import links from 'data/footerLinks';

const Background = styled.div`
  background: black;
  display: flex;
  height: 120px;
  justify-content: center;
`;

const Links = styled.div`
  align-self: flex-end;
  font-size: 2rem;
  text-align: center;
`;

const Link = styled.a`
  color: white;
  cursor: pointer;
  margin: 0.5em;
  text-decoration: none;
  transition: color .2s ease-in-out;
  &:hover {
    color: var(--primary);
  }
`;

const FooterItems = styled.div`
  align-self: flex-end;
  color: white;
  padding: 1rem;
  text-align: center;
`;

function Footer() {
  return (
    <Background>
      <FooterItems>
        <Links>
          {links.map(link => (
            <Link
              key={link.icon}
              href={link.href}
              target="_blank"
              rel="noopener"
            >
              <FontAwesomeIcon icon={['fab', link.icon]} />
            </Link>
          ))}
        </Links>
        <p>Thomas Nghia Nguyen &copy; 2020</p>
      </FooterItems>
    </Background>
  );
}

export default Footer;