
import React from "react";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faInstagram,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';



export const Box = styled.div`
padding: 20px 0px;
background: black;
width: 100%;
@media (max-width: 1000px) {
	padding: 30px 30px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
  font-family: 'Quicksand', sans-serif;
	/* background: red; */
`

export const Column = styled.div`
display: flex;
flex-direction: row;
text-align: left;
margin-left: 60px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 20px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
color: #fff;
display:flex;
text-decoration: none;
flex-direction:row;
&:hover {
	color: inherit;
	transition: 200ms ease-in;
}
margin-right:1.5em;
`;

export const Heading = styled.p`
font-size:15px;
color: #fff;
margin-bottom: 10px;

`;
export const Titulo=styled.h1`
color: white;
text-align: center;
font-size:18px;
`;
export const Link=styled.a`
text-decoration:none;
color:#fff;
&:hover{
  color:inherit;
}
`;

const Footer = () => {
return (
	<Box>
	<Titulo>
		CKeeper
    </Titulo>
	<Container>
		<Row>
		<Column>
			<Heading><Link href="#">Privacy & Legal</Link></Heading>
			
		</Column>
		<Column>
			<Heading><Link href="/#sobre-nosotros">About Us</Link></Heading>
			
		</Column>
		<Column>
			<Heading><Link href="/contacto">Contact Us</Link></Heading>
			
		</Column>
		<Column>
			
			 <FooterLink href="#">
				<span style={{ marginLeft: "10px" }}> 
                <FontAwesomeIcon icon={faInstagram} />
				</span>
			
			</FooterLink>
			<FooterLink href="#">
				<span style={{ marginLeft: "10px" }}>
                <FontAwesomeIcon icon={faTwitter} />
				</span>
			
			</FooterLink>
			<FooterLink href="https://github.com/conrderuben/CKeeper">
				<span style={{ marginLeft: "10px" }}>
			    <FontAwesomeIcon icon={faGithub} />
				</span>
		
			</FooterLink> 
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;

