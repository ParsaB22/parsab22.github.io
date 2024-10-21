import LinkBar from "./LinkBar";

function HeaderMobile(props){
    const dropShadow = props.fontsize * 0.14 + 'vw';

    const textShadowStyle = `
    #000 0px 0px 3px, 
    #000 0px 0px 3px, 
    #000 0px 0px 3px, 
    #000 0px 0px 3px, 
    #000 0px 0px 3px, 
    #000 0px 0px 3px, 
    #000000 0px ${dropShadow} 0px`;
    return(
        <div style={{height:75, padding:5, paddingBottom:"24px"}}>
                <div style={{position:"relative",width:"80%",height:"100%", backgroundColor:"",margin:"auto",display:"flex", gap:0}}>
                    <div style={{margin:"auto",position:"relative",zIndex:6,width:"85.5%", backgroundColor:"", alignContent:"center", textAlign:"center",}}>
                        
                        <h1 className="title" style={{margin:0, fontSize:`${props.fontsize}vw`, textShadow:textShadowStyle}}>{props.title}</h1>
                        
                    </div>
                    <LinkBar link={props.link} width="85.5"/>
                    <svg style={{position:"absolute", height:"100%",top:0,left:0, width:"100.1%"}} preserveAspectRatio="none" width="457" height="86" viewBox="0 0 457 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.90963 84L34.3747 2H422.625L454.09 84H2.90963Z" fill="white" stroke="black" strokeWidth="4" vectorEffect="non-scaling-stroke"/>
                    </svg>
                </div>
                
        </div>
    );
}
export default HeaderMobile