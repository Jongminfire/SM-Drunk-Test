import React, { useState } from "react";
import { useSpring, animated, to } from '@react-spring/web'

import styled, { css } from "styled-components";

import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import styles from "./Card.scss";


export const CardDrawer = (props)=>{
	
	return <div class="card-drawer">
		{props.cards.map((x)=>{<CardSmall {...x}/>})}
	</div>
}

export const CardSmall = (prop)=>{
	const InnerCard=styled.div`
		margin:auto;
		top:10vmin;
		background:${prop.bg};
		box-shadow: 2px -2px 8px 0px #0001;
		height: 10vw;
		width: 50vmin;
		border-radius: 18px;
	`
}

export const CardBig = (prop) => {
	const InnerCard=styled.div`
		margin:auto;
		top:10vmin;
		background:${prop.bg};
		box-shadow: 2px -2px 8px 0px #0001;
		height: 80vmin;
		width: 50vmin;
		border-radius: 18px;
	`
	return <InnerCard>
		Wow such card content
	</InnerCard>
}

export const CardPopup = (props)=>{
	const [visible,setVisible]=useState(props.visible)
	const styles = useSpring({
		to: async (next, cancel) => {
			if(visible){
				await next({ display: "block" })
		  		await next({ opacity: 1 })
			}else{
				await next({ opacity: 0 })
				await next({ display: "none" })
			}
		}})
	return (
		<animated.div style={styles} class="popup-container" >
			<CardBig class="big-card" bg="linear-gradient(153.55deg, #879AF2 9.48%, #D3208B 48.25%, #FDA000 85.78%)"></CardBig>
			<CloseIcon class="close" onClick={()=>setVisible(false)}></CloseIcon>
			<NavigateBeforeIcon class="prevbtn"></NavigateBeforeIcon>
			<NavigateNextIcon class="nextbtn"></NavigateNextIcon>
		</animated.div>
	)
}
