import React, { useState } from "react";
import { useSpring, animated, useChain, useSpringRef } from '@react-spring/web'

import styled, { css, keyframes } from "styled-components";
import spring, { toString } from 'css-spring'

import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import styles from "./Card.scss";
import '../fonts/fonts.scss';
import { PortableWifiOffSharp } from "../../node_modules/@material-ui/icons/index";


export const CardDrawer = (props)=>{
    const cards=props.cards;
 
	return <div className="card-drawer">
		{cards.map((x,i)=><CardSmall key={x.id} bg={x.bg} idx={i} clckevent={props.clckevent}/>)}
	</div>
}

const bounceup=keyframes`
from,
60%,
75%,
90%,
to {
  animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}

from {
  opacity: 0;
  transform: scale(0.8) translate3d(0, 3000px, 0) scaleY(5);
  box-shadow: 0px 0px 16px 8px #FFFFFF;
}

60% {
  opacity: 1;
  transform: scale(0.5) translate3d(0, -20px, 0) scaleY(0.9);
  box-shadow: 0px 0px 128px 64px #FFFFFF;
}

75% {
  transform: scale(1.4)  translate3d(0, 10px, 0) scaleY(0.95);
}

90% {
  transform: scale(1.2) translate3d(0, -5px, 0) scaleY(0.985);
}

to {
  transform: scale(1) translate3d(0, 0, 0);
}
`

const SmallInnerCard=styled.div`
    background:${props => props.bg};
    box-shadow: 2px -8px 8px 0px #00000040;
    padding: 1vw;
    height: 8vw;
    width: 5.5vw;
    border-radius: 12px;
    position: absolute;
    top: ${props => 6+6*(props.idx)}vh;
    right: 5vw;
    transition: transform 0.15s ease-out;
    z-index:${props => 10+props.idx};
    &:hover{
        transform:scale(1.3) translateX(calc(-3vw * 0.5)) translateY(calc(2vw * 0.5));
    }
    &:last-child{
        animation: ${bounceup} 1s linear;
    }
`

const SmallTitleText=styled.div`
    font-size: 2vmin;
    font-family: 'IBMPlexSansKR';
    font-weight: medium;
    color: white;
    width:5vw;
    overflow:hidden;
    white-space:nowrap;
    text-overflow:ellipsis; 
`
const SmallInnerText=styled.div`
    font-size: 1.2vmin;
    font-family: 'IBMPlexSansKR';
    font-weight: medium;
    margin-top:1vmin;
    line-height: 1vw;
    color: white;
    width: 5.5vw;
    height: 6vw;
    overflow:hidden;
`

const testtext="You should know there is much less amount of text than real world scenario. Therefore Need Need Need Pintainmorch";
export const CardSmall = (props)=>{    
    return <SmallInnerCard onClick={()=>{props.clckevent(props)}} {...props}>
        <SmallTitleText>Sans Text Over Power</SmallTitleText>
        <SmallInnerText>{testtext}</SmallInnerText>
    </SmallInnerCard>
}


const BigInnerCard=styled.div`
padding:6vmin;
margin:auto;
top:10vmin;
background:${prop=>prop.bg};
box-shadow: 2px -2px 8px 0px #0001;
height: 60vmin;
width: 36vmin;
border-radius: 12px;
`
const TitleText=styled.div`
font-size: calc(12px + 3.5vmin);
font-family: 'IBMPlexSansKR';
font-weight: medium;
color: white;
`
const InfoText=styled.div`
margin-top:4vh;
font-size: calc(10px + 2vmin);
color: white;
font-family: 'IBMPlexSansKR';
font-weight: medium;
`

const CircleImage=styled.img`
    margin-top:8vh; 
    border-radius: 50%;
    display: block;
    margin-left:auto;
    margin-right:auto;
    width:60%;
`

const testimg="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAC/ElEQVR42u3UQREAMAjAsGFkBnGOCdABl0joo/Gz+gEsEIYFGBaAYQGGBWBYAIYFGBaAYQEYFmBYAIYFYFiAYQEYFoBhAYYFYFgAhgUYFoBhARgWYFgAhgVgWIBhARgWgGEBhgVgWIBhGRZgWACGBRgWgGEBGBZgWACGBWBYgGEBGBaAYQGGBWBYAIYFGBaAYQEYFmBYAIYFYFiAYQEYFoBhAYYFYFgAhgUYFoBhAYZlWIBhARgWYFgAhgVgWIBhARgWgGEBhgVgWACGBRgWgGEBGBZgWACGBWBYgGEBGBaAYQGGBWBYAIYFGBaAYQEYFmBYAIYFGJZhAYYFYFiAYQEYFoBhAYYFYFgAhgUYFoBhARgWYFgAhgVgWIBhARgWgGEBhgVgWACGBRgWgGEBGBZgWACGBWBYgGEBGBZgWDIAhgVgWIBhARgWgGEBhgVgWACGBRgWgGEBGBZgWACGBWBYgGEBGBaAYQGGBWBYAIYFGBaAYQEYFmBYAIYFYFiAYQEYFmBYAIYFYFiAYQEYFoBhAYYFYFgAhgUYFoBhARgWYFgAhgVgWIBhARgWgGEBhgVgWACGBRgWgGEBGBZgWACGBWBYgGEBGBZgWACGBWBYgGEBGBaAYQGGBWBYAIYFGBaAYQEYFmBYAIYFYFiAYQEYFoBhAYYFYFgAhgUYFoBhARgWYFgAhgVgWIBhARgWYFgAhgVgWIBhARgWgGEBhgVgWACGBRgWgGEBGBZgWACGBWBYgGEBGBaAYQGGBWBYAIYFGBaAYQEYFmBYAIYFYFiAYQEYFmBYAIYFYFiAYQEYFoBhAYYFYFgAhgUYFoBhARgWYFgAhgVgWIBhARgWgGEBhgVgWACGBRgWgGEBGBZgWACGBRiWYQGGBWBYgGEBGBaAYQGGBWBYAIYFGBaAYQEYFmBYAIYFYFiAYQEYFoBhAYYFYFgAhgUYFoBhARgWYFgAhgVgWIBhARgWYFiGBRgWgGEBhgVgWACGBRgWgGEBGBZgWACGBWBYwGUDafne43vNlkkAAAAASUVORK5CYII=";
export const CardBig = (prop) => {
	return <BigInnerCard bg={prop.bg}>
        <TitleText>Do you know?</TitleText>
        <InfoText>Dokdo is korea’s
territory</InfoText>
        <CircleImage src={testimg}/>
	</BigInnerCard>
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
		<animated.div style={divspring} className="popup-container" >
            {/* <animated.div style={cardanim}> */}
			    <CardBig className="big-card" {...card}/>
            {/* </animated.div> */}
			<CloseIcon className="close" onClick={()=>setPopped(false)}></CloseIcon>
			{/* <NavigateBeforeIcon className="prevbtn"></NavigateBeforeIcon> */}
			{/* <NavigateNextIcon className="nextbtn"></NavigateNextIcon> */}
		</animated.div>
	)
}
