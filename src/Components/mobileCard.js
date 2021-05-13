import React, { useState } from "react";
import { useSpring, animated, to } from '@react-spring/web'

import styled, { css } from "styled-components";

import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import styles from "./mobileCard.scss";

import Lottie from 'react-lottie';
import * as arrow from '../image/arrowMotion.json'


export const MobileCardDrawer = (props)=>{
    const [index, setIndex] = useState(0);
    
    const Wrap = styled.div`
    padding: 0 4vh;
    margin-top:-4vh;
    width: 90%;
    height: 12vh;
    vertical-align:middle;
    box-sizing: border-box;
    display: flex;
    justify-content: space-evenly;
    `
	console.log(props.cards[0])
	return <div class="mobile-card-drawer">
        
        <Wrap>
            <Buttonss index={index} setIndex={setIndex} type={-1} limits = {Math.floor(props.cards.length/4)}/>
            <MiniCards start={index*3} {...props} />
            <Buttonss index={index} setIndex={setIndex} type={1} limits = {Math.floor(props.cards.length/4)}/>
        </Wrap>
	</div>
}
export const Buttonss = (props)=>{
    //현재 index, setIndex, 버튼 타입(1, -1)이 props
    const {index, setIndex, type, limits} = props;
    console.log(index,type)
    return <Button style={{transform :  `rotate(${90*type*-1}deg)`, position:"absolute", top:"3.5vh", right:`${type==1 ? "-4.5%" :"87%"}`, width:"5.5vh", height:"5.5vh"}}
    onClick={()=>{
        if(index + type >= 0 && index + type <= limits) setIndex(index+type)
    }}><MyArrow type={type}></MyArrow></Button>
}
export const MyArrow = (props)=>{
    let type = props.type

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: arrow.default,
        rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
        }
      };
    return <div>
         <Lottie options={defaultOptions}
              height={80}
              width={80}/>
    </div>
}
export const MiniCards = (props)=>{
    let ret = [];
    for(let i = props.start; i<props.start + 3; i++) 
        if(props.cards[i])
            ret.push(props.cards[i])
        else ret.push({})

    return <>{
        ret.map((x,i)=><MobileCardSmall key={x.id} bg={x.bg} idx={i} clckevent={props.clckevent}/>)
    }</>
        
}
export const MobileCardSmall = (props)=>{
	const InnerCard=styled.div`
    background:${props.bg};
    box-shadow: 2px 8px 8px 0px #00000040;
    height: 12vh;
    width: 16vw;
    margin:0 5px;
    border-radius: 18px;
    
    transition: transform 0.2s ease-in-out;
    z-index:${10+props.idx};
    &:hover{
        transform:scale(1.4) translateY(-4vh);
    }
	`
    const NoCard = styled.div`
    height: 12vh;
    width: 8vh;
    margin: 0 8px;
    `
    return props.bg ? <InnerCard onClick={()=>{props.clckevent(props)}}>wasans?</InnerCard> : <NoCard/>

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
