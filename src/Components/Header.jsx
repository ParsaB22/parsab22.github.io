import LinkBar from "./LinkBar";

function Header(props){
    const dropShadow = props.fontsize * 0.125 + 'vw';
    const textShadowStyle = `
    #000 0px 0px 3px, 
    #000 0px 0px 3px, 
    #000 0px 0px 3px, 
    #000 0px 0px 3px, 
    #000 0px 0px 3px, 
    #000 0px 0px 3px, 
    #000000 0px clamp(0px,${dropShadow},8.25px) 0px`;
    return(
        <div style={{height:75, padding:5,paddingBottom:24}}>
                <div style={{width:"80%",height:"100%", backgroundColor:"",margin:"auto",display:"flex", gap:0,maxWidth:"calc(1440px * 0.8)"}}>
                    <svg style={{height:"100%",marginRight:"-5px", zIndex:5}} preserveAspectRatio="none" width="350" height="90" viewBox="0 0 350 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 2H304.5L274 88H2V2Z" fill="white" stroke="black" strokeWidth="4" vectorEffect="non-scaling-stroke"/>
                        <path d="M350 2H322L291.5 88H350" fill="white" stroke="black" strokeWidth="4" vectorEffect="non-scaling-stroke"/>
                    </svg>
                    <div style={{position:"relative",zIndex:6,width:"100%", backgroundColor:"white", alignContent:"center", textAlign:"center",}}>
                        <h1 className="title" style={{margin:0, fontSize:`clamp(10px,${props.fontsize}vw,${props.fontMax}px)`, textShadow:textShadowStyle}}>{props.title}</h1>
                        <svg style={{position:"absolute", height:"100%",top:0,left:0, width:"100.1%"}} preserveAspectRatio="none" width="319" height="90" viewBox="0 0 319 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 2H319M319 88H0" stroke="black" strokeWidth="4" vectorEffect="non-scaling-stroke"/>
                        </svg>
                        <LinkBar link={props.link} width="100"/>
                    </div>
                    <svg style={{height:"100%",marginLeft:"-5px", zIndex:5}} preserveAspectRatio="none" width="350" height="90" viewBox="0 0 350 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M348 2H45.5L76 88H348V2Z" fill="white" stroke="black" strokeWidth="4" vectorEffect="non-scaling-stroke"/>
                        <path d="M0 2H28L58.5 88H0" fill="white" stroke="black" strokeWidth="4" vectorEffect="non-scaling-stroke"/>
                    </svg>
                </div>
        </div>
    );
}
export default Header