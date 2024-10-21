function TextBox(props){
    return(
            <div className={props.align!==true?"":"align"} style={{boxSizing:"border-box",height:props.height+"%", backgroundColor:props.blank==null?"white":props.blank, textAlign:props.center!==true?"auto":"center", borderColor: "black", borderWidth: 4, borderStyle: "solid",}}>
                <div className="text" style={{margin:0,padding:2, paddingLeft:5 , fontSize:"clamp(10px, 1vw, 16px)"}}>{props.text}</div>
            </div>
    );
}

export default TextBox;
