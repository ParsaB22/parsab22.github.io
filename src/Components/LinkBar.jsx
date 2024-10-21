function LinkBar(props){
    if(props.link=="empty"){
        return(null);
    }
    else{
        return(
            <a className="disablePointer" href={"https://"+props.link} target="_blank" rel="noopener noreferrer"
            style={{position:"absolute",width:`${props.width}%`, height:"22px", display:"flex", alignItems:"center", maxWidth:"400px", bottom:"-19px",margin:"auto", left:0, right:0}}>
                <div style={{position:"relative",margin:"auto", width:"85%",height:"100%",zIndex:6, overflow:"hidden", display:"flex",alignItems:"center"}}>
                    <div style={{margin:"auto", display:"flex", alignItems:"center"}}>
                        <img style={{width:"14px", marginRight:"5px"}} src={"../images/link-icon.png"} alt="link icon"/>
                        <p id="linkText" style={{margin:0, fontSize:"14px"}}>{props.link}</p>
                        {/* <p id="linkText" style={{margin:0, fontSize:"14px"}}>Visit</p> */}
                    </div>
                    
                </div>
                <svg style={{position:"absolute",transform:"scaleY(-1)", width:"100%", height:"100%",top:0,left:0}} preserveAspectRatio="none" width="457" height="86" viewBox="0 0 457 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="linkBar" d="M2.90963 84L34.3747 2H422.625L454.09 84H2.90963Z" fill="yellow" stroke="black" strokeWidth="4" vectorEffect="non-scaling-stroke"/>
                </svg>
            </a>
        );
    }
}

export default LinkBar