import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import styled from "styled-components";

//Styled components
const Img = styled.img`
	height: 100%;
	width: 100%;
`;

const Title = styled.p`
	color: #313131;
	text-transform: capitalize;
	font-size: 24px;
	text-align: start;
	font-weight: 500;

    &:hover {
		text-decoration: underline;
	}
`;

const BoxImg = styled.figure`
	background-color: #f2f2f2;
	border: none;
	border-radius: 5px;
	width: 100%;
	height: 200px;
	padding: 20px;
`;

const BoxContent = styled.div`
	padding: 5px 10px;
`;

const IdPoke = styled.p`
	margin-bottom: 5px;
	color: #919191;
`;

const Card = styled.div`
	width: 250px;
	height: 315px;

	margin: 10px;

	border: none;
	border-radius: 5px;

	transition: 0.4s ease;

	&:hover {
		box-shadow: 3px 3px 5px #888;
		transform: translate(3px, -3px);
    }
    @media only screen and (min-width: 768px){
        width: 210px;
    }
    /* @media only screen and (max-width: 1024px){
        width: 250px;
    } */
`;

const TypeSpan = styled.span`
	font-size: 12px;
	color: #fff;
	text-transform: capitalize;

	padding: 5px 0;
	margin-right: 5px;
	text-align: center;
	border: none;
	border-radius: 4px;
	min-width: 80px;
`;

const BoxType = styled.div`
	display: flex;
	align-items: center;

	width: 100%;
    padding: 5px 0;
    margin: 6px 0;
`;



//JSX
export default function PokemonCard(props) {
	const { pokeID } = props;
	const [pokeData, setPokeData] = useState({});

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = () => {
		if (pokeID) {
			Axios.get(pokeID.url)
				.then((result) => {
					setPokeData(result.data);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	};

	const formatNumber = (num) => {
		if (num / 10 >= 10) {
			return num;
		}

		if (num / 10 >= 1) {
			return "0" + num;
		}

		return "00" + num;
	};

	const renderImg = () => {
		if (!pokeData) return;

		const { sprites } = pokeData;
		let linkImg = "./pokeball.svg";
		if (sprites) {
			if (sprites.other) {
				linkImg = sprites.other.dream_world.front_default;
			}
		}

		return (
			<Img
				className="pokemon-avatar"
				src={linkImg}
				alt="Pokemon avatar"
			/>
		);
	};

	const renderTypes = () => {
		if (!pokeData) return;

		const { types } = pokeData;

		if (types) {
			return (
				<BoxType>
					{types.map((ele) => {
						return (
							<TypeSpan
								className={`background-color-${ele.type.name}`}
								key={ele.slot}
							>
								{ele.type.name}
							</TypeSpan>
						);
					})}
				</BoxType>
			);
		}
	};

	return (
		<div className="pokemon-card" >
			<Card>
				<Link to={`/pokemon/${pokeID.name}`}>
					<BoxImg>{renderImg()}</BoxImg>
				</Link>
				<BoxContent>
					<IdPoke>
						{pokeData ? "#" + formatNumber(pokeData.id) : ""}
					</IdPoke>
					<Link to={`/pokemon/${pokeID.name}`} style={{ textDecoration: "none" }}>
						<Title>{pokeID.name}</Title>
					</Link>

					{renderTypes()}
				</BoxContent>
			</Card>
		</div>
	);
}
