import React, { useState } from "react";
import { useSpring, animated, useChain, useSpringRef } from '@react-spring/web'

import styled, { css } from "styled-components";

import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import styles from "./Card.scss";
import { PortableWifiOffSharp } from "../../node_modules/@material-ui/icons/index";


export const CardDrawer = (props)=>{
    const cards=props.cards;
 
	return <div class="card-drawer">
		{cards.map((x,i)=><CardSmall key={x.id} bg={x.bg} idx={i} clckevent={props.clckevent}/>)}
	</div>
}

export const CardSmall = (props)=>{
	const InnerCard=styled.div`
		background:${props.bg};
		box-shadow: 2px -8px 8px 0px #00000040;
		height: 10vw;
		width: 7.5vw;
		border-radius: 18px;
        position: absolute;
        top: ${6+6*(props.idx)}vh;
        right: 5vw;
        transition: transform 0.2s ease-in-out;
        z-index:${10+props.idx};
        &:hover{
            transform:scale(1.2);
            z-index:100;
        }
	`
    return <InnerCard onClick={()=>{props.clckevent(props)}}>wasans?</InnerCard>
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
	const popped=props.popped;
    const card=props.card;
    const setPopped=props.setPopped;
	const divspring = useSpring({
		to: async (next, cancel) => {
			if(popped){
				await next({ display: "block" })
		  		await next({ opacity: 1 })
			}else{
				await next({ opacity: 0 })
				await next({ display: "none" })
			}
		}
    })
    // const buttonanimRef = useSpringRef()
    // const buttonanim = useSpring({
	// 	to: {},
    //     from: {top:"100vh"},
    //     ref:buttonanimRef
    // })
    
    // const cardanimref = useSpringRef();
    // const cardanim = useSpring({
	// 	to: {top:popped?"4vmin":"-100vh"},
    //     from: {top:"-100vh"},
    //     ref:cardanimref
    // })
    
    // useChain([divspringRef, buttonanimRef,cardanimref],[1,1,1] )

	return (
		<animated.div style={divspring} class="popup-container" >
            {/* <animated.div style={cardanim}> */}
			    <CardBig class="big-card" {...card}/>
            {/* </animated.div> */}
			<CloseIcon class="close" onClick={()=>setPopped(false)}></CloseIcon>
			{/* <NavigateBeforeIcon class="prevbtn"></NavigateBeforeIcon> */}
			{/* <NavigateNextIcon class="nextbtn"></NavigateNextIcon> */}
		</animated.div>
	)
}
