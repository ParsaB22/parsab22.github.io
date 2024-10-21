function ImageTextPanel (props){
    return(
            <div style={{position:"relative",boxSizing:"border-box",width:props.width==null?"100%":props.width+"%",aspectRatio: props.aspectRatio, backgroundColor:"white",borderColor: "black", borderWidth: 4, borderStyle: "solid"}}>
                <div className={`text ${props.class}`} style={{fontSize:"clamp(10px, 1vw, 16px)",position:"absolute", backgroundColor:"white", width:props.textWidth==null?"auto":props.textWidth +"%", margin:0, outlineColor: "black", outlineWidth: 4, outlineStyle: "solid", padding:2}}>{props.text}</div>
                <img style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}} src={props.image} alt=""/>
            </div> 
    );
}
export default ImageTextPanel