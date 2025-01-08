import Header from "../Components/Header";
import HeaderMobile from "../Components/HeaderMobile";
import BackgroundImg from "../Components/BackgroundImg";
import TextPanel from "../Components/TextPanel";
import ImagePanel from "../Components/ImagePanel";
import ImageTextPanel from "../Components/ImageTextPanel";

const VenomGains = "../../images/VenomGains/VenomGainsLogo.svg";

const VenomGainsRoutines = "../../images/VenomGains/VenomGainsRoutines.svg";
const VenomGainsWorkouts = "../../images/VenomGains/VenomGainsWorkouts.svg";
const VenomGainsWorkoutsEdit = "../../images/VenomGains/VenomGainsWorkoutsEdit.svg";
const VenomGainsExercises = "../../images/VenomGains/VenomGainsExercises.svg";
const VenomGainsAddExercise = "../../images/VenomGains/VenomGainsAddExercise.svg";

const CatalogCatagories ="../../images/VenomGains/CatalogCatagories.svg";
const CatalogExercises ="../../images/VenomGains/CatalogExercises.svg";
const CatalogDescription ="../../images/VenomGains/CatalogDescription.svg";

const HomePage ="../../images/VenomGains/HomePage.svg";

// Comic //
function ComicMobile(){
    return(
        <div id="comicSmall" >
            <div className="column">
                <TextPanel width="100" array={[{text:<span style={{fontSize:"clamp(14px,1.4vw,22px)"}}>Overview</span>,height:100, blank:"#FF4E4E",center:true}]}/>
                <div className="row">
                    <TextPanel width="25" array={[
                            {height:100,blank:"#424242"},{height:100,blank:"#424242"}]} />
                    <ImagePanel backColor="AntiqueWhite" aspectRatio="1/1" image={VenomGains}/>
                    <TextPanel width="25" array={[
                            {height:100,blank:"#424242"},{height:100,blank:"#424242"},]} />
                </div>
                <TextPanel width="100" fill={true} array={[
                    {
                        text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Description</span>, blank:"#4AC936",center:true
                    },
                    {
                        text:<span><em><strong style={{color:"#4AC936"}}>Venom Gains</strong></em> is a <u>mobile based</u> <strong>Exercise Tracker application</strong> designed to help users seamlessly <strong><em>organize</em></strong>, <strong><em>manage</em></strong>, and <strong><em>track </em></strong>their fitness routines. Built using the <u><strong>MERN stack</strong></u>, it provides a <em>smooth </em>and <em>user-friendly</em> experience for users at any fitness level. The core features of the app include <strong>routine creation</strong>, <strong>workout scheduling</strong>, and <strong>fitness education</strong>, all accessible through a clean and intuitive interface</span>, 
                        height:100
                    }
                ]} />
                <div className="column">
                    <TextPanel width="100"array={[
                        {
                            text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Technologies Used</span>, blank:"#4AC936",center:true
                        },
                    ]} />
                    <div className="row">
                        <TextPanel width="100"array={[
                            {
                                text:<span>MongoDB</span>,center:true
                            },
                        ]} />
                        <TextPanel width="100"array={[
                            {
                                text:<span>Express.js</span>,center:true
                            },
                        ]} />
                    </div>
                    <div className="row">
                        <TextPanel width="100"array={[
                            {
                                text:<span>React Native</span>,center:true
                            },
                        ]} />
                        <TextPanel width="100"array={[
                            {
                                text:<span>Node.js</span>,center:true
                            },
                        ]} />
                    </div>
                </div>
            </div>
            
            <br/>
            <div className="column">
                <TextPanel width="100" array={[{text:<span style={{fontSize:"clamp(14px,1.4vw,22px)"}}>Features</span>, blank:"#FF4E4E",center:true}]}/>
                <div className="column">
                    <TextPanel width="100" array={[
                        {
                            text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Routine Creation</span>, blank:"#6275D8",center:true
                        },
                    ]}/>
                    <div className="row">
                        <ImagePanel image={VenomGainsRoutines}/>
                        <ImagePanel image={VenomGainsWorkouts}/>
                        <ImagePanel image={VenomGainsWorkoutsEdit}/>
                    </div>
                    <div className="row">
                        <TextPanel width="37.5" array={[{height:100,blank:"#424242"},]} />
                        <ImagePanel image={VenomGainsExercises}/>
                        <ImagePanel image={VenomGainsAddExercise}/>
                        <TextPanel width="37.5" array={[{height:100,blank:"#424242"},]} />
                    </div>
                    <TextPanel width="100" array={[{text:<span>Users can easily <strong>create custom workout routines</strong> by assigning a<em> routine name</em> and adding specific workouts from the app&rsquo;s workout catalog. Each workout in the routine can be <em>customized</em> with details like the number of <strong>sets</strong>, <strong>reps</strong>, and <strong>weight </strong>to perform for each exercise. Once the routine is set, users can <u>assign</u> it to specific <strong>days of the week</strong>, selecting from <strong>Monday to Sunday</strong>. Routines can also be set for multiple days, giving flexibility in managing workout schedules. This feature is the core focus of the app, allowing for highly personalized workout routines.</span>},
                    ]}/>
                </div>
            </div>
            
            <div/>
            <div className="column">
                <TextPanel width="100" array={[
                    {
                        text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Schedule</span>, blank:"#6275D8",center:true
                    },
                ]}/>
                <div className="row">
                    <TextPanel array={[{blank:"#424242", height:100},{blank:"#424242", height:100}]}/>
                    <ImagePanel image={HomePage}/>
                    <TextPanel array={[{blank:"#424242", height:100},{blank:"#424242", height:100}]}/>
                </div>
                <TextPanel width="100" fill={true} array={[{text:<span>The <strong>schedule tab</strong> offers a <em>clear</em>, organized view of all the routines a user has created and assigned to specific days. It serves as a calendar-like view where users can quickly see what workouts they have scheduled for <em>today</em>, <em>tomorrow</em>, or <em>any upcoming days</em>.</span>}
                ]}/>
            </div>

            <div/>
            <div className="column">
                <TextPanel width="100" array={[
                        {
                            text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Catalog</span>, blank:"#6275D8",center:true
                        },
                ]}/>
                <div className="row">
                    <ImagePanel image={CatalogCatagories}/>
                    <ImagePanel image={CatalogExercises}/>
                    <ImagePanel image={CatalogDescription}/>
                </div>
                <TextPanel width="100" fill={true} array={[{text:<span>The <strong>category page</strong> provides a <strong>comprehensive list of exercises</strong>, each with a <strong>detailed description</strong> and <strong>image</strong> to guide users on proper <strong>form and technique</strong>. This <u>catalog </u>serves as the <em><strong>foundation</strong> </em>for creating workout routines, ensuring users have access to a <u>wide range of exercises</u> that suit their <strong>fitness goals</strong>.</span>},
                ]}/>
            </div>

            <div/>
            <TextPanel width="100" array={[
                {
                    text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Account Creation & Security</span>, blank:"#6275D8",center:true
                },
                {text:<span>Users can easily <strong>create an account</strong> by providing their <em><strong>email</strong> </em>and setting a <em><strong>password</strong></em>. Upon registration, users receive an <strong>email for account verification</strong>, ensuring the <em>authenticity </em>of new accounts. They must verify their email before fully accessing the app's features.</span>},
            ]}/>

            <div/>
            <TextPanel width="100" array={[
                {
                    text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Login & Password Management</span>, blank:"#6275D8",center:true
                },
                {text:<span>Once an account is created, users can securely <strong>log in</strong> with their <strong>credentials</strong>. If users forget their password, they can quickly recover it by using the <u>Forgot Password feature</u>, which sends a <b>password reset link</b> to their <b>email</b>, allowing them to regain access to their account seamlessly.</span>
                },
            ]}/>


            <br/>
            <div className="column">
                <TextPanel width="100" array={[{text:<span style={{fontSize:"clamp(14px,1.4vw,22px)"}}>Team Members</span>,height:100, blank:"#FF4E4E",center:true}]}/>
                <div className="row">
                    <TextPanel width="100" fill={true} array={[
                    {text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Parsa Baghaie</span>,blank:"#4AC936",center:true, align:true, height:100},
                    {text:<span>Lead Front-End Developer <br/> API Developer</span>,height:100,center:true},
                    ]}/>
                </div>
                <div className="row">
                    <TextPanel width="100" fill={true} array={[
                    {text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Patrick Tumbos</span>,blank:"#4AC936",center:true, align:true, height:100},
                    {text:<span>Front End Developer</span>,height:100,center:true},
                    ]}/>

                    <TextPanel width="100" fill={true} array={[
                    {text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Mike Rojas</span>,blank:"#4AC936",center:true, align:true, height:100},
                    {text:<span>Front End Developer</span>,height:100,center:true},
                    ]}/>
                </div>
                <div className="row">
                    <TextPanel width="100" fill={true} array={[
                    {text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Alan Laboy</span>,blank:"#4AC936",center:true, align:true, height:100},
                    {text:<span>Project Manager <br/> API Developer</span>,height:100,center:true},
                    ]}/>

                    <TextPanel width="100" fill={true} array={[
                    {text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Joe Nguyen</span>,blank:"#4AC936",center:true, align:true, height:100},
                    {text:<span>Database Handler <br/> API Developer</span>,height:100,center:true},
                    ]}/>
                </div>
                <div className="row">
                    <TextPanel width="100" array={[
                    {text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Luis Andres Barrera Inga</span>,blank:"#4AC936",center:true, align:true, height:100},
                    ]}/>

                    <TextPanel width="100" array={[
                    {text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Sophia Georgieva</span>,blank:"#4AC936",center:true, align:true, height:100},
                    ]}/>
                </div>    
                <div className="row">
                    <TextPanel width="100" fill={true} array={[
                    {text:<span>API Developer</span>,height:100,center:true},
                    ]}/>
                    <TextPanel width="100" fill={true} array={[
                    {text:<span>API Developer</span>,height:100,center:true},
                    ]}/>
                </div>
            </div>
        </div>
    );
}
function ComicTablet(){
    return(
        <div id="comicMedium">
            <div className="column">
                <TextPanel width="100" array={[{text:<span style={{fontSize:"clamp(14px,1.4vw,22px)"}}>Overview</span>,height:100, blank:"#FF4E4E",center:true}]}/>
                <div className="row">
                    <div className="column" style={{flex:"1"}}>
                    <ImagePanel backColor="AntiqueWhite" aspectRatio="1/1" image={VenomGains}/>
                    </div>

                    <div className="column" style={{flex:"3.5"}}>
                        <TextPanel width="100" fill={true} array={[
                            {
                                text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Description</span>, blank:"#4AC936",center:true
                            },
                            {
                                text:<span><em><strong style={{color:"#4AC936"}}>Venom Gains</strong></em> is a <u>mobile based</u> <strong>Exercise Tracker application</strong> designed to help users seamlessly <strong><em>organize</em></strong>, <strong><em>manage</em></strong>, and <strong><em>track </em></strong>their fitness routines. Built using the <u><strong>MERN stack</strong></u>, it provides a <em>smooth </em>and <em>user-friendly</em> experience for users at any fitness level. The core features of the app include <strong>routine creation</strong>, <strong>workout scheduling</strong>, and <strong>fitness education</strong>, all accessible through a clean and intuitive interface</span>, 
                                height:100
                            }
                        ]} />
                        
                    </div>
                </div>
                <div className="column">
                    <TextPanel width="100"array={[
                        {
                            text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Technologies Used</span>, blank:"#4AC936",center:true
                        },
                    ]} />
                    <div className="row">
                        <TextPanel width="100"array={[
                            {
                                text:<span>MongoDB</span>,center:true
                            },
                        ]} />
                        <TextPanel width="100"array={[
                            {
                                text:<span>Express.js</span>,center:true
                            },
                        ]} />
                        <TextPanel width="100"array={[
                            {
                                text:<span>React Native</span>,center:true
                            },
                        ]} />
                        <TextPanel width="100"array={[
                            {
                                text:<span>Node.js</span>,center:true
                            },
                        ]} />
                    </div>
                </div>
            </div>
            

            <br/>
            <div className="column">
                <TextPanel width="100" array={[{text:<span style={{fontSize:"clamp(14px,1.4vw,22px)"}}>Features</span>,height:100, blank:"#FF4E4E",center:true}]}/>
                <div className="row">
                    <TextPanel width="25" array={[{blank:"#424242", height:100},]}/>
                    <TextPanel width="100" array={[
                        {
                            text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Routine Creation</span>, blank:"#6275D8",center:true
                        },
                    ]}/>
                    <TextPanel width="25" array={[{blank:"#424242", height:100},]}/>
                </div>
                <div className="column">
                    <div className="row">
                        <ImagePanel image={VenomGainsRoutines}/>
                        <ImagePanel image={VenomGainsWorkouts}/>
                        <ImagePanel image={VenomGainsWorkoutsEdit}/>
                        <ImagePanel image={VenomGainsExercises}/>
                        <ImagePanel image={VenomGainsAddExercise}/>
                    </div>
                    <TextPanel width="100" array={[{text:<span>Users can easily <strong>create custom workout routines</strong> by assigning a<em> routine name</em> and adding specific workouts from the app&rsquo;s workout catalog. Each workout in the routine can be <em>customized</em> with details like the number of <strong>sets</strong>, <strong>reps</strong>, and <strong>weight </strong>to perform for each exercise. Once the routine is set, users can <u>assign</u> it to specific <strong>days of the week</strong>, selecting from <strong>Monday to Sunday</strong>. Routines can also be set for multiple days, giving flexibility in managing workout schedules. This feature is the core focus of the app, allowing for highly personalized workout routines.</span>},]}/>
                </div>
            </div>
            
            <div/>
            <div className="row">
                <div className="column">
                    <TextPanel width="100" array={[
                        {
                            text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Schedule</span>, blank:"#6275D8",center:true
                        },
                    ]}/>
                    <div className="row">
                        <TextPanel array={[{blank:"#424242", height:100},]}/>
                        <ImagePanel image={HomePage}/>
                        <TextPanel array={[{blank:"#424242", height:100},]}/>
                    </div>
                    <TextPanel width="100" fill={true} array={[{text:<span>The <strong>schedule tab</strong> offers a <em>clear</em>, organized view of all the routines a user has created and assigned to specific days. It serves as a calendar-like view where users can quickly see what workouts they have scheduled for <em>today</em>, <em>tomorrow</em>, or <em>any upcoming days</em>.</span>, height:100}
                    ]}/>
                </div>
                <div className="column">
                    <TextPanel width="100" array={[
                            {
                                text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Catalog</span>, blank:"#6275D8",center:true
                            },
                    ]}/>
                    <div className="row">
                        <ImagePanel image={CatalogCatagories}/>
                        <ImagePanel image={CatalogExercises}/>
                        <ImagePanel image={CatalogDescription}/>
                    </div>
                    <TextPanel width="100" fill={true} array={[{text:<span>The <strong>category page</strong> provides a <strong>comprehensive list of exercises</strong>, each with a <strong>detailed description</strong> and <strong>image</strong> to guide users on proper <strong>form and technique</strong>. This <u>catalog </u>serves as the <em><strong>foundation</strong> </em>for creating workout routines, ensuring users have access to a <u>wide range of exercises</u> that suit their <strong>fitness goals</strong>.</span>, height:100},
                    ]}/>
                </div>
            </div>

            <div/>
            <div className="column">
                <div className="row">
                    <TextPanel width="50" array={[{blank:"#424242", height:100},]}/>
                    <TextPanel width="100" array={[
                        {
                            text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Account Creation & Security</span>, blank:"#6275D8",center:true
                        },
                    ]}/>
                    <TextPanel width="50" array={[{blank:"#424242", height:100},]}/>
                </div>
                <TextPanel width="100" fill={true} array={[{text:<span>Users can easily <strong>create an account</strong> by providing their <em><strong>email</strong> </em>and setting a <em><strong>password</strong></em>. Upon registration, users receive an <strong>email for account verification</strong>, ensuring the <em>authenticity </em>of new accounts. They must verify their email before fully accessing the app's features.</span>, height:100},
                ]}/>
            </div>

            <div/>
            <div className="column">
                <div className="row">
                    <TextPanel width="50" array={[{blank:"#424242", height:100},]}/>
                    <TextPanel width="100" array={[
                        {
                            text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Login & Password Management</span>, blank:"#6275D8",center:true
                        },
                    ]}/>
                    <TextPanel width="50" array={[{blank:"#424242", height:100},]}/>
                </div>
                <TextPanel width="100" fill={true} array={[{text:<span>Once an account is created, users can securely <strong>log in</strong> with their <strong>credentials</strong>. If users forget their password, they can quickly recover it by using the <u>Forgot Password feature</u>, which sends a <b>password reset link</b> to their <b>email</b>, allowing them to regain access to their account seamlessly.</span>, height:100},
                ]}/>
            </div>


            <br/>
            <div className="column">
                <TextPanel width="100" array={[{text:<span style={{fontSize:"clamp(14px,1.4vw,22px)"}}>Team Members</span>,height:100, blank:"#FF4E4E",center:true}]}/>
                <div className="row">
                    <div className="column">
                        <TextPanel width="100" fill={true} array={[
                        {text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Patrick Tumbos</span>,blank:"#4AC936",center:true},
                        {text:<span>Front End Developer</span>,height:100,center:true},
                        ]}/>
                    </div>
                    <div className="column">
                        <TextPanel width="100" fill={true} array={[
                        {text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Parsa Baghaie</span>,blank:"#4AC936",center:true},
                        {text:<span>Lead Front-End Developer <br/> API Developer</span>,height:100,center:true},
                        ]}/>
                    </div>
                    <div className="column">
                        <TextPanel width="100" fill={true} array={[
                        {text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Mike Rojas</span>,blank:"#4AC936",center:true},
                        {text:<span>Front End Developer</span>,height:100,center:true},
                        ]}/>
                    </div>
                </div>
                <div className="column">
                    <div className="row">
                        <TextPanel width="100" array={[
                            {text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Alan Laboy</span>,blank:"#4AC936",center:true, height:100, align:true},
                        ]}/>
                        <TextPanel width="100" array={[
                            {text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Luis Andres Barrera Inga</span>,blank:"#4AC936",center:true, height:100, align:true},
                        ]}/>
                    </div>
                    <div className="row">
                        <TextPanel width="100" array={[
                            {text:<span>Project Manager <br/> API Developer</span>,height:100,center:true},
                        ]}/>
                        <TextPanel width="100" array={[
                            {text:<span>API Developer</span>,height:100,center:true},
                        ]}/>
                    </div>
                </div>

                <div className="column">
                    <div className="row">
                        <TextPanel width="100"array={[
                            {text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Joe Nguyen</span>,blank:"#4AC936",center:true, height:100, align:true},
                        ]}/>
                        <TextPanel width="100" array={[
                            {text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Sophia Georgieva</span>,blank:"#4AC936",center:true, height:100, align:true},
                        ]}/>
                        
                    </div>
                    <div className="row">
                        <TextPanel width="100" array={[
                            {text:<span>Database Handler <br/> API Developer</span>,height:100,center:true},
                        ]}/>
                        <TextPanel width="100" array={[
                            {text:<span>API Developer</span>,height:100,center:true},
                        ]}/>
                    </div>
                </div>
            </div>
            
            
        </div>);
}
function Comic () {
    return(
        <div id="comicLarge" >
            <div className="column">
                <TextPanel width="100" array={[{text:<span style={{fontSize:"clamp(14px,1.4vw,22px)"}}>Overview</span>,height:100, blank:"#FF4E4E",center:true}]}/>
                <div className="row">
                    <div className="column" style={{flex:"1"}}>
                    <ImagePanel backColor="AntiqueWhite" aspectRatio="1/1" image={VenomGains}/>
                    </div>
                    <div className="column" style={{flex:"3.5"}}>
                        <TextPanel width="100" fill={true} array={[
                            {
                                text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Description</span>, blank:"#4AC936",center:true
                            },
                            {
                                text:<span><em><strong style={{color:"#4AC936"}}>Venom Gains</strong></em> is a <u>mobile based</u> <strong>Exercise Tracker application</strong> designed to help users seamlessly <strong><em>organize</em></strong>, <strong><em>manage</em></strong>, and <strong><em>track </em></strong>their fitness routines. Built using the <u><strong>MERN stack</strong></u>, it provides a <em>smooth </em>and <em>user-friendly</em> experience for users at any fitness level. The core features of the app include <strong>routine creation</strong>, <strong>workout scheduling</strong>, and <strong>fitness education</strong>, all accessible through a clean and intuitive interface</span>, 
                                height:100
                            }
                        ]} />
                        <TextPanel width="100"array={[
                            {
                                text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Technologies Used</span>, blank:"#4AC936",center:true
                            },
                        ]} />
                        <div className="row">
                            <TextPanel width="100"array={[
                                {
                                    text:<span>MongoDB</span>,center:true
                                },
                            ]} />
                            <TextPanel width="100"array={[
                                {
                                    text:<span>Express.js</span>,center:true
                                },
                            ]} />
                            <TextPanel width="100"array={[
                                {
                                    text:<span>React Native</span>,center:true
                                },
                            ]} />
                            <TextPanel width="100"array={[
                                {
                                    text:<span>Node.js</span>,center:true
                                },
                            ]} />
                        </div>
                    </div>
                </div>
            </div>
            
            <br/>
            <div className="column">
                <TextPanel width="100" array={[{text:<span style={{fontSize:"clamp(14px,1.4vw,22px)"}}>Features</span>,height:100, blank:"#FF4E4E",center:true}]}/>
                <div className="row">
                    <TextPanel width="25" array={[{blank:"#424242", height:100},]}/>
                    <TextPanel width="100" array={[
                        {
                            text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Routine Creation</span>, blank:"#6275D8",center:true
                        },
                    ]}/>
                    <TextPanel width="25" array={[{blank:"#424242", height:100},]}/>
                </div>
                <div className="column">
                    <div className="row">
                        <ImagePanel image={VenomGainsRoutines}/>
                        <ImagePanel image={VenomGainsWorkouts}/>
                        <ImagePanel image={VenomGainsWorkoutsEdit}/>
                        <ImagePanel image={VenomGainsExercises}/>
                        <ImagePanel image={VenomGainsAddExercise}/>
                    </div>
                    <TextPanel width="100" array={[{text:<span>Users can easily <strong>create custom workout routines</strong> by assigning a<em> routine name</em> and adding specific workouts from the app&rsquo;s workout catalog. Each workout in the routine can be <em>customized</em> with details like the number of <strong>sets</strong>, <strong>reps</strong>, and <strong>weight </strong>to perform for each exercise. Once the routine is set, users can <u>assign</u> it to specific <strong>days of the week</strong>, selecting from <strong>Monday to Sunday</strong>. Routines can also be set for multiple days, giving flexibility in managing workout schedules. This feature is the core focus of the app, allowing for highly personalized workout routines.</span>},]}/>
                </div>
            </div>
            
            <div/>
            <div className="row">
                <div className="column">
                    <TextPanel width="100" array={[
                        {
                            text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Schedule</span>, blank:"#6275D8",center:true
                        },
                    ]}/>
                    <div className="row">
                        <TextPanel array={[{blank:"#424242", height:100},]}/>
                        <ImagePanel image={HomePage}/>
                        <TextPanel array={[{blank:"#424242", height:100},]}/>
                    </div>
                    <TextPanel width="100" fill={true} array={[{text:<span>The <strong>schedule tab</strong> offers a <em>clear</em>, organized view of all the routines a user has created and assigned to specific days. It serves as a calendar-like view where users can quickly see what workouts they have scheduled for <em>today</em>, <em>tomorrow</em>, or <em>any upcoming days</em>.</span>, height:100}
                    ]}/>
                </div>
                <div className="column">
                    <TextPanel width="100" array={[
                            {
                                text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Catalog</span>, blank:"#6275D8",center:true
                            },
                    ]}/>
                    <div className="row">
                        <ImagePanel image={CatalogCatagories}/>
                        <ImagePanel image={CatalogExercises}/>
                        <ImagePanel image={CatalogDescription}/>
                    </div>
                    <TextPanel width="100" fill={true} array={[{text:<span>The <strong>category page</strong> provides a <strong>comprehensive list of exercises</strong>, each with a <strong>detailed description</strong> and <strong>image</strong> to guide users on proper <strong>form and technique</strong>. This <u>catalog </u>serves as the <em><strong>foundation</strong> </em>for creating workout routines, ensuring users have access to a <u>wide range of exercises</u> that suit their <strong>fitness goals</strong>.</span>, height:100},
                    ]}/>
                </div>
            </div>

            <div/>
            <div className="column">
                <div className="row">
                    <TextPanel width="50" array={[{blank:"#424242", height:100},]}/>
                    <TextPanel width="100" array={[
                        {
                            text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Account Creation & Security</span>, blank:"#6275D8",center:true
                        },
                    ]}/>
                    <TextPanel width="50" array={[{blank:"#424242", height:100},]}/>
                </div>
                <TextPanel width="100" fill={true} array={[{text:<span>Users can easily <strong>create an account</strong> by providing their <em><strong>email</strong> </em>and setting a <em><strong>password</strong></em>. Upon registration, users receive an <strong>email for account verification</strong>, ensuring the <em>authenticity </em>of new accounts. They must verify their email before fully accessing the app's features.</span>, height:100},
                ]}/>
            </div>

            <div/>
            <div className="column">
                <div className="row">
                    <TextPanel width="50" array={[{blank:"#424242", height:100},]}/>
                    <TextPanel width="100" array={[
                        {
                            text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Login & Password Management</span>, blank:"#6275D8",center:true
                        },
                    ]}/>
                    <TextPanel width="50" array={[{blank:"#424242", height:100},]}/>
                </div>
                <TextPanel width="100" fill={true} array={[{text:<span>Once an account is created, users can securely <strong>log in</strong> with their <strong>credentials</strong>. If users forget their password, they can quickly recover it by using the <u>Forgot Password feature</u>, which sends a <b>password reset link</b> to their <b>email</b>, allowing them to regain access to their account seamlessly.</span>, height:100},
                ]}/>
            </div>


            <br/>
            <div className="column">
                <TextPanel width="100" array={[{text:<span style={{fontSize:"clamp(14px,1.4vw,22px)"}}>Team Members</span>,height:100, blank:"#FF4E4E",center:true}]}/>
                <div className="row">
                    <div className="column">
                        <TextPanel width="100" fill={true} array={[
                        {text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Patrick Tumbos</span>,blank:"#4AC936",center:true},
                        {text:<span>Front End Developer</span>,height:100,center:true},
                        ]}/>
                    </div>
                    <div className="column">
                        <TextPanel width="100" fill={true} array={[
                        {text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Parsa Baghaie</span>,blank:"#4AC936",center:true},
                        {text:<span>Lead Front-End Developer <br/> API Developer</span>,height:100,center:true},
                        ]}/>
                    </div>
                    <div className="column">
                        <TextPanel width="100" fill={true} array={[
                        {text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Mike Rojas</span>,blank:"#4AC936",center:true},
                        {text:<span>Front End Developer</span>,height:100,center:true},
                        ]}/>
                    </div>
                </div>    
                <div className="column">
                    <div className="row">
                        <TextPanel width="100" array={[
                            {text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Alan Laboy</span>,blank:"#4AC936",center:true, height:100, align:true},
                        ]}/>
                        <TextPanel width="100" array={[
                            {text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Luis Andres Barrera Inga</span>,blank:"#4AC936",center:true, height:100, align:true},
                        ]}/>
                        <TextPanel width="100"array={[
                            {text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Joe Nguyen</span>,blank:"#4AC936",center:true, height:100, align:true},
                        ]}/>
                        <TextPanel width="100" array={[
                            {text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Sophia Georgieva</span>,blank:"#4AC936",center:true, height:100, align:true},
                        ]}/>
                        
                    </div>
                    <div className="row">
                        <TextPanel width="100" array={[
                            {text:<span>Project Manager <br/> API Developer</span>,height:100,center:true},
                        ]}/>
                        <TextPanel width="100" array={[
                            {text:<span>API Developer</span>,height:100,center:true},
                        ]}/>
                        <TextPanel width="100" array={[
                            {text:<span>Database Handler <br/> API Developer</span>,height:100,center:true},
                        ]}/>
                        <TextPanel width="100" array={[
                            {text:<span>API Developer</span>,height:100,center:true},
                        ]}/>
                    </div>
                </div>
            </div>
            
            
        </div>
    );
}
/////////////////////////////////////////////////////////////

let change = null;
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const titleName = "Venom Gains";
const titleFontSize = 2.7;
const linkHref = "github.com/ParsaB22/my-app"
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