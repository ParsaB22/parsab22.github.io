import Header from "../Components/Header";
import HeaderMobile from "../Components/HeaderMobile";
import BackgroundImg from "../Components/BackgroundImg";
import TextPanel from "../Components/TextPanel";
import ImagePanel from "../Components/ImagePanel";
import ImageTextPanel from "../Components/ImageTextPanel";

const Cloud10Home = "../../images/Cloud10/cloud10Home.png";
const Cloud10SignUp = "../../images/Cloud10/cloud10Signup.png";
const Cloud10Login = "../../images/Cloud10/cloud10Login.png";
const Cloud10ContactPage1 = "../../images/Cloud10/cloud10ContactsPage1.png";
const Cloud10ContactPage2 = "../../images/Cloud10/cloud10ContactsPage2.png";


// Comic //
function ComicMobile(){
    return(
        <div id="comicSmall" >
            <div className="column">
                <TextPanel width="100" array={[{text:<span style={{fontSize:"clamp(14px,1.4vw,22px)"}}>Overview</span>,height:100, blank:"#FF4E4E",center:true}]}/>
                <TextPanel width="100" array={[
                    {
                        text:<span>
                            <img style={{width:"calc(100% + 7px)", marginLeft:"-5px",marginTop:"-2px", borderBottom:"black solid 4px"}} src={Cloud10Home}/>
                            <b style={{color:"#C52FCA"}}>Cloud 10</b> is a web-based <b><em>Contact Manager</em></b> application designed to help  
                                users <b>efficiently manage their contacts</b>. It has <b>user authentication (<em>signup</em>/<em>login</em>)</b> as its foundation to 
                                ensure each user's data is secure and private.
                                After logging in, users can <b>add</b>, <b>view</b>, <b>edit</b>, and <b>delete</b> their contacts, making it a simple but powerful tool for personal or 
                                professional use.
                        </span>, 
                    },
                ]} />
                <TextPanel width="100" array={[{text:<b style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Technologies Used</b>,blank:"#4AC936",center:true},
                    ]}/>
                <div className="row">
                    <TextPanel width="25" array={[{height:100, blank:"#424242"}]}/>
                    <TextPanel width="100" array={[
                            {text:<span>Linux<br/>Apache<br/>MySQL<br/>PHP<br/>HTML/CSS/JS<br/>FileZilla<br/>Digital Ocean<br/>Swagger</span>,height:100,center:true,align:true},
                        ]} 
                    />
                    <TextPanel width="25" array={[{height:100, blank:"#424242"}]}/>
                </div>
            </div>
            
            
            <div/>
            <div className="column">
                <TextPanel width="100" array={[{text:<span style={{fontSize:"clamp(14px,1.4vw,22px)"}}>User Authentication (Signup/Login)</span>,height:100, blank:"#FF4E4E",center:true}]}/>
                <ImageTextPanel class="topLeft" aspectRatio="1440/900" image={Cloud10SignUp} text={<span style={{color:"black"}}> Signup Page</span>} />
                <TextPanel width="100" array={[{text:<span>
                            <b style={{textDecoration:"underline"}}>Sign Up</b>: New users can register by providing their <b><em>name</em></b>, <b><em>email</em></b>, and <b><em>password</em></b>. 
                            During registration, validations ensure the email format is correct and that the password meets complexity requirements. 
                            As well as providing Error Handling so when an email is already registered or if passwords don’t match, users will receive 
                            clear feedback.</span>, height:100}]} 
                />
                <div/>
                <ImageTextPanel class="topLeft" aspectRatio="1440/900" image={Cloud10Login} text={<span style={{color:"black"}}> Login Page</span>} />
                <TextPanel width="100" fill={true} array={[
                    {text:<span><b style={{textDecoration:"underline"}}>Login</b>: Returning users log in using their <b>email</b> and <b>password</b>. 
                            If the credentials are correct, they are redirected to their dashboard. 
                            If not, an error message is displayed, indicating invalid credentials.</span>, height:100}]} 
                />
            </div>

            <div/>
            <div className="column">

            <TextPanel width="100" array={[{text:<span style={{fontSize:"clamp(14px,1.4vw,22px)"}}>Contact Management Dashboard</span>,height:100, blank:"#FF4E4E",center:true}]}/>
            <ImagePanel aspectRatio="1440/900" image={Cloud10ContactPage1} flex="1" 
            />
            <ImagePanel aspectRatio="1440/900" image={Cloud10ContactPage2} flex="1"  
            />
            <TextPanel width="100" array={[
                {text:<span>Once logged in, users are taken to their <b>personal dashboard</b>, 
                                    where they can <b>manage their contacts</b>. Each user has their own contact list that is 
                                    stored <span style={{textDecoration:"underline"}}>securely</span> in the <em>database</em> and 
                                    tied to their account. This makes sure no one else can access their contact information.
                                </span>},
                {text:<span><b>View Contacts</b>: Users can see a list of all their contacts in a table format. 
                                    Each contact displays <span style={{textDecoration:"underline"}}>essential information</span> like <b>name</b>, <b>phone number</b>, <b>email</b>. 
                                    For better usability, there’s a search bar at the top that allows users to search contacts by name or email.
                                </span>},
                {text:<span><b>Add Contact</b>: Users can <span style={{textDecoration:"underline"}}>add new contacts</span> by filling out 
                                    a <em>form</em>. 
                                    Fields include the name, phone number, email.
                                </span>},
                {text:<span><b>Edit Contact</b>: If a user needs to <span style={{textDecoration:"underline"}}>update any contact information</span>, they 
                                    can click the <b><em>"Edit"</em> button</b> next to the contact. 
                                    This brings up a form pre-filled with the existing details, which can be modified. 
                                    After saving, the updated information is reflected in the contact list.
                                </span>},
                {text:<span><b>Delete Contact</b>: For contacts that are no longer needed, users can easily delete them by clicking a <b><em>"Delete"</em> button</b>. 
                                    A confirmation prompt ensures that users don’t accidentally remove contacts.
                                </span>},
                ]} 
            />
            </div>

            <div/>
            <div className="column">
                <TextPanel width="100" array={[{text:<b style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Team Members</b>,height:100, blank:"#4AC936",center:true}]}/>
                <div className="row">
                    <TextPanel width="100" array={[
                        {text:<span >Nicole Nascimento</span>,height:100,center:true,align:true},
                    ]}/>
                    <TextPanel width="100" array={[
                        {text:<span >Project Manager</span>,height:100,center:true,align:true},
                    ]}/>
                </div>
                <div className="row">
                    <TextPanel width="100" array={[
                        {text:<span >Parsa Baghaie</span>,height:100,center:true,align:true},
                    ]}/>
                    <TextPanel width="100" array={[
                        {text:<span >Front End Developer</span>,height:100,center:true,align:true},
                    ]}/>
                </div>
                <div className="row">
                    <TextPanel width="100" array={[
                        {text:<span >Evangelos Kontonotas</span>,height:100,center:true,align:true},
                    ]}/>
                    <TextPanel width="100" array={[
                        {text:<span >API</span>,height:100,center:true,align:true},
                    ]}/>
                </div>
                <div className="row">
                    <TextPanel width="100" array={[
                        {text:<span >Joseph Torres</span>,height:100,center:true,align:true},
                    ]}/>
                    <TextPanel width="100" array={[
                        {text:<span >API</span>,height:100,center:true,align:true},
                    ]}/>
                </div>
                <div className="row">
                    <TextPanel width="100" array={[
                        {text:<span >Jordan Genest</span>,height:100,center:true,align:true},
                    ]}/>
                    <TextPanel width="100" array={[
                        {text:<span >Database</span>,height:100,center:true,align:true},
                    ]}/>
                </div>
            </div>

        </div>

    );
}
function ComicTablet(){
    return(
        <div id="comicMedium" >
            <div className="column">
                <TextPanel width="100" array={[{text:<span style={{fontSize:"clamp(14px,1.4vw,22px)"}}>Overview</span>,height:100, center:true ,blank:"#FF4E4E"}]}/>
                <div className="row">
                        <TextPanel width="100" array={[
                            {
                                text:<span>
                                    <img style={{width:"calc(100% + 7px)", marginLeft:"-5px",marginTop:"-2px", borderBottom:"black solid 4px"}} src={Cloud10Home}/>
                                    <b style={{color:"#C52FCA"}}>Cloud 10</b> is a web-based <b><em>Contact Manager</em></b> application designed to help  
                                users <b>efficiently manage their contacts</b>. It has <b>user authentication (<em>signup</em>/<em>login</em>)</b> as its foundation to 
                                ensure each user's data is secure and private.
                                After logging in, users can <b>add</b>, <b>view</b>, <b>edit</b>, and <b>delete</b> their contacts, making it a simple but powerful tool for personal or 
                                professional use.
                                </span>, 
                            },
                        ]} />
                        <TextPanel width="60" array={[
                            {text:<b style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Technologies Used</b>,height:25,blank:"#4AC936",center:true},
                            {text:"Linux",height:50,center:true,align:true},
                            {text:"Apache",height:50,center:true,align:true},
                            {text:"MySQL",height:50,center:true,align:true},
                            {text:"PHP",height:50,center:true,align:true},
                            {text:"Html/Css/JS",height:50,center:true,align:true},
                            {text:"FileZilla",height:50,center:true,align:true},
                            {text:"Digital Ocean",height:50,center:true,align:true},
                            {text:"Swagger",height:50,center:true,align:true},
                        ]} />
                </div>
            </div>
            
            <div/>
            <div className="column">
                <TextPanel width="100" array={[{text:<span style={{fontSize:"clamp(14px,1.4vw,22px)"}}>User Authentication (Signup/Login)</span>,height:100,center:true, blank:"#FF4E4E"}]}/>
                <div className="row">
                    <div className="column">
                        <ImageTextPanel class="topLeft" aspectRatio="1440/900" image={Cloud10SignUp} text={<span style={{color:"black"}}> Signup Page</span>} />
                        <TextPanel width="100" array={[{text:<span>
                            <b style={{textDecoration:"underline"}}>Sign Up</b>: New users can register by providing their <b><em>name</em></b>, <b><em>email</em></b>, and <b><em>password</em></b>. 
                            During registration, validations ensure the email format is correct and that the password meets complexity requirements. 
                            As well as providing Error Handling so when an email is already registered or if passwords don’t match, users will receive 
                            clear feedback.</span>, height:100}]} />
                    </div>
                    <TextPanel width="2" array={[{height:100, blank:"#424242"}]} />
                    <div className="column">
                        <ImageTextPanel class="topRight" aspectRatio="1440/900" image={Cloud10Login} text={<span style={{color:"black"}}> Login Page</span>} />
                        <TextPanel width="100" fill={true} array={[
                            {text:<span><b style={{textDecoration:"underline"}}>Login</b>: Returning users log in using their <b>email</b> and <b>password</b>. 
                            If the credentials are correct, they are redirected to their dashboard. 
                            If not, an error message is displayed, indicating invalid credentials.</span>, height:100}]} />
                    </div>
                </div>
            </div>
            
            
            <div/>

            <div className="column">
                <TextPanel width="100" array={[{text:<span style={{fontSize:"clamp(14px,1.4vw,22px)"}}>Contact Management Dashboard</span>,height:100, blank:"#FF4E4E", center:true}]}/>
                <div className="row">
                        <ImagePanel aspectRatio="1440/900" image={Cloud10ContactPage1} flex="1" 
                        />
                        <ImagePanel aspectRatio="1440/900" image={Cloud10ContactPage2} flex="1"  
                        />
                </div>
                <TextPanel width="100" array={[
                    {text:<span>Once logged in, users are taken to their <b>personal dashboard</b>, 
                                    where they can <b>manage their contacts</b>. Each user has their own contact list that is 
                                    stored <span style={{textDecoration:"underline"}}>securely</span> in the <em>database</em> and 
                                    tied to their account. This makes sure no one else can access their contact information.
                                </span>},]}/>
                <TextPanel width="100" array={[
                    {text:<span><b>View Contacts</b>: Users can see a list of all their contacts in a table format. 
                                    Each contact displays <span style={{textDecoration:"underline"}}>essential information</span> like <b>name</b>, <b>phone number</b>, <b>email</b>. 
                                    For better usability, there’s a search bar at the top that allows users to search contacts by name or email.
                                </span>},]}/>
                <TextPanel width="100" array={[
                    {text:<span><b>Add Contact</b>: Users can <span style={{textDecoration:"underline"}}>add new contacts</span> by filling out 
                                    a <em>form</em>. 
                                    Fields include the name, phone number, email.
                                </span>},]}/>
                <TextPanel width="100" array={[
                    {text:<span><b>Edit Contact</b>: If a user needs to <span style={{textDecoration:"underline"}}>update any contact information</span>, they 
                                    can click the <b><em>"Edit"</em> button</b> next to the contact. 
                                    This brings up a form pre-filled with the existing details, which can be modified. 
                                    After saving, the updated information is reflected in the contact list.
                                </span>},]}/>
                <TextPanel width="100" array={[
                    {text:<span><b>Delete Contact</b>: For contacts that are no longer needed, users can easily delete them by clicking a <b><em>"Delete"</em> button</b>. 
                                    A confirmation prompt ensures that users don’t accidentally remove contacts.
                                </span>},]}/>
            </div>
            

            <div/>
            <div className="column">
                <TextPanel width="100" array={[{text:<b style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Team Members</b>,height:100, blank:"#4AC936", center:true}]}/>
                <div className="row">
                    <TextPanel width="2" array={[{height:100, blank:"#2955C7"}]}/>
                    <div className="column">
                        <div className="row">
                                <TextPanel width="100" array={[
                                    {text:<span >Nicole Nascimento</span>,height:100,center:true,align:true},
                                    {text:<span >Parsa Baghaie</span>,height:100,center:true,align:true},
                                    {text:<span >Evangelos Kontonotas</span>,height:100,center:true,align:true},
                                    {text:<span >Joseph Torres</span>,height:100,center:true,align:true},
                                    {text:<span >Jordan Genest</span>,height:100,center:true,align:true},
                                ]}
                                />
                                <TextPanel width="100" array={[
                                    {text:<span >Project Manager</span>,height:100,center:true,align:true},
                                    {text:<span >Front End Developer</span>,height:100,center:true,align:true},
                                    {text:<span >API</span>,height:100,center:true,align:true},
                                    {text:<span >API</span>,height:100,center:true,align:true},
                                    {text:<span >Database</span>,height:100,center:true,align:true},
                                ]}
                                />
                        </div>
                    </div>
                    <TextPanel width="2" array={[{height:100, blank:"#2955C7"}]}/>
                </div>
            </div>
        </div>
    );
}
function Comic () {
    return(
        <div id="comicLarge" >
            <div className="column">
                <TextPanel width="100" array={[{text:<span style={{fontSize:"clamp(14px,1.4vw,22px)"}}>Overview</span>,height:100, center:true ,blank:"#FF4E4E"}]}/>
                <div className="row">
                    <div className="column" style={{flex:"1"}}>
                        <TextPanel width="100" fill={true} array={[{height:100, blank:"#424242"},
                            {
                                text:<span> <b style={{color:"#C52FCA"}}>Cloud 10</b> is a web-based <b><em>Contact Manager</em></b> application designed to help  
                                users <b>efficiently manage their contacts</b>. It has <b>user authentication (<em>signup</em>/<em>login</em>)</b> as its foundation to 
                                ensure each user's data is secure and private.
                                After logging in, users can <b>add</b>, <b>view</b>, <b>edit</b>, and <b>delete</b> their contacts, making it a simple but powerful tool for personal or 
                                professional use.
                                </span>, 
                                height:100
                            },
                            {height:100, blank:"#424242"}
                        ]} />
                    </div>
                    <div className="column" style={{flex:"2.5"}}>
                        <ImagePanel image={Cloud10Home}/>
                    </div>
                    <div className="column" style={{flex:"1"}}>
                        <TextPanel width="100" fill={true} array={[
                            {text:<b style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Technologies Used</b>,height:25,blank:"#4AC936",center:true},
                            {text:"Linux",height:50,center:true,align:true},
                            {text:"Apache",height:50,center:true,align:true},
                            {text:"MySQL",height:50,center:true,align:true},
                            {text:"PHP",height:50,center:true,align:true},
                            {text:"Html/Css/JS",height:50,center:true,align:true},
                            {text:"FileZilla",height:50,center:true,align:true},
                            {text:"Digital Ocean",height:50,center:true,align:true},
                            {text:"Swagger",height:50,center:true,align:true},
                        ]} />
                    </div>
                    
                </div>
            </div>
            
            <div/>
            <div className="column">
                <TextPanel width="100" array={[{text:<span style={{fontSize:"clamp(14px,1.4vw,22px)"}}>User Authentication (Signup/Login)</span>,height:100,center:true, blank:"#FF4E4E"}]}/>
                <div className="row">
                    <div className="column">
                        <ImageTextPanel class="topLeft" aspectRatio="1440/900" image={Cloud10SignUp} text={<span style={{color:"black"}}> Signup Page</span>} />
                        <TextPanel width="100" array={[{text:<span>
                            <b style={{textDecoration:"underline"}}>Sign Up</b>: New users can register by providing their <b><em>name</em></b>, <b><em>email</em></b>, and <b><em>password</em></b>. 
                            During registration, validations ensure the email format is correct and that the password meets complexity requirements. 
                            As well as providing Error Handling so when an email is already registered or if passwords don’t match, users will receive 
                            clear feedback.</span>, height:100}]} />
                    </div>
                    <TextPanel width="2" array={[{height:100, blank:"#424242"}]} />
                    <div className="column">
                        <ImageTextPanel class="topRight" aspectRatio="1440/900" image={Cloud10Login} text={<span style={{color:"black"}}> Login Page</span>} />
                        <TextPanel width="100" fill={true} array={[
                            {text:<span><b style={{textDecoration:"underline"}}>Login</b>: Returning users log in using their <b>email</b> and <b>password</b>. 
                            If the credentials are correct, they are redirected to their dashboard. 
                            If not, an error message is displayed, indicating invalid credentials.</span>, height:100}]} />
                    </div>
                </div>
            </div>
            
            
            <div/>

            <div className="column">
                <TextPanel width="100" array={[{text:<span style={{fontSize:"clamp(14px,1.4vw,22px)"}}>Contact Management Dashboard</span>,height:100, blank:"#FF4E4E", center:true}]}/>
                <div className="row">
                    <div className="column">
                        <ImagePanel aspectRatio="1440/900" image={Cloud10ContactPage1} flex="1" 
                        />
                        <ImagePanel aspectRatio="1440/900" image={Cloud10ContactPage2} flex="1"  
                        />
                    </div>
                    <TextPanel width="33" array={[
                                {height:100, blank:"#424242"},
                                {text:<span>Once logged in, users are taken to their <b>personal dashboard</b>, 
                                    where they can <b>manage their contacts</b>. Each user has their own contact list that is 
                                    stored <span style={{textDecoration:"underline"}}>securely</span> in the <em>database</em> and 
                                    tied to their account. This makes sure no one else can access their contact information.
                                </span>},
                                {height:100, blank:"#424242"},
                                {text:<span><b>View Contacts</b>: Users can see a list of all their contacts in a table format. 
                                    Each contact displays <span style={{textDecoration:"underline"}}>essential information</span> like <b>name</b>, <b>phone number</b>, <b>email</b>. 
                                    For better usability, there’s a search bar at the top that allows users to search contacts by name or email.
                                </span>},
                                {height:100, blank:"#424242"},
                                {text:<span><b>Add Contact</b>: Users can <span style={{textDecoration:"underline"}}>add new contacts</span> by filling out 
                                    a <em>form</em>. 
                                    Fields include the name, phone number, email.
                                </span>},
                                {height:100, blank:"#424242"},
                                {text:<span><b>Edit Contact</b>: If a user needs to <span style={{textDecoration:"underline"}}>update any contact information</span>, they 
                                    can click the <b><em>"Edit"</em> button</b> next to the contact. 
                                    This brings up a form pre-filled with the existing details, which can be modified. 
                                    After saving, the updated information is reflected in the contact list.
                                </span>},
                                {height:100, blank:"#424242"},
                                {text:<span><b>Delete Contact</b>: For contacts that are no longer needed, users can easily delete them by clicking a <b><em>"Delete"</em> button</b>. 
                                    A confirmation prompt ensures that users don’t accidentally remove contacts.
                                </span>},
                                {height:100, blank:"#424242"},
                            ]} />
                </div>
            </div>
            

            <div/>
            <div className="column">
                <TextPanel width="100" array={[{text:<b style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Team Members</b>,height:100, blank:"#4AC936", center:true}]}/>
                <div className="row">
                    <TextPanel width="2" array={[{height:100, blank:"#2955C7"}]}/>
                    <div className="column">
                        <div className="row">
                                <TextPanel width="100" array={[
                                    {text:<span >Nicole Nascimento</span>,height:100,center:true,align:true},
                                    {text:<span >Parsa Baghaie</span>,height:100,center:true,align:true},
                                    {text:<span >Evangelos Kontonotas</span>,height:100,center:true,align:true},
                                    {text:<span >Joseph Torres</span>,height:100,center:true,align:true},
                                    {text:<span >Jordan Genest</span>,height:100,center:true,align:true},
                                ]}
                                />
                                <TextPanel width="100" array={[
                                    {text:<span >Project Manager</span>,height:100,center:true,align:true},
                                    {text:<span >Front End Developer</span>,height:100,center:true,align:true},
                                    {text:<span >API</span>,height:100,center:true,align:true},
                                    {text:<span >API</span>,height:100,center:true,align:true},
                                    {text:<span >Database</span>,height:100,center:true,align:true},
                                ]}
                                />
                        </div>
                    </div>
                    <TextPanel width="2" array={[{height:100, blank:"#2955C7"}]}/>
                </div>
            </div>
            
        </div>
    );
}
/////////////////////////////////////////////////////////////

let change = null;
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const titleName = "Cloud 10";
const titleFontSize = 2.7;
const linkHref = "github.com/nizolnier/Cloud-10"
const headerFontMax = 54;


function Render(){
    if(window.innerWidth >= 1024){
        if (change !== 1){
            change = 1;
            root.render(
                <div>
                    <BackgroundImg />
                    <Header title={titleName} fontsize={titleFontSize} link={linkHref} fontMax={headerFontMax}/>
                    <Comic/>
                </div>
            );
        }
    }
    else if(window.innerWidth >= 768 && window.innerWidth < 1024){
        if (change !== 2){
            change = 2;
            root.render(
                <div>
                    <BackgroundImg />
                    <Header title={titleName} fontsize={titleFontSize} link={linkHref} fontMax={headerFontMax}/>
                    <ComicTablet/>
                </div>
            );   
        }
    }
    else{
        if (change !== 3){
            change = 3;
            root.render(
                <div>
                    <BackgroundImg />
                    <HeaderMobile title={titleName} fontsize={titleFontSize*1.9} link={linkHref}/>
                    <ComicMobile/>
                </div>
            );   
        }
    }
}
Render();
window.addEventListener('resize', Render);