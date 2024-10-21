function ImagePanel (props){
    return(
        <div style={{display:props.center!==true?"block":"flex",flex:props.flex==null?"auto":props.flex, width:props.width==null?"100%":props.width+"%"}}>
            <div className={props.center!==true?"":"align"} style={{boxSizing:"border-box",height:"auto",position:"relative",aspectRatio: props.aspectRatio, backgroundColor:props.backColor==null?"white":props.backColor ,borderColor: "black", borderWidth: 4, borderStyle: "solid"}}>
                <img style={{width:"100%",height:props.center!==true?"100%":"auto",objectFit:"cover",display:"block"}} src={props.image} alt=""/>
            </div> 
        </div>
    );
}
export default ImagePanel