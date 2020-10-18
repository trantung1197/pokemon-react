import React from "react";
import styled from "styled-components";
import spinner from "../assets/spinner.gif";

const LoadingContainer = styled.div`
	position: fixed;
	width: 100%;
	height: 100vh;
	top: 0;
	left: 0;
	z-index: 2;

	display: flex;
	align-items: center;
	justify-content: center;

	background-color: #181B1D;
`;

export default function LoadingPage() {
	return (
		<LoadingContainer>
			<img src={spinner} alt="loading" style={{ width: "500px" }} />
		</LoadingContainer>
	);
}
