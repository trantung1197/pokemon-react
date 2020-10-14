import React from "react";
import styled from "styled-components";
import spinner from '../assets/spinner.gif';

const LoadingContainer = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
    left: 0;
    z-index: 2;
`;

export default function LoadingPage() {
	return (
		<LoadingContainer>
			<img src={spinner} alt="loading" style={{width:"100%"}}/>
		</LoadingContainer>
	);
}
