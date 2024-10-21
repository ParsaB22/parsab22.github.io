import TextBox from "./TextBox"
function TextPanel(props){
    return(
            <div style={{boxSizing:"border-box",position:"relative",width:props.width==null?"100%":props.width+"%",height:props.fill!==true?"auto":"100%" ,backgroundColor:"", display:"flex",flexDirection:"column",gap:"5px"}}>
                {props.array.map((item, index) => (<TextBox key={index} text={item.text} height={item.height} blank={item.blank} center={item.center} align={item.align}/>))}
            </div>
    );
}

export default TextPanel;