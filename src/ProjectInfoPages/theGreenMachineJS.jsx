import Header from "../Components/Header";
import HeaderMobile from "../Components/HeaderMobile";
import BackgroundImg from "../Components/BackgroundImg";
import TextPanel from "../Components/TextPanel";
import ImagePanel from "../Components/ImagePanel";
import ImageTextPanel from "../Components/ImageTextPanel";

const GreenMachinePlayer = "../../images/GreenMachine/GreenMachineIcon.png";
const GreenMachineAttacks = "../../images/GreenMachine/GreenMachineAttacks.svg";
const GreenMachineMovement = "../../images/GreenMachine/GreenMachineMovement.svg";
const GreenMachineBoss1 = "../../images/GreenMachine/boss1.png";
const GreenMachineBoss2 = "../../images/GreenMachine/boss2.png";
const GreenMachineBoss3 = "../../images/GreenMachine/boss3.png";

// Comic //
function ComicMobile(){
    return(
        <div id="comicSmall" >
            <div className="column">
                <TextPanel width="100" array={[{text:<span style={{fontSize:"clamp(14px,1.4vw,22px)"}}>Overview</span>,height:100, blank:"#FF4E4E",center:true}]}/>
                <div className="row">
                    <TextPanel width="25" array={[
                            {height:75,blank:"#424242"},{height:25,blank:"#424242"}]} />
                    <ImagePanel aspectRatio="1/1" image={GreenMachinePlayer}/>
                    <TextPanel width="25" array={[
                            {height:25,blank:"#424242"},{height:75,blank:"#424242"}]} />
                </div>
                <TextPanel width="100" array={[
                    {
                        text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Description</span>, blank:"#6275D8",center:true
                    },
                    {
                        text:<span>The <strong style={{color:"forestgreen"}}>Green Machine</strong> is a <strong><em>2D action-adventure platform game</em></strong> in which 
                        can be compared to games like Hollow Knight. <u>Developed in Unity</u> this game is built with a deep nature-vs-technology 
                        theme, where the player takes on the role of an old, 
                        forgotten robot fighting against the forces of nature. The world is brought to life with unique handcrafted player and boss models, 
                        as well as their animations. The game features dynamic combat, challenging platforming, 
                        and boss battles.</span>, 
                        // height:100
                    },
                    
                ]} 
                />
            </div>
            <div/>
            <TextPanel width="100" array={[
                {text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Technologies Used</span>,blank:"#6275D8",center:true},
                {text:"Unity",height:100,center:true},
                {text:"C#",height:100,center:true},
                {text:"Aseprite",height:100,center:true},
                {text:"Unity Source Control(Plastic SCM)",height:100,center:true},
            ]}/>
            <div/>

            <TextPanel width="100" array={[
                    {
                        text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Summary</span>, blank:"#6275D8",center:true
                    },
                    
                    {
                        text:<span>The game is set in a world where nature has overrun the technological world of the past. The player controls an old robot, 
                            a relic from an ancient technological era, now partially infused with nature and has awakened in a lush world dominated by nature’s forces.
                            The core of the story revolves around the clash between the remnants of technology and the overwhelming force of nature. <br/>
                            <br/>
                            A robot, armed with a sword, must traverse dangerous landscapes filled with nature-based enemies 
                            and confront three powerful area bosses, each representing different aspects of the natural world. Along the way, 
                            the player will face various obstacles and enemies, as nature is relentless in reclaiming the land.
                            The player must adventure across the land to unviel the mysteries of what has happened to the world.
                            </span>, 
                        height:100
                    }
                ]} />

            <br/>
            <div className="column">
                <TextPanel width="100" array={[{text:<span style={{fontSize:"clamp(14px,1.4vw,22px)"}}>Player Abilities and Movements</span>,height:100, blank:"#FF4E4E",center:true}]}/>
                <TextPanel width="100" fill={true} array={[
                    {text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Attacks</span>,blank:"#6275D8",center:true},
                    {
                        text:<span>
                            <img style={{width:"calc(100% + 7px)", marginLeft:"-5px",marginTop:"-2px", borderBottom:"black solid 4px", backgroundColor:"khaki"}} src={GreenMachineAttacks}/>
                            The robot’s main form of attack is its sword. 
                            The sword can perform a simple attack in all 4 directions in the air, but only left, right, and upwards on the ground
                            each with its own unique animation.
                            </span>,
                        // height:100,
                    },
                ]}/>
            </div>
            <div/>
            <TextPanel width="100" fill={true} array={[
                {text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Special Abilities</span>,blank:"#6275D8",center:true},
                {
                    text:<span>When attacking and killing enemies the robot is able to tap into the infused nature part
                        of its body and absorb nature engery from the creature filling up an energy bar in which can be used
                        to unleash a devestating projectile attack or used to heal the player character</span>
                },

                ]}
            />
            <div/>
            <TextPanel width="100" fill={true}  array={[
                {text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Movement</span>,blank:"#6275D8",center:true},
                {
                    text:<span>
                    <img style={{width:"calc(100% + 7px)", marginLeft:"-5px",marginTop:"-2px", borderBottom:"black solid 4px", backgroundColor:"khaki"}} src={GreenMachineMovement}/>
                    The robot is not only equipped for combat but is also agile, allowing for dynamic platforming across the three unique 
                    level designs. The player can run, jump, double jump, and dash to navigate through the environment, giving them flexibility 
                    in both combat and exploration.
                        </span>,
                    // height:100,
                },
                ]}
            />

            <br/>
            <TextPanel width="100" array={[
                {text:<span style={{fontSize:"clamp(14px,1.4vw,22px)"}}>Enemies</span>, blank:"#FF4E4E",center:true},
                {text:<span>Throughout the levels, the player will encounter a variety of nature-based enemies, each with unique behaviors and attack patterns. 
                    There are multiple types of enemies, each representing different aspects of nature (flora, animal, and elemental). 
                    These enemies behave differently, with some charging the player head-on while others using ranged attacks
                    to impede progress.</span>
                }
            ]}/>

            <br/>
            <TextPanel width="100" array={[
                {text:<span style={{fontSize:"clamp(14px,1.4vw,22px)"}}>Bosses</span>, blank:"#FF4E4E",center:true},
                {text:<span>Each boss features its own distinct moveset, evolving through various AI states as 
                    they target the player. With hand-crafted attack animations, every battle offers a unique experience. Additionally, when bosses 
                    reach half health, they enter an enraged state, unleashing more frequent and devastating attacks. Upon defeat, the boss drops two 
                    upgrades, from which the player can choose one to perminately enhance an aspect of the player's abilities.</span>
                }
            ]}/>
            <div className="column">
                <TextPanel width="100" array={[
                {text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Boss 1</span>,blank:"#6275D8",center:true},
                ]}/>
                <div className="row">
                    <TextPanel width="25" array={[{height:75,blank:"#424242"},{height:25,blank:"#424242"}]} />
                    <ImagePanel aspectRatio="200/200" image={GreenMachineBoss1}/>
                    <TextPanel width="25" array={[{height:25,blank:"#424242"},{height:75,blank:"#424242"}]} />
                </div>
                <TextPanel width="100" fill={true} array={[
                {text:<span>This boss embodies the mystical and omnipotent qualities of Mother Nature. 
                    It is designed to represent the core of nature’s resilience and beauty, merging the essence of flora into a sentient, 
                    humanoid form. Its design and abilities are meant to challenge the player to adapt to both direct attacks and environmental manipulation.
                    </span>,height:100},
                ]}/>
            </div>
            <div className="column">
                <TextPanel width="100" array={[
                {text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Boss 2</span>,blank:"#6275D8",center:true},
                ]}/>
                <div className="row">
                <TextPanel width="25" array={[{height:25,blank:"#424242"},{height:75,blank:"#424242"}]} />
                <ImagePanel aspectRatio="200/200" image={GreenMachineBoss2}/>
                    <TextPanel width="25" array={[{height:75,blank:"#424242"},{height:25,blank:"#424242"}]} />
                </div>
                <TextPanel width="100" fill={true} array={[
                {text:<span>This boss has a striking, semi-humanoid form that combines the raw strength of rock with the sharp precision of crystals. 
                    Its design is both intimidating and majestic, as it seems to have emerged from the depths of the earth, carved by geological forces
                    over decades. It combines brute force with strategic use of its environment, creating a challenging and layered battle.</span>,height:100},
                ]}/>
            </div>
            <div className="column">
                <TextPanel width="100" array={[
                {text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Boss 3</span>,blank:"#6275D8",center:true},
                ]}/>
                <div className="row">
                    <TextPanel width="25" array={[{height:75,blank:"#424242"},{height:25,blank:"#424242"}]} />
                    <ImagePanel aspectRatio="1/1" image={GreenMachineBoss3}/>
                    <TextPanel width="25" array={[{height:25,blank:"#424242"},{height:75,blank:"#424242"}]} />
                </div>
                <TextPanel width="100" fill={true} array={[
                {text:<span>
                    This boss differs from the others, as it’s not purely a nature-based construct. 
                    Its appearance and essence are more akin to the player, blending both nature and machine. 
                    However, unlike the player—who has kept control of their mechanical side—this boss has lost the battle, becoming a tragic figure 
                    completely overtaken by nature. In combat, it combines nature-based attacks from previous bosses with its own unique abilities,
                    delivering a satisfying and challenging final encounter for the player.
                    </span>,height:100},
                ]}/>
            </div>
            <br/>
            <TextPanel width="100" array={[
                {text:<span style={{fontSize:"clamp(14px,1.4vw,22px)"}}>Level Design</span>, blank:"#FF4E4E",center:true},
                {text:<span>
                    Each level is uniquely designed to match the theme and character of its corresponding boss, offering players a 
                    distinct atmosphere and gameplay experience. The level layouts are crafted to enhance the ambiance and gameplay variety, 
                    featuring not only formidable enemies that impede progress but also challenging platforming. 
                    This combination ensures that each level tests the player’s skills in different ways, providing a fresh and immersive 
                    experience throughout the game.</span>
                }
            ]}/>
            <br/>
            <TextPanel width="100" array={[
                {text:<span style={{fontSize:"clamp(14px,1.4vw,22px)"}}>Sound Design</span>, blank:"#FF4E4E",center:true},
                {text:<span>Sound design in games is crucial for creating an immersive experience. 
                    In our game, for instance, we developed a custom soundtrack to complement the visuals and atmosphere. 
                    This music not only fills the silence but also enriches the player's journey through the level. 
                    By aligning the sound with the game's setting and actions, we help players feel more engaged and connected 
                    to the game world.</span>, height:100
                }
            ]}/>
            <br/>
            <div className="column">
                <TextPanel width="100" array={[
                    {text:<span style={{fontSize:"clamp(14px,1.4vw,22px)"}}>Team Members</span>, blank:"#FF4E4E",center:true},
                ]}/>
                <div className="row">
                    <TextPanel width="100" array={[
                    {text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Parsa Baghaie</span>,blank:"#4AC936",center:true},
                    {text:<span>Level Designer <br/> Player-Artist/Animator <br/>Narrative Writer <br/> Logic Developer</span>,height:100,center:true},
                    ]}/>
                    <TextPanel width="100" array={[
                    {text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Joe Nguyen</span>,blank:"#4AC936",center:true},
                    {text:<span>Enemy Ai Developer <br/> UI Developer <br/> Logic Developer</span>,height:100,center:true},
                    ]}/>
                </div>
                <div className="row">
                    <TextPanel width="100" array={[
                    {text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Ronit Mahalmani</span>,blank:"#4AC936",center:true},
                    {text:<span>Enemy Ai Developer <br/> UI Developer </span>,height:100,center:true},
                    ]}/>
                    <TextPanel width="100" array={[
                    {text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Thach Vo</span>,blank:"#4AC936",center:true},
                    {text:<span>Boss Ai Developer <br/> Boss-Artist/Animator </span>,height:100,center:true},
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
                <TextPanel width="25" array={[
                {height:25,blank:"#424242"},{height:75,blank:"#424242"}]} />
                <TextPanel width="25" array={[
                {height:50,blank:"#424242"},{height:50,blank:"#424242"}]} />
                <TextPanel width="25" array={[
                {height:75,blank:"#424242"},{height:25,blank:"#424242"}]} />
                <ImagePanel aspectRatio="1/1" image={GreenMachinePlayer}/>
                <TextPanel width="25" array={[
                {height:75,blank:"#424242"},{height:25,blank:"#424242"}]} />
                <TextPanel width="25" array={[
                {height:50,blank:"#424242"},{height:50,blank:"#424242"}]} />
                <TextPanel width="25" array={[
                {height:25,blank:"#424242"},{height:75,blank:"#424242"}]} />
            </div>
            <div className="row">
                <TextPanel width="100" array={[
                    {
                        text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Description</span>, blank:"#6275D8",center:true
                    },
                    {
                        text:<span>The <strong style={{color:"forestgreen"}}>Green Machine</strong> is a <strong><em>2D action-adventure platform game</em></strong> in which 
                        can be compared to games like Hollow Knight. <u>Developed in Unity</u> this game is built with a deep nature-vs-technology 
                        theme, where the player takes on the role of an old, 
                        forgotten robot fighting against the forces of nature. The world is brought to life with unique handcrafted player and boss models, 
                        as well as their animations. The game features dynamic combat, challenging platforming, 
                        and boss battles.</span>, 
                        // height:100
                    },
                    
                ]} 
                />
                <TextPanel width="100" array={[
                    {text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Technologies Used</span>,blank:"#6275D8",center:true},
                    {text:"Unity",height:100,align:true,center:true},
                    {text:"C#",height:100,align:true,center:true},
                    {text:"Aseprite",height:100,align:true,center:true},
                    {text:"Unity Source Control(Plastic SCM)",height:100,align:true,center:true},
                ]}/>
            </div>
            <TextPanel width="100" array={[
                    {
                        text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Summary</span>, blank:"#6275D8",center:true
                    },
                    
                    {
                        text:<span>The game is set in a world where nature has overrun the technological world of the past. The player controls an old robot, 
                            a relic from an ancient technological era, now partially infused with nature and has awakened in a lush world dominated by nature’s forces.
                            The core of the story revolves around the clash between the remnants of technology and the overwhelming force of nature. <br/>
                            <br/>
                            A robot, armed with a sword, must traverse dangerous landscapes filled with nature-based enemies 
                            and confront three powerful area bosses, each representing different aspects of the natural world. Along the way, 
                            the player will face various obstacles and enemies, as nature is relentless in reclaiming the land.
                            The player must adventure across the land to unviel the mysteries of what has happened to the world.
                            </span>, 
                        height:100
                    }
                ]} />
            </div>
            
            <br/>
            
            <div className="column">
                <TextPanel width="100" array={[{text:<span style={{fontSize:"clamp(14px,1.4vw,22px)"}}>Player Abilities and Movements</span>,height:100, blank:"#FF4E4E",center:true}]}/>
                <div className="row">
                    <div className="column" style={{flex:"5"}} >
                        <TextPanel width="100" array={[
                            {text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Attacks</span>,blank:"#6275D8",center:true},
                        ]}/>
                        <TextPanel width="100" fill={true} array={[
                            {
                                text:<span>
                                    <img style={{width:"calc(100% + 7px)", marginLeft:"-5px",marginTop:"-2px", borderBottom:"black solid 4px", backgroundColor:"khaki"}} src={GreenMachineAttacks}/>
                                    The robot’s main form of attack is its sword. 
                                    The sword can perform a simple attack in all 4 directions in the air, but only left, right, and upwards on the ground
                                    each with its own unique animation.
                                    </span>,
                                // height:100,
                            },
                            {text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Special Abilities</span>,blank:"#6275D8",center:true},
                            {
                                text:<span>When attacking and killing enemies the robot is able to tap into the infused nature part
                                    of its body and absorb nature engery from the creature filling up an energy bar in which can be used
                                    to unleash a devestating projectile attack or used to heal the player character</span>
                            },
                            

                            ]}
                        />
                    </div>
                    <div className="column"  style={{flex:"5"}}>
                        <TextPanel width="100" array={[
                            {text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Movement</span>,blank:"#6275D8",center:true},
                        ]}/>
                        <TextPanel width="100" fill={true}  array={[
                            {
                                text:<span>
                                <img style={{width:"calc(100% + 7px)", marginLeft:"-5px",marginTop:"-2px", borderBottom:"black solid 4px", backgroundColor:"khaki"}} src={GreenMachineMovement}/>
                                The robot is not only equipped for combat but is also agile, allowing for dynamic platforming across the three unique 
                                level designs. The player can run, jump, double jump, and dash to navigate through the environment, giving them flexibility 
                                in both combat and exploration.
                                    </span>,
                                // height:100,
                            },
                            {blank:"#424242", height:100},
                            {blank:"#424242", height:100},
                        ]}/>
                    </div>
                </div>
            </div>
            
            <br/>

            <div className="row">
                <TextPanel width="25" array={[
                    {blank:"#424242", height:100},
                ]}/>
                <TextPanel width="100" array={[
                    {text:<span style={{fontSize:"clamp(14px,1.4vw,22px)"}}>Enemies</span>, blank:"#FF4E4E",center:true},
                    {text:<span>Throughout the levels, the player will encounter a variety of nature-based enemies, each with unique behaviors and attack patterns. 
                        There are multiple types of enemies, each representing different aspects of nature (flora, animal, and elemental). 
                        These enemies behave differently, with some charging the player head-on while others using ranged attacks
                        to impede progress.</span>
                    }
                ]}/>
                <TextPanel width="25" array={[
                    {blank:"#424242", height:100},
                ]}/>
            </div>
            <br/>

            <TextPanel width="100" array={[
                {text:<span style={{fontSize:"clamp(14px,1.4vw,22px)"}}>Bosses</span>, blank:"#FF4E4E",center:true},
                {text:<span>Each boss features its own distinct moveset, evolving through various AI states as 
                    they target the player. With hand-crafted attack animations, every battle offers a unique experience. Additionally, when bosses 
                    reach half health, they enter an enraged state, unleashing more frequent and devastating attacks. Upon defeat, the boss drops two 
                    upgrades, from which the player can choose one to perminately enhance an aspect of the player's abilities.</span>}
            ]}/>
            <div className="row">
                <div className="column">
                    <TextPanel width="100" array={[
                    {text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Boss 1</span>,blank:"#6275D8",center:true},
                    ]}/>
                    <ImagePanel aspectRatio="1/1" image={GreenMachineBoss1}/>
                    <TextPanel width="100" fill={true} array={[
                    {text:<span>This boss embodies the mystical and omnipotent qualities of Mother Nature. 
                        It is designed to represent the core of nature’s resilience and beauty, merging the essence of flora into a sentient, 
                        humanoid form. Its design and abilities are meant to challenge the player to adapt to both direct attacks and environmental manipulation.
                        </span>,height:100},
                    ]}/>
                </div>
                <div className="column">
                    <TextPanel width="100" array={[
                    {text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Boss 2</span>,blank:"#6275D8",center:true},
                    ]}/>
                    <ImagePanel aspectRatio="1/1" image={GreenMachineBoss2}/>
                    <TextPanel width="100" fill={true} array={[
                    {text:<span>This boss has a striking, semi-humanoid form that combines the raw strength of rock with the sharp precision of crystals. 
                        Its design is both intimidating and majestic, as it seems to have emerged from the depths of the earth, carved by geological forces
                        over decades. It combines brute force with strategic use of its environment, creating a challenging and layered battle.</span>,height:100},
                    ]}/>
                </div>
                <div className="column">
                    <TextPanel width="100" array={[
                    {text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Boss 3</span>,blank:"#6275D8",center:true},
                    ]}/>
                    <ImagePanel aspectRatio="1/1" image={GreenMachineBoss3}/>
                    <TextPanel width="100" fill={true} array={[
                    {text:<span>
                        This boss differs from the others, as it’s not purely a nature-based construct. 
                        Its appearance and essence are more akin to the player, blending both nature and machine. 
                        However, unlike the player—who has kept control of their mechanical side—this boss has lost the battle, becoming a tragic figure 
                        completely overtaken by nature. In combat, it combines nature-based attacks from previous bosses with its own unique abilities,
                        delivering a satisfying and challenging final encounter for the player.
                        </span>,height:100},
                    ]}/>
                </div>
            </div>
            <br/>

            <div className="row">
            <TextPanel width="100" array={[
                {text:<span style={{fontSize:"clamp(14px,1.4vw,22px)"}}>Level Design</span>, blank:"#FF4E4E",center:true},
                {text:<span>
                    Each level is uniquely designed to match the theme and character of its corresponding boss, offering players a 
                    distinct atmosphere and gameplay experience. The level layouts are crafted to enhance the ambiance and gameplay variety, 
                    featuring not only formidable enemies that impede progress but also challenging platforming. 
                    This combination ensures that each level tests the player’s skills in different ways, providing a fresh and immersive 
                    experience throughout the game.</span>
                }
            ]}/>
            
            <TextPanel width="100" array={[
                {text:<span style={{fontSize:"clamp(14px,1.4vw,22px)"}}>Sound Design</span>, blank:"#FF4E4E",center:true},
                {text:<span>Sound design in games is crucial for creating an immersive experience. 
                    In our game, for instance, we developed a custom soundtrack to complement the visuals and atmosphere. 
                    This music not only fills the silence but also enriches the player's journey through the level. 
                    By aligning the sound with the game's setting and actions, we help players feel more engaged and connected 
                    to the game world.</span>, height:100
                }
            ]}/>
            </div>
            
            <br/>

            <div className="column">
                <TextPanel width="100" array={[
                    {text:<span style={{fontSize:"clamp(14px,1.4vw,22px)"}}>Team Members</span>, blank:"#FF4E4E",center:true},
                ]}/>
                <div className="row">
                    <TextPanel width="100" array={[
                    {text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Parsa Baghaie</span>,blank:"#4AC936",center:true},
                    {text:<span>Level Designer <br/> Player-Artist/Animator <br/>Narrative Writer <br/> Logic Developer</span>,height:100,center:true},
                    ]}/>
                    <TextPanel width="100" array={[
                    {text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Joe Nguyen</span>,blank:"#4AC936",center:true},
                    {text:<span>Enemy Ai Developer <br/> UI Developer <br/> Logic Developer</span>,height:100,center:true},
                    ]}/>
                </div>
                <div className="row">
                    <TextPanel width="100" array={[
                    {text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Ronit Mahalmani</span>,blank:"#4AC936",center:true},
                    {text:<span>Enemy Ai Developer <br/> UI Developer </span>,height:100,center:true},
                    ]}/>
                    <TextPanel width="100" array={[
                    {text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Thach Vo</span>,blank:"#4AC936",center:true},
                    {text:<span>Boss Ai Developer <br/> Boss-Artist/Animator </span>,height:100,center:true},
                    ]}/>
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
                    <TextPanel width="33.33" array={[
                            {
                                text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Description</span>, blank:"#4AC936",center:true
                            },
                            {
                                text:<span>The <strong style={{color:"forestgreen"}}>Green Machine</strong> is a <strong><em>2D action-adventure platform game</em></strong> in which 
                                can be compared to games like Hollow Knight. <u>Developed in Unity</u> this game is built with a deep nature-vs-technology 
                                theme, where the player takes on the role of an old, 
                                forgotten robot fighting against the forces of nature. The world is brought to life with unique handcrafted player and boss models, 
                                as well as their animations. The game features dynamic combat, challenging platforming, 
                                and boss battles.</span>, 
                                // height:100
                            },
                            {text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Technologies Used</span>,blank:"#4AC936",center:true},
                            {text:"Unity",height:100,center:true},
                            {text:"C#",height:100,center:true},
                            {text:"Aseprite",height:100,center:true},
                            {text:"Unity Source Control(Plastic SCM)",height:100,center:true},
                        ]} 
                    />
                    <div className="column">
                        <TextPanel width="100" fill={true} array={[
                            {height:100,blank:"#424242"},]} />
                        <ImagePanel aspectRatio="1/1" image={GreenMachinePlayer}/>
                        <TextPanel width="100" fill={true} array={[
                            {height:100,blank:"#424242"},]} />
                    </div>
                    <TextPanel width="33.33" array={[
                            {
                                text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Summary</span>, blank:"#4AC936",center:true
                            },
                            
                            {
                                text:<span>The game is set in a world where nature has overrun the technological world of the past. The player controls an old robot, 
                                    a relic from an ancient technological era, now partially infused with nature and has awakened in a lush world dominated by nature’s forces.
                                    The core of the story revolves around the clash between the remnants of technology and the overwhelming force of nature. <br/>
                                    <br/>
                                    A robot, armed with a sword, must traverse dangerous landscapes filled with nature-based enemies 
                                    and confront three powerful area bosses, each representing different aspects of the natural world. Along the way, 
                                    the player will face various obstacles and enemies, as nature is relentless in reclaiming the land.
                                    The player must adventure across the land to unviel the mysteries of what has happened to the world.
                                    </span>, 
                                height:100
                            }
                    ]} />
                </div>
            </div>
            
            <br/>
            <div className="column">
                <TextPanel width="100" array={[{text:<span style={{fontSize:"clamp(14px,1.4vw,22px)"}}>Player Abilities and Movements</span>,height:100, blank:"#FF4E4E",center:true}]}/>
                <div className="row">
                    <div className="column" style={{flex:"5"}} >
                        <TextPanel width="100" array={[
                            {text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Attacks</span>,blank:"#6275D8",center:true},
                        ]}/>
                        <TextPanel width="100" fill={true} array={[
                            {
                                text:<span>
                                    <img style={{width:"calc(100% + 7px)", marginLeft:"-5px",marginTop:"-2px", borderBottom:"black solid 4px", backgroundColor:"khaki"}} src={GreenMachineAttacks}/>
                                    The robot’s main form of attack is its sword. 
                                    The sword can perform a simple attack in all 4 directions in the air, but only left, right, and upwards on the ground
                                    each with its own unique animation.
                                    </span>,
                                // height:100,
                            },
                            {text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Special Abilities</span>,blank:"#6275D8",center:true},
                            {
                                text:<span>When attacking and killing enemies the robot is able to tap into the infused nature part
                                    of its body and absorb nature engery from the creature filling up an energy bar in which can be used
                                    to unleash a devestating projectile attack or used to heal the player character</span>
                            },
                            

                            ]}
                        />
                    </div>
                    <div className="column"  style={{flex:"5"}}>
                        <TextPanel width="100" array={[
                            {text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Movement</span>,blank:"#6275D8",center:true},
                        ]}/>
                        <TextPanel width="100" fill={true}  array={[
                            {
                                text:<span>
                                <img style={{width:"calc(100% + 7px)", marginLeft:"-5px",marginTop:"-2px", borderBottom:"black solid 4px", backgroundColor:"khaki"}} src={GreenMachineMovement}/>
                                The robot is not only equipped for combat but is also agile, allowing for dynamic platforming across the three unique 
                                level designs. The player can run, jump, double jump, and dash to navigate through the environment, giving them flexibility 
                                in both combat and exploration.
                                    </span>,
                                // height:100,
                            },
                            {blank:"#424242", height:100},
                            {blank:"#424242", height:100},
                        ]}/>
                    </div>
                </div>
            </div>
            
            <br/>
            <div className="row">
                <TextPanel width="25" array={[
                    {blank:"#424242", height:100},
                ]}/>
                <TextPanel width="100" array={[
                    {text:<span style={{fontSize:"clamp(14px,1.4vw,22px)"}}>Enemies</span>, blank:"#FF4E4E",center:true},
                    {text:<span>Throughout the levels, the player will encounter a variety of nature-based enemies, each with unique behaviors and attack patterns. 
                        There are multiple types of enemies, each representing different aspects of nature (flora, animal, and elemental). 
                        These enemies behave differently, with some charging the player head-on while others using ranged attacks
                        to impede progress.</span>
                    }
                ]}/>
                <TextPanel width="25" array={[
                    {blank:"#424242", height:100},
                ]}/>
            </div>

            <br/>
            <div className="column">
                <TextPanel width="100" array={[
                    {text:<span style={{fontSize:"clamp(14px,1.4vw,22px)"}}>Bosses</span>, blank:"#FF4E4E",center:true},
                ]}/>
                <TextPanel width="100" array={[{text:<span>Each boss features its own distinct moveset, evolving through various AI states as 
                    they target the player. With hand-crafted attack animations, every battle offers a unique experience. Additionally, when bosses 
                    reach half health, they enter an enraged state, unleashing more frequent and devastating attacks. Upon defeat, the boss drops two 
                    upgrades, from which the player can choose one to perminately enhance an aspect of the player's abilities.</span>}]}/>
            </div>
            <div className="row">
                <div className="column">
                    <TextPanel width="100" array={[
                    {text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Boss 1</span>,blank:"#6275D8",center:true},
                    ]}/>
                    <ImagePanel aspectRatio="1/1" image={GreenMachineBoss1}/>
                    <TextPanel width="100" fill={true} array={[
                    {text:<span>This boss embodies the mystical and omnipotent qualities of Mother Nature. 
                        It is designed to represent the core of nature’s resilience and beauty, merging the essence of flora into a sentient, 
                        humanoid form. Its design and abilities are meant to challenge the player to adapt to both direct attacks and environmental manipulation.
                        </span>,height:100},
                    ]}/>
                </div>
                <div className="column">
                    <TextPanel width="100" array={[
                    {text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Boss 2</span>,blank:"#6275D8",center:true},
                    ]}/>
                    <ImagePanel aspectRatio="1/1" image={GreenMachineBoss2}/>
                    <TextPanel width="100" fill={true} array={[
                    {text:<span>This boss has a striking, semi-humanoid form that combines the raw strength of rock with the sharp precision of crystals. 
                        Its design is both intimidating and majestic, as it seems to have emerged from the depths of the earth, carved by geological forces
                        over decades. It combines brute force with strategic use of its environment, creating a challenging and layered battle.</span>,height:100},
                    ]}/>
                </div>
                <div className="column">
                    <TextPanel width="100" array={[
                    {text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Boss 3</span>,blank:"#6275D8",center:true},
                    ]}/>
                    <ImagePanel aspectRatio="1/1" image={GreenMachineBoss3}/>
                    <TextPanel width="100" fill={true} array={[
                    {text:<span>
                        This boss differs from the others, as it’s not purely a nature-based construct. 
                        Its appearance and essence are more akin to the player, blending both nature and machine. 
                        However, unlike the player—who has kept control of their mechanical side—this boss has lost the battle, becoming a tragic figure 
                        completely overtaken by nature. In combat, it combines nature-based attacks from previous bosses with its own unique abilities,
                        delivering a satisfying and challenging final encounter for the player.
                        </span>,height:100},
                    ]}/>
                </div>
            </div>
            <br/>
            <div className="row">
                <TextPanel width="25" array={[
                    {blank:"#424242", height:100},
                ]}/>
                <TextPanel width="100" array={[
                    {text:<span style={{fontSize:"clamp(14px,1.4vw,22px)"}}>Level Design</span>, blank:"#FF4E4E",center:true},
                    {text:<span>
                        Each level is uniquely designed to match the theme and character of its corresponding boss, offering players a 
                        distinct atmosphere and gameplay experience. The level layouts are crafted to enhance the ambiance and gameplay variety, 
                        featuring not only formidable enemies that impede progress but also challenging platforming. 
                        This combination ensures that each level tests the player’s skills in different ways, providing a fresh and immersive 
                        experience throughout the game.</span>
                    }
                ]}/>
                
                <TextPanel width="100" array={[
                    {text:<span style={{fontSize:"clamp(14px,1.4vw,22px)"}}>Sound Design</span>, blank:"#FF4E4E",center:true},
                    {text:<span>Sound design in games is crucial for creating an immersive experience. 
                        In our game, for instance, we developed a custom soundtrack to complement the visuals and atmosphere. 
                        This music not only fills the silence but also enriches the player's journey through the level. 
                        By aligning the sound with the game's setting and actions, we help players feel more engaged and connected 
                        to the game world.</span>, height:100
                    }
                ]}/>
                <TextPanel width="25" array={[
                    {blank:"#424242", height:100},
                ]}/>
            </div>

            <br/>
            <div className="column">
                <TextPanel width="100" array={[
                    {text:<span style={{fontSize:"clamp(14px,1.4vw,22px)"}}>Team Members</span>, blank:"#FF4E4E",center:true},
                ]}/>
                <div className="row">
                    <div className="column">
                        <TextPanel width="100" fill={true} array={[
                        {text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Parsa Baghaie</span>,blank:"#4AC936",center:true},
                        {text:<span>Level Designer <br/> Player Artist/Animator <br/> Narrative Writer <br/> Logic Developer</span>,height:100,center:true},
                        ]}/>
                    </div>
                    <div className="column">
                        <TextPanel width="100" fill={true} array={[
                        {text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Joe Nguyen</span>,blank:"#4AC936",center:true},
                        {text:<span>Enemy Ai Developer <br/> UI Developer <br/> Logic Developer</span>,height:100,center:true},
                        ]}/>
                    </div>
                    <div className="column">
                        <TextPanel width="100" fill={true} array={[
                        {text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Ronit Mahalmani</span>,blank:"#4AC936",center:true},
                        {text:<span>Enemy Ai Developer <br/> UI Developer </span>,height:100,center:true},
                        ]}/>
                    </div>
                    <div className="column">
                        <TextPanel width="100" fill={true} array={[
                        {text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Thach Vo</span>,blank:"#4AC936",center:true},
                        {text:<span>Boss Ai Developer <br/> Boss Artist/Animator </span>,height:100,center:true},
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

const titleName = "The Green Machine";
const titleFontSize = 2.7;
const linkHref = "play.unity.com/en/games/89767190-9e4d-47ce-8f21-8a8facb9f3ac/web-green-machine"
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