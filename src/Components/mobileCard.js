import React, { useState } from "react";
import { useSpring, animated, to } from '@react-spring/web'

import styled, { css } from "styled-components";

import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import styles from "./mobileCard.scss";


export const MobileCardDrawer = (props)=>{
    const Wrap = styled.div`
    padding: 3vh 6vh;
    width: 90%;
    height: 90%;

    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    `
	console.log(props.cards[0])
	return <div class="mobile-card-drawer">
        <Wrap>
            {props.cards.map((x,i)=><MobileCardSmall key={x.id} bg={x.bg} idx={i} clckevent={props.clckevent}/>)}
        </Wrap>
	</div>
}

export const MobileCardSmall = (props)=>{
    console.log(123)
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
        transform:scale(1.2) translateX(calc(-3vw * 0.5)) translateY(calc(2vw * 0.5));
    }
	`
    return <InnerCard onClick={()=>{props.clckevent(props)}}>wasans?</InnerCard>

}

export const MobileCardBig = (prop) => {
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

export const MobileCardPopup = (props)=>{
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
		<animated.div style={divspring} className="popup-container" >
            {/* <animated.div style={cardanim}> */}
			    <MobileCardBig className="big-card" {...card}/>
            {/* </animated.div> */}
			<CloseIcon className="close" onClick={()=>setPopped(false)}></CloseIcon>
			{/* <NavigateBeforeIcon className="prevbtn"></NavigateBeforeIcon> */}
			{/* <NavigateNextIcon className="nextbtn"></NavigateNextIcon> */}
		</animated.div>
	)
}
