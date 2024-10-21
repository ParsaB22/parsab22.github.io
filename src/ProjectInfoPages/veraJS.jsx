import Header from "../Components/Header";
import HeaderMobile from "../Components/HeaderMobile";
import BackgroundImg from "../Components/BackgroundImg";
import TextPanel from "../Components/TextPanel";
import ImagePanel from "../Components/ImagePanel";
import ImageTextPanel from "../Components/ImageTextPanel";

const VERAUnity = "../../images/VERA/VERAUnity.svg";

const VERAControls = ".././images/VERA/controls.png";

const LookMenu = "../../images/VERA/LookMenu.png";
const MoveMenu = "../../images/VERA/MoveMenu.png";
const InteractMenu = "../../images/VERA/InteractMenu.png";
const SettingMenu = "../../images/VERA/SettingMenu.png";

// Comic //
function ComicMobile(){
    return(
        <div id="comicSmall" >
            <TextPanel width="100" array={[{text:<span style={{fontSize:"clamp(14px,1.4vw,22px)"}}>Overview</span>,height:100, blank:"#FF4E4E",center:true}]}/>
            <ImagePanel backColor="AntiqueWhite" center={true} image={VERAUnity}/>
            <TextPanel width="100" array={[
                {
                    text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>V.E.R.A (Virtual Environment Research Accelerator) </span>, blank:"#4AC936",center:true
                },
                {
                    text:<span><strong style={{color:"red"}}>V.E.R.A (Virtual Environment Research Accelerator)</strong> is an initiative designed to support and enhance the work of 
                    XR (Extended Reality) researchers by providing them with tools and resources to accelerate their research. Its mission 
                    is to serve the XR research community by improving the quality and efficiency of human subjects research while fostering 
                    a collaborative and diverse environment. V.E.R.A aims to make XR research more accessible and sustainable by supporting 
                    researchers from all backgrounds and developing the next generation of XR professionals.</span>, 
                    height:100
                }
            ]} />
            <TextPanel width="100" array={[
                {
                    text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Description</span>, blank:"#4AC936",center:true
                },
                {
                    text:<span>The <strong style={{color:"dodgerblue"}}>V.E.R.A Locomotion Accessibility Toolkit</strong> is one of the key projects under V.E.R.A's mission to make XR research more 
                    inclusive. This toolkit was <strong>developed specifically for Unity and is designed to enable individuals with mobility impairments, such as paraplegia, to navigate and explore virtual reality (VR) environments</strong>. 
                    Traditional VR experiences often rely on physical movement to interact with and traverse 
                    virtual spaces, which can be a barrier for people with limited mobility.
                    <br/>
                    <br/>
                    The toolkit provides alternative ways for users with locomotion impairments to move within VR, opening up new possibilities for 
                    their involvement in XR research. By enabling these individuals to traverse virtual environments, the toolkit helps ensure that 
                    they can actively participate in and contribute to XR studies and experiences.
                    </span>, 
                }
            ]} />










            <br/>
            <TextPanel width="100" array={[{text:<span style={{fontSize:"clamp(14px,1.4vw,22px)"}}>Project Details</span>,height:100, blank:"#FF4E4E",center:true}]}/>
            <div className="column">
                <div className="row">
                    <TextPanel width="10" array={[{blank:"#424242", height:100},]} />
                    <TextPanel width="100" array={[{text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Key Considerations for Inclusive Design</span>, blank:"#6275D8",center:true }]}/>
                    <TextPanel width="10" array={[{blank:"#424242", height:100},]} />
                </div>
                <TextPanel width="100" array={[
                    {
                        text:<span style={{}}>
                            In preparation for developing the <strong style={{color:"dodgerblue"}}>V.E.R.A Locomotion Accessibility Toolkit</strong>, we identified <strong>two critical considerations</strong> to ensure that the solution would effectively meet the needs of individuals with mobility disabilities.
                            <br/>
                                <ul style={{paddingLeft:"20px"}}>
                                    <li>The <u>first consideration</u> involved understanding <strong>how people with mobility disabilities navigate daily life and, more specifically, the assistive technologies they rely on</strong>. We examined the types of technologies commonly used, such as switch systems, joysticks, and other input devices, and explored how they interact with other technologies. Through this investigation, we discovered that many of these assistive devices are designed to operate with a minimal number of inputs, typically around four. This was a key finding, as it revealed that any solution we develop would need to be compatible with these limited input systems to be practical and accessible for users.
                                        We also took into account the limitations that come with these devices, such as reduced precision or speed in input control, and how they communicate with other systems. Understanding these factors helped us define the constraints and requirements for our project. As a result, we established that our toolkit must be designed to function with a minimum of four inputs, aligning with the capabilities of existing assistive technologies.
                                    </li>
                                </ul>
                                <ul style={{paddingLeft:"20px"}}>
                                    <li>The <u>second critical consideration</u> was <strong>determining the essential abilities and actions required for a person to effectively engage in VR</strong>. For our toolkit to be viable, we needed to ensure that users could perform the core interactions that are fundamental to VR experiences. After analyzing typical VR interactions, we concluded that three base abilities were necessary for a functional and inclusive VR experience:
                                    <ul>
                                        <li><strong>Movement</strong>: The ability to traverse virtual spaces, whether through walking, flying, or teleportation.
                                        </li>
                                        <li><strong>Looking Around</strong>: The capacity to control the view in VR, allowing users to look around and orient themselves in the virtual environment.
                                        </li>
                                        <li><strong>Object Interaction</strong>: The ability to interact with objects, such as opening doors, picking up items, or pressing buttons, to engage with the environment.
                                        </li>
                                    </ul>
                                    By defining these essential actions, we ensured that the toolkit would support a meaningful VR experience for users with mobility impairments.</li>
                                </ul>
                            <span style={{textAlign:"left"}}>
                                In order for the <strong style={{color:"dodgerblue"}}>V.E.R.A Locomotion Accessibility Toolkit</strong> to be a viable option for individuals with mobility disabilities to participate in VR studies, it must meet two key criteria:
                                It must be compatible with and controllable via four-input assistive technologies.
                                It must allow users to perform the essential actions of moving, looking around, and interacting with objects in VR.
                                These considerations guided our design and development approach, ensuring that the toolkit would be both accessible and effective for its intended users.
                            </span>
                            </span>, center:false
                    }
                ]} />

                <TextPanel array={[
                    {
                        text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Solution</span>, blank:"#6275D8",center:true 
                    }
                    ,{text:<span>
                        Our solution for the <strong style={{color:"dodgerblue"}}>V.E.R.A Locomotion Accessibility Toolkit</strong> centers 
                        around <strong>the creation of a user interface (UI) element that functions as a simplified menu system, specifically designed to be controlled using only four inputs</strong>. This menu-based system allows individuals with 
                        mobility impairments to navigate and interact within virtual reality (VR) environments, making it possible for them to engage fully with 
                        XR experiences.</span>},]} />
            <TextPanel array={[
                {
                    text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Controls</span>, blank:"#6275D8",center:true
                },
                {text:<span>
                <img style={{width:"calc(100% + 7px)", marginLeft:"-5px",marginTop:"-2px", borderBottom:"black solid 4px"}} src={VERAControls}/>
                The menu interface is designed to be operated through four distinct buttons, each corresponding to a specific function:
                <ul>
                    <li><strong>Tab Left</strong>: Moves the user’s focus to the previous menu item.</li>
                    <li><strong>Tab Right</strong>: Moves the user’s focus to the next menu item.</li>
                    <li><strong>Select</strong>: Confirms the user’s selection and enters a submenu or executes an action.</li>
                    <li><strong>Back</strong>: Returns the user to the previous menu or cancels an action.</li>
                </ul>
                These four inputs map to common control mechanisms in assistive technologies, ensuring that users who rely on limited input devices can 
                comfortably and effectively use the system.</span>,height:100},]} />
                

            <TextPanel array={[
                {
                    text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Menu Catagories</span>, blank:"#6275D8",center:true
                },
                {text:<span>
                The main categories of the menu system cover all the essential interactions needed for a VR experience:
                <ul>
                    <li><strong>Looking</strong>: Options for controlling the user’s view or adjusting perspective.</li>
                    <li><strong>Moving</strong>: Options for locomotion within the virtual environment, allowing users to traverse VR spaces.</li>
                    <li><strong>Interactions</strong>: Options for interacting with virtual objects, such as pressing buttons or picking up items.</li>
                    <li><strong>Settings</strong>: Options for adjusting preferences or fine-tuning the experience to meet the user’s needs.</li>
                </ul>
                Each of these categories contains its own sub-menu of specific actions, allowing the user to efficiently tab through options, select actions, 
                and return to previous menus. This approach ensures that individuals with mobility impairments can fully interact with virtual environments 
                using only four inputs, maintaining simplicity while offering robust control and functionality in VR.</span>,height:100},]} />
            </div>















            <br/>
            <TextPanel width="100" array={[{text:<span style={{fontSize:"clamp(14px,1.4vw,22px)"}}>Menu Details</span>,height:100, blank:"#FF4E4E",center:true}]}/>
                <div className="column">
                    <TextPanel array={[
                    {
                        text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Looking</span>, blank:"#6275D8",center:true
                    },
                    {text:
                    <span>
                        <img style={{width:"calc(100% + 7px)", marginLeft:"-5px",marginTop:"-2px", borderBottom:"black solid 4px"}} src={LookMenu}/>
                        The <u>Looking category</u> provides users with full control over their view in VR, essential for visual interaction in the virtual environment.
                        <br/>
                        <br/>
                        The Looking category offers three main options:
                        <ul>
                            <li>
                                <strong>Look Up</strong>: Allows users to adjust their gaze upward, letting them inspect higher areas without physical movement.                                    </li>
                            <br/>
                            <li>
                                <strong>Look Down</strong>: Directs the user's gaze downward, useful for viewing lower objects or areas without needing to tilt their head.                                    </li>
                            <br/>
                            <li>
                                <strong>Reset View</strong>: Returns the user's view to a neutral, forward-facing position, helping them quickly reorient in the virtual space.
                            </li>
                        </ul>
                    </span>}]} />

                    <TextPanel array={[
                    {
                        text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Movement</span>, blank:"#6275D8",center:true
                    },
                    {text:<span>
                        <img style={{width:"calc(100% + 7px)", marginLeft:"-5px",marginTop:"-2px", borderBottom:"black solid 4px"}} src={MoveMenu}/>
                        The <u>Movement category</u> in the <strong style={{color:"dodgerblue"}}>V.E.R.A Locomotion Accessibility Toolkit</strong> provides essential controls for navigating virtual environments using a simplified tank control system. Designed for users with mobility impairments, it allows movement and orientation in VR with minimal inputs, making navigation more accessible and reducing physical strain.
                        <br/>
                        <br/>
                        The Movement category offers three main options:

                        <ul>
                            <li>
                            <strong>Move Forward</strong>: Moves the user forward in the virtual space. Unlike full-directional systems, movement is restricted to forward-only to simplify navigation.                                    </li>
                            <br/>
                            <li>
                            <strong>Turn Left</strong>: Rotates the user left in place without moving forward, allowing them to change direction.
                            </li>
                            <br/>
                            <li>
                            <strong>Turn Right</strong>: Rotates the user right. Once reoriented, users can move forward in the new direction.
                            </li>
                        </ul>
                    </span>,height:100},]} />

                    <TextPanel  fill={true} array={[
                    {
                        text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Interact</span>, blank:"#6275D8",center:true
                    },
                    {text:<span>
                        <img style={{width:"calc(100% + 7px)", marginLeft:"-5px",marginTop:"-2px", borderBottom:"black solid 4px"}} src={InteractMenu}/>
                        The <u>Interaction category</u> empowers users to effectively engage with objects in the virtual environment, ensuring a meaningful and accessible experience, especially for those with mobility impairments. This category is designed to help users identify nearby interactable objects and engage with them seamlessly through an intuitive control scheme.
                        <br/>
                        <br/>
                        The Interaction category offers three main options:
                        <ul>
                            <li>
                            <strong>Highlight Nearby Interactables</strong>: This option allows users to quickly scan and visually highlight objects within their vicinity that can be interacted with. When activated, it makes nearby interactable objects more visible, which is particularly helpful in complex environments with many items. This feature enables users to focus on relevant objects for interaction, enhancing their experience.
                            </li>
                            <br/>
                            <li>
                            <strong>Select Next Interactable</strong>: This option enables users to cycle through available interactable objects within range. When selected, the user can tab through a list of objects, each highlighted in the environment. Additionally, the system displays the name of the selected object on the user’s screen, helping them quickly identify what they want to engage with and reducing confusion about accessible items.
                            </li>
                            <br/>
                            <li>
                            <strong>View Interactions for (Object Name)</strong>: After selecting a specific interactable object, this option allows users to view and choose from a list of available actions for that object. The submenu that appears depends on the actions defined by the developer. For example, if the selected object is a door, actions might include “Open” or “Close.” For more complex objects, actions could vary based on the functionality implemented by the developer. This option gives users the flexibility to perform detailed interactions tailored to the context of the selected object.
                            </li>
                        </ul>
                    </span>}]} />


                    <TextPanel fill={true} array={[
                    {
                        text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Settings</span>, blank:"#6275D8",center:true
                    },
                    {text:<span>
                        <img style={{width:"calc(100% + 7px)", marginLeft:"-5px",marginTop:"-2px", borderBottom:"black solid 4px"}} src={SettingMenu}/>
                        The <u>Settings category</u> in the <strong style={{color:"dodgerblue"}}>V.E.R.A Locomotion Accessibility Toolkit</strong> offers users customizable options to enhance their VR experience based on personal needs, optimizing comfort and accessibility.
                        <br/>
                        <br/>
                        The Settings category offers a multitude of options:
                        <ul>
                            <li>
                            <strong>Use Joystick</strong>: Enables joystick support for movement, providing an alternative to the standard four-button controls, while maintaining the tank control system.
                            </li>
                            <br/>
                            <li>
                            <strong>Tap Activate Movement</strong>: Allows users to toggle movement with a tap, reducing the need for continuous button pressing.
                            </li>
                            <br/>
                            <li>
                            <strong>Virtual Hands</strong>: Lets users disable virtual hands if they find them distracting, simplifying the visual field.
                            </li>
                            <br/>
                            <li>
                            <strong>Movement Speed</strong>: Adjusts the forward movement speed for user comfort.
                            </li>
                            <br/>
                            <li>
                            <strong>Turn Amount</strong>: Controls the degree of rotation when turning left or right, offering fine or rapid direction changes.
                            </li>
                            <br/>
                            <li>
                            <strong>Menu Tilt</strong>: Adjusts the tilt of the menu for better comfort and visibility.
                            </li>
                            <br/>
                            <li>
                            <strong>Menu Height</strong>: Allows users to raise or lower the menu's position within their field of view.
                            </li>
                            <br/>
                            <li>
                            <strong>Menu Opacity</strong>: Adjusts the transparency of the menu, allowing for a clearer or more immersive interface.
                            </li>
                        </ul>
                    </span>,height:100},]} />
                </div>

            <br/>
            <div className="column">
            <TextPanel width="100" array={[{text:<span style={{fontSize:"clamp(14px,1.4vw,22px)"}}>Implementation Information</span>,height:100, blank:"#FF4E4E",center:true}]}/>
                <TextPanel width="100" array={[{text:<span>
                    Throughout development of the <strong style={{color:"dodgerblue"}}>V.E.R.A Locomotion Accessibility Toolkit</strong>, we remained focused on ensuring that the solution could 
                    be easily used in various virtual experiences, <strong>The goal was to make the integration process 
                    straightforward for developers, thereby encouraging widespread adoption and making VR more accommodating for individuals with physical impairments.</strong> 
                    We understood that if developers find the implementation process tedious or time-consuming, 
                    they are less likely to incorporate such accessibility features into their projects. With this in mind, we prioritized keeping the setup 
                    minimal to ensure high developer quality of life.
                    <br/>
                    <br/>
                    To <strong>streamline integration, we designed the plugin to be a drag-and-drop solution</strong>. Developers simply need to drag the plugin into 
                    their VR project, and it automatically connects to key functionality objects. This ensures that the core systems—menu navigation, 
                    inputs, and movement—are ready to function without any further modifications. This reduces the complexity and effort on the part 
                    of the developer, making it much easier to add accessibility features to their VR experiences.
                    <br/>
                    <br/>
                    There is, <strong>however, one essential part of the toolkit that developers must actively implement: the classification and customization of 
                    interactables</strong>. Since each virtual experience is unique, it is impossible to predict which objects should be interactable and what 
                    actions the user should be able to perform with those objects. For example, some developers may create environments where objects 
                    like doors, drawers, or tools need to be manipulated, while others may focus on different types of interactions.
                    <br/>
                    <br/>
                    To accommodate this, developers are required to:
                    <ul>
                        <li><strong>Classify Interactables</strong>: To make an object interactable, developers simply need to add the Selectable Script to the object. This allows users to interact with it through the menu.
                        </li>
                        <br/>
                        <li><strong>Specify Actions</strong>: The developer must define what actions users can perform with each interactable. To simplify this, we've provided a pre-built list of common actions—such as grabbing, throwing, opening, and closing objects—that can be quickly assigned. For more complex or custom actions, developers can easily incorporate their own logic by selecting from their existing scripts within the same framework.
                        </li>
                    </ul>
                    In conclusion, our focus was on minimizing the hassle for developers while ensuring that the plugin remains highly functional and 
                    adaptable. By keeping the integration process straightforward and reducing the required implementation steps, we’ve made the toolkit 
                    a viable option for developers to include accessibility features in their virtual experiences. Our hope is that by making it easy to 
                    accommodate individuals with mobility impairments, more developers will adopt this tool, making VR experiences more inclusive and accessible.
                    </span> }]}/>
                </div>





            <br/>
            <TextPanel width="100" array={[{text:<span style={{fontSize:"clamp(14px,1.4vw,22px)"}}>Team Members</span>,height:100, blank:"#FF4E4E",center:true}]}/>
            <div className="column">
                <TextPanel width="100" array={[{text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Sponsors</span>, blank:"#4AC936",center:true }]}/>
                <TextPanel width="100" array={[{text:<span><div style={{width:"calc(75%)", marginLeft:"calc(25% / 2)", borderBottom:"black solid 2px", marginBottom:"2px",fontSize:"clamp(12px,1.2vw,18px)"}}>Gregory Welch</div><em>V.E.R.A Lead Principal Investigator</em></span>,center:true,height:100 }]}/>
                <TextPanel width="100" array={[{text:<span><div style={{width:"calc(75%)", marginLeft:"calc(25% / 2)", borderBottom:"black solid 2px", marginBottom:"2px",fontSize:"clamp(12px,1.2vw,18px)"}}>Ali Haskins Lisle</div><em>V.E.R.A Director of Development and Operations</em></span>,center:true,align:true,height:100}]}/>
                <TextPanel width="100" array={[{text:<span><div style={{width:"calc(75%)", marginLeft:"calc(25% / 2)", borderBottom:"black solid 2px", marginBottom:"2px",fontSize:"clamp(12px,1.2vw,18px)"}}>Dylan Fox</div><em>Director of Operations for XR Access</em></span>,center:true,height:100 }]}/>
            </div>
            <div></div>
            <div className="column">
                <TextPanel width="100" array={[{text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Developers</span>, blank:"#4AC936",center:true }]}/>
                <div className="row">
                    <TextPanel width="100" array={[{text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Corey Clements</span>,center:true, height:100, align:true}]}/>
                    <TextPanel width="100" array={[{text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Parsa Baghaie</span>,center:true, height:100, align:true}]}/>
                </div>
                <div></div>
                <div className="row">
                    <TextPanel width="100" array={[{text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Oliver Wacker</span>,center:true, height:100, align:true}]}/>
                    <TextPanel width="100" array={[{text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Christian Merino</span>,center:true, height:100, align:true}]}/>
                </div>
                <div></div>
                <div className="row">
                    <TextPanel width="100" array={[{text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Joshua Federman</span>,center:true, height:100, align:true}]}/>
                    <TextPanel width="100" array={[{text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Adam Lei</span>,center:true, height:100, align:true}]}/>
                </div>
            </div>
        </div>
    );
}
function ComicTablet(){
    return(
        <div id="comicMedium">
            <TextPanel width="100" array={[{text:<span style={{fontSize:"clamp(14px,1.4vw,22px)"}}>Overview</span>,height:100, blank:"#FF4E4E",center:true}]}/>
            <div className="row">
                    <ImagePanel backColor="AntiqueWhite" center={true} image={VERAUnity}/>
                    <TextPanel width="200" array={[
                        {
                            text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>V.E.R.A (Virtual Environment Research Accelerator) </span>, blank:"#4AC936",center:true
                        },
                        {
                            text:<span><strong style={{color:"red"}}>V.E.R.A (Virtual Environment Research Accelerator)</strong> is an initiative designed to support and enhance the work of 
                            XR (Extended Reality) researchers by providing them with tools and resources to accelerate their research. Its mission 
                            is to serve the XR research community by improving the quality and efficiency of human subjects research while fostering 
                            a collaborative and diverse environment. V.E.R.A aims to make XR research more accessible and sustainable by supporting 
                            researchers from all backgrounds and developing the next generation of XR professionals.</span>, 
                            height:100
                        }
                    ]} />
            </div>
            <TextPanel width="100" array={[
                {
                    text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Description</span>, blank:"#4AC936",center:true
                },
                {
                    text:<span>The <strong style={{color:"dodgerblue"}}>V.E.R.A Locomotion Accessibility Toolkit</strong> is one of the key projects under V.E.R.A's mission to make XR research more 
                    inclusive. This toolkit was <strong>developed specifically for Unity and is designed to enable individuals with mobility impairments, such as paraplegia, to navigate and explore virtual reality (VR) environments</strong>. 
                    Traditional VR experiences often rely on physical movement to interact with and traverse 
                    virtual spaces, which can be a barrier for people with limited mobility.
                    <br/>
                    <br/>
                    The toolkit provides alternative ways for users with locomotion impairments to move within VR, opening up new possibilities for 
                    their involvement in XR research. By enabling these individuals to traverse virtual environments, the toolkit helps ensure that 
                    they can actively participate in and contribute to XR studies and experiences.
                    </span>, 
                }
            ]} />










            <br/>
            <TextPanel width="100" array={[{text:<span style={{fontSize:"clamp(14px,1.4vw,22px)"}}>Project Details</span>,height:100, blank:"#FF4E4E",center:true}]}/>
            <div className="column">
                <div className="row">
                    <TextPanel width="10" array={[{blank:"#424242", height:100},]} />
                    <TextPanel width="100" array={[{text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Key Considerations for Inclusive Design</span>, blank:"#6275D8",center:true }]}/>
                    <TextPanel width="10" array={[{blank:"#424242", height:100},]} />
                </div>
                <TextPanel width="100" array={[
                    {
                        text:<span style={{}}>
                            In preparation for developing the <strong style={{color:"dodgerblue"}}>V.E.R.A Locomotion Accessibility Toolkit</strong>, we identified <strong>two critical considerations</strong> to ensure that the solution would effectively meet the needs of individuals with mobility disabilities.
                            <br/>
                            <div style={{display:"flex", textAlign:"left"}}>
                            <ul style={{width:"100%"}}>
                                    <li>The <u>first consideration</u> involved understanding <strong>how people with mobility disabilities navigate daily life and, more specifically, the assistive technologies they rely on</strong>. We examined the types of technologies commonly used, such as switch systems, joysticks, and other input devices, and explored how they interact with other technologies. Through this investigation, we discovered that many of these assistive devices are designed to operate with a minimal number of inputs, typically around four. This was a key finding, as it revealed that any solution we develop would need to be compatible with these limited input systems to be practical and accessible for users.
                                        We also took into account the limitations that come with these devices, such as reduced precision or speed in input control, and how they communicate with other systems. Understanding these factors helped us define the constraints and requirements for our project. As a result, we established that our toolkit must be designed to function with a minimum of four inputs, aligning with the capabilities of existing assistive technologies.
                                    </li>
                                </ul>
                                <ul style={{width:"100%"}}>
                                    <li>The <u>second critical consideration</u> was <strong>determining the essential abilities and actions required for a person to effectively engage in VR</strong>. For our toolkit to be viable, we needed to ensure that users could perform the core interactions that are fundamental to VR experiences. After analyzing typical VR interactions, we concluded that three base abilities were necessary for a functional and inclusive VR experience:
                                    <ul>
                                        <li><strong>Movement</strong>: The ability to traverse virtual spaces, whether through walking, flying, or teleportation.
                                        </li>
                                        <li><strong>Looking Around</strong>: The capacity to control the view in VR, allowing users to look around and orient themselves in the virtual environment.
                                        </li>
                                        <li><strong>Object Interaction</strong>: The ability to interact with objects, such as opening doors, picking up items, or pressing buttons, to engage with the environment.
                                        </li>
                                    </ul>
                                    By defining these essential actions, we ensured that the toolkit would support a meaningful VR experience for users with mobility impairments.</li>
                                </ul>
                            </div>
                            <span style={{textAlign:"left"}}>
                                In order for the <strong style={{color:"dodgerblue"}}>V.E.R.A Locomotion Accessibility Toolkit</strong> to be a viable option for individuals with mobility disabilities to participate in VR studies, it must meet two key criteria:
                                It must be compatible with and controllable via four-input assistive technologies.
                                It must allow users to perform the essential actions of moving, looking around, and interacting with objects in VR.
                                These considerations guided our design and development approach, ensuring that the toolkit would be both accessible and effective for its intended users.
                            </span>
                            </span>, center:false
                    }
                ]} />
            </div>











            <div></div>

            <div className="row">
                <TextPanel width="10" array={[{blank:"#424242", height:100},]} />
                <TextPanel array={[
                    {
                        text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Solution</span>, blank:"#6275D8",center:true 
                    }
                    ,{text:<span>
                        Our solution for the <strong style={{color:"dodgerblue"}}>V.E.R.A Locomotion Accessibility Toolkit</strong> centers 
                        around <strong>the creation of a user interface (UI) element that functions as a simplified menu system, specifically designed to be controlled using only four inputs</strong>. This menu-based system allows individuals with 
                        mobility impairments to navigate and interact within virtual reality (VR) environments, making it possible for them to engage fully with 
                        XR experiences.</span>},]} />
                <TextPanel width="10" array={[{blank:"#424242", height:100},]} />
            </div>
            <div></div>
            <div className="row">
                <TextPanel array={[
                {
                    text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Controls</span>, blank:"#6275D8",center:true
                },
                {text:<span>
                <img style={{width:"calc(100% + 7px)", marginLeft:"-5px",marginTop:"-2px", borderBottom:"black solid 4px"}} src={VERAControls}/>
                The menu interface is designed to be operated through four distinct buttons, each corresponding to a specific function:
                <ul>
                    <li><strong>Tab Left</strong>: Moves the user’s focus to the previous menu item.</li>
                    <li><strong>Tab Right</strong>: Moves the user’s focus to the next menu item.</li>
                    <li><strong>Select</strong>: Confirms the user’s selection and enters a submenu or executes an action.</li>
                    <li><strong>Back</strong>: Returns the user to the previous menu or cancels an action.</li>
                </ul>
                These four inputs map to common control mechanisms in assistive technologies, ensuring that users who rely on limited input devices can 
                comfortably and effectively use the system.</span>,height:100},]} />

                <TextPanel array={[
                {
                    text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Menu Catagories</span>, blank:"#6275D8",center:true
                },
                {text:<span>
                The main categories of the menu system cover all the essential interactions needed for a VR experience:
                <ul>
                    <li><strong>Looking</strong>: Options for controlling the user’s view or adjusting perspective.</li>
                    <li><strong>Moving</strong>: Options for locomotion within the virtual environment, allowing users to traverse VR spaces.</li>
                    <li><strong>Interactions</strong>: Options for interacting with virtual objects, such as pressing buttons or picking up items.</li>
                    <li><strong>Settings</strong>: Options for adjusting preferences or fine-tuning the experience to meet the user’s needs.</li>
                </ul>
                Each of these categories contains its own sub-menu of specific actions, allowing the user to efficiently tab through options, select actions, 
                and return to previous menus. This approach ensures that individuals with mobility impairments can fully interact with virtual environments 
                using only four inputs, maintaining simplicity while offering robust control and functionality in VR.</span>,height:100},]} />
            </div>














            <br/>
            <TextPanel width="100" array={[{text:<span style={{fontSize:"clamp(14px,1.4vw,22px)"}}>Menu Details</span>,height:100, blank:"#FF4E4E",center:true}]}/>
            <div className="row">
                <div className="column">
                    <TextPanel array={[
                    {
                        text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Looking</span>, blank:"#6275D8",center:true
                    },
                    {text:
                    <span>
                        <img style={{width:"calc(100% + 7px)", marginLeft:"-5px",marginTop:"-2px", borderBottom:"black solid 4px"}} src={LookMenu}/>
                        The <u>Looking category</u> provides users with full control over their view in VR, essential for visual interaction in the virtual environment.
                        <br/>
                        <br/>
                        The Looking category offers three main options:
                        <ul>
                            <li>
                                <strong>Look Up</strong>: Allows users to adjust their gaze upward, letting them inspect higher areas without physical movement.                                    </li>
                            <br/>
                            <li>
                                <strong>Look Down</strong>: Directs the user's gaze downward, useful for viewing lower objects or areas without needing to tilt their head.                                    </li>
                            <br/>
                            <li>
                                <strong>Reset View</strong>: Returns the user's view to a neutral, forward-facing position, helping them quickly reorient in the virtual space.
                            </li>
                        </ul>
                    </span>}]} />



                    <TextPanel  fill={true} array={[
                    {
                        text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Interact</span>, blank:"#6275D8",center:true
                    },
                    {text:<span>
                        <img style={{width:"calc(100% + 7px)", marginLeft:"-5px",marginTop:"-2px", borderBottom:"black solid 4px"}} src={InteractMenu}/>
                        The <u>Interaction category</u> empowers users to effectively engage with objects in the virtual environment, ensuring a meaningful and accessible experience, especially for those with mobility impairments. This category is designed to help users identify nearby interactable objects and engage with them seamlessly through an intuitive control scheme.
                        <br/>
                        <br/>
                        The Interaction category offers three main options:
                        <ul>
                            <li>
                            <strong>Highlight Nearby Interactables</strong>: This option allows users to quickly scan and visually highlight objects within their vicinity that can be interacted with. When activated, it makes nearby interactable objects more visible, which is particularly helpful in complex environments with many items. This feature enables users to focus on relevant objects for interaction, enhancing their experience.
                            </li>
                            <br/>
                            <li>
                            <strong>Select Next Interactable</strong>: This option enables users to cycle through available interactable objects within range. When selected, the user can tab through a list of objects, each highlighted in the environment. Additionally, the system displays the name of the selected object on the user’s screen, helping them quickly identify what they want to engage with and reducing confusion about accessible items.
                            </li>
                            <br/>
                            <li>
                            <strong>View Interactions for (Object Name)</strong>: After selecting a specific interactable object, this option allows users to view and choose from a list of available actions for that object. The submenu that appears depends on the actions defined by the developer. For example, if the selected object is a door, actions might include “Open” or “Close.” For more complex objects, actions could vary based on the functionality implemented by the developer. This option gives users the flexibility to perform detailed interactions tailored to the context of the selected object.
                            </li>
                        </ul>
                    </span>},{height:100,blank:"#424242"}]} />
                </div>

                <div className="column">
                    <TextPanel array={[
                    {
                        text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Movement</span>, blank:"#6275D8",center:true
                    },
                    {text:<span>
                        <img style={{width:"calc(100% + 7px)", marginLeft:"-5px",marginTop:"-2px", borderBottom:"black solid 4px"}} src={MoveMenu}/>
                        The <u>Movement category</u> in the <strong style={{color:"dodgerblue"}}>V.E.R.A Locomotion Accessibility Toolkit</strong> provides essential controls for navigating virtual environments using a simplified tank control system. Designed for users with mobility impairments, it allows movement and orientation in VR with minimal inputs, making navigation more accessible and reducing physical strain.
                        <br/>
                        <br/>
                        The Movement category offers three main options:

                        <ul>
                            <li>
                            <strong>Move Forward</strong>: Moves the user forward in the virtual space. Unlike full-directional systems, movement is restricted to forward-only to simplify navigation.                                    </li>
                            <br/>
                            <li>
                            <strong>Turn Left</strong>: Rotates the user left in place without moving forward, allowing them to change direction.
                            </li>
                            <br/>
                            <li>
                            <strong>Turn Right</strong>: Rotates the user right. Once reoriented, users can move forward in the new direction.
                            </li>
                        </ul>
                    </span>,height:100},]} />



                    <TextPanel fill={true} array={[
                    {
                        text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Settings</span>, blank:"#6275D8",center:true
                    },
                    {text:<span>
                        <img style={{width:"calc(100% + 7px)", marginLeft:"-5px",marginTop:"-2px", borderBottom:"black solid 4px"}} src={SettingMenu}/>
                        The <u>Settings category</u> in the <strong style={{color:"dodgerblue"}}>V.E.R.A Locomotion Accessibility Toolkit</strong> offers users customizable options to enhance their VR experience based on personal needs, optimizing comfort and accessibility.
                        <br/>
                        <br/>
                        The Settings category offers a multitude of options:
                        <ul>
                            <li>
                            <strong>Use Joystick</strong>: Enables joystick support for movement, providing an alternative to the standard four-button controls, while maintaining the tank control system.
                            </li>
                            <br/>
                            <li>
                            <strong>Tap Activate Movement</strong>: Allows users to toggle movement with a tap, reducing the need for continuous button pressing.
                            </li>
                            <br/>
                            <li>
                            <strong>Virtual Hands</strong>: Lets users disable virtual hands if they find them distracting, simplifying the visual field.
                            </li>
                            <br/>
                            <li>
                            <strong>Movement Speed</strong>: Adjusts the forward movement speed for user comfort.
                            </li>
                            <br/>
                            <li>
                            <strong>Turn Amount</strong>: Controls the degree of rotation when turning left or right, offering fine or rapid direction changes.
                            </li>
                            <br/>
                            <li>
                            <strong>Menu Tilt</strong>: Adjusts the tilt of the menu for better comfort and visibility.
                            </li>
                            <br/>
                            <li>
                            <strong>Menu Height</strong>: Allows users to raise or lower the menu's position within their field of view.
                            </li>
                            <br/>
                            <li>
                            <strong>Menu Opacity</strong>: Adjusts the transparency of the menu, allowing for a clearer or more immersive interface.
                            </li>
                        </ul>
                    </span>,height:100},]} />
                </div>
            </div>

            <br/>
            <TextPanel width="100" array={[{text:<span style={{fontSize:"clamp(14px,1.4vw,22px)"}}>Implementation Information</span>,height:100, blank:"#FF4E4E",center:true}]}/>
            <div className="row">
                <TextPanel width="5" array={[{blank:"#424242", height:100},]} />
                <TextPanel width="100" array={[{text:<span>
                    Throughout development of the <strong style={{color:"dodgerblue"}}>V.E.R.A Locomotion Accessibility Toolkit</strong>, we remained focused on ensuring that the solution could 
                    be easily used in various virtual experiences, <strong>The goal was to make the integration process 
                    straightforward for developers, thereby encouraging widespread adoption and making VR more accommodating for individuals with physical impairments.</strong> 
                    We understood that if developers find the implementation process tedious or time-consuming, 
                    they are less likely to incorporate such accessibility features into their projects. With this in mind, we prioritized keeping the setup 
                    minimal to ensure high developer quality of life.
                    <br/>
                    <br/>
                    To <strong>streamline integration, we designed the plugin to be a drag-and-drop solution</strong>. Developers simply need to drag the plugin into 
                    their VR project, and it automatically connects to key functionality objects. This ensures that the core systems—menu navigation, 
                    inputs, and movement—are ready to function without any further modifications. This reduces the complexity and effort on the part 
                    of the developer, making it much easier to add accessibility features to their VR experiences.
                    <br/>
                    <br/>
                    There is, <strong>however, one essential part of the toolkit that developers must actively implement: the classification and customization of 
                    interactables</strong>. Since each virtual experience is unique, it is impossible to predict which objects should be interactable and what 
                    actions the user should be able to perform with those objects. For example, some developers may create environments where objects 
                    like doors, drawers, or tools need to be manipulated, while others may focus on different types of interactions.
                    <br/>
                    <br/>
                    To accommodate this, developers are required to:
                    <ul>
                        <li><strong>Classify Interactables</strong>: To make an object interactable, developers simply need to add the Selectable Script to the object. This allows users to interact with it through the menu.
                        </li>
                        <br/>
                        <li><strong>Specify Actions</strong>: The developer must define what actions users can perform with each interactable. To simplify this, we've provided a pre-built list of common actions—such as grabbing, throwing, opening, and closing objects—that can be quickly assigned. For more complex or custom actions, developers can easily incorporate their own logic by selecting from their existing scripts within the same framework.
                        </li>
                    </ul>
                    In conclusion, our focus was on minimizing the hassle for developers while ensuring that the plugin remains highly functional and 
                    adaptable. By keeping the integration process straightforward and reducing the required implementation steps, we’ve made the toolkit 
                    a viable option for developers to include accessibility features in their virtual experiences. Our hope is that by making it easy to 
                    accommodate individuals with mobility impairments, more developers will adopt this tool, making VR experiences more inclusive and accessible.
                    </span> }]}/>
                <TextPanel width="5" array={[{blank:"#424242", height:100},]} />
            </div>






            <br/>
            <TextPanel width="100" array={[{text:<span style={{fontSize:"clamp(14px,1.4vw,22px)"}}>Team Members</span>,height:100, blank:"#FF4E4E",center:true}]}/>
            <div className="column">
                <TextPanel width="100" array={[{text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Sponsors</span>, blank:"#4AC936",center:true }]}/>
                <div className="row">
                    <TextPanel width="100" array={[{text:<span><div style={{width:"calc(75%)", marginLeft:"calc(25% / 2)", borderBottom:"black solid 2px", marginBottom:"2px",fontSize:"clamp(12px,1.2vw,18px)"}}>Gregory Welch</div><em>V.E.R.A Lead Principal Investigator</em></span>,center:true,height:100 }]}/>
                    <TextPanel width="100" array={[{text:<span><div style={{width:"calc(75%)", marginLeft:"calc(25% / 2)", borderBottom:"black solid 2px", marginBottom:"2px",fontSize:"clamp(12px,1.2vw,18px)"}}>Ali Haskins Lisle</div><em>V.E.R.A Director of Development and Operations</em></span>,center:true,align:true,height:100}]}/>
                    <TextPanel width="100" array={[{text:<span><div style={{width:"calc(75%)", marginLeft:"calc(25% / 2)", borderBottom:"black solid 2px", marginBottom:"2px",fontSize:"clamp(12px,1.2vw,18px)"}}>Dylan Fox</div><em>Director of Operations for XR Access</em></span>,center:true,height:100 }]}/>
                </div>
            </div>
            <div></div>
            <div className="column">
                <TextPanel width="100" array={[{text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Developers</span>, blank:"#4AC936",center:true }]}/>
                <div className="row">
                    <TextPanel width="100" array={[{text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Corey Clements</span>,center:true}]}/>
                    <TextPanel width="100" array={[{text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Parsa Baghaie</span>,center:true}]}/>
                    <TextPanel width="100" array={[{text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Oliver Wacker</span>,center:true}]}/>
                </div>
                <div></div>
                <div className="row">
                    <TextPanel width="100" array={[{text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Christian Merino</span>,center:true}]}/>
                    <TextPanel width="100" array={[{text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Joshua Federman</span>,center:true}]}/>
                    <TextPanel width="100" array={[{text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Adam Lei</span>,center:true}]}/>
                </div>
            </div>
        </div>);
}
function Comic () {
    return(
        <div id="comicLarge" >
            <TextPanel width="100" array={[{text:<span style={{fontSize:"clamp(14px,1.4vw,22px)"}}>Overview</span>,height:100, blank:"#FF4E4E",center:true}]}/>
            <div className="row">
                    <ImagePanel backColor="AntiqueWhite" center={true} image={VERAUnity}/>
                    <TextPanel width="200" array={[
                        {
                            text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>V.E.R.A (Virtual Environment Research Accelerator) </span>, blank:"#4AC936",center:true
                        },
                        {
                            text:<span><strong style={{color:"red"}}>V.E.R.A (Virtual Environment Research Accelerator)</strong> is an initiative designed to support and enhance the work of 
                                XR (Extended Reality) researchers by providing them with tools and resources to accelerate their research. Its mission 
                                is to serve the XR research community by improving the quality and efficiency of human subjects research while fostering 
                                a collaborative and diverse environment. V.E.R.A aims to make XR research more accessible and sustainable by supporting 
                                researchers from all backgrounds and developing the next generation of XR professionals.</span>, 
                            height:100
                        }
                    ]} />
            </div>
            <TextPanel width="100" array={[
                {
                    text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Description</span>, blank:"#4AC936",center:true
                },
                {
                    text:<span>The <strong style={{color:"dodgerblue"}}>V.E.R.A Locomotion Accessibility Toolkit</strong> is one of the key projects under V.E.R.A's mission to make XR research more 
                        inclusive. This toolkit was <strong>developed specifically for Unity and is designed to enable individuals with mobility impairments, such as paraplegia, to navigate and explore virtual reality (VR) environments</strong>. 
                        Traditional VR experiences often rely on physical movement to interact with and traverse 
                        virtual spaces, which can be a barrier for people with limited mobility.
                        <br/>
                        <br/>
                        The toolkit provides alternative ways for users with locomotion impairments to move within VR, opening up new possibilities for 
                        their involvement in XR research. By enabling these individuals to traverse virtual environments, the toolkit helps ensure that 
                        they can actively participate in and contribute to XR studies and experiences.
                        </span>, 
                }
            ]} />










            <br/>
            <TextPanel width="100" array={[{text:<span style={{fontSize:"clamp(14px,1.4vw,22px)"}}>Project Details</span>,height:100, blank:"#FF4E4E",center:true}]}/>
            <div className="column">
                <div className="row">
                    <TextPanel width="10" array={[{blank:"#424242", height:100},]} />
                    <TextPanel width="100" array={[{text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Key Considerations for Inclusive Design</span>, blank:"#6275D8",center:true }]}/>
                    <TextPanel width="10" array={[{blank:"#424242", height:100},]} />
                </div>
                <TextPanel width="100" array={[
                    {
                        text:<span style={{}}>
                            In preparation for developing the <strong style={{color:"dodgerblue"}}>V.E.R.A Locomotion Accessibility Toolkit</strong>, we identified <strong>two critical considerations</strong> to ensure that the solution would effectively meet the needs of individuals with mobility disabilities.
                            <br/>
                            <div style={{display:"flex", textAlign:"left"}}>
                                <ul style={{width:"100%"}}>
                                    <li>The <u>first consideration</u> involved understanding <strong>how people with mobility disabilities navigate daily life and, more specifically, the assistive technologies they rely on</strong>. We examined the types of technologies commonly used, such as switch systems, joysticks, and other input devices, and explored how they interact with other technologies. Through this investigation, we discovered that many of these assistive devices are designed to operate with a minimal number of inputs, typically around four. This was a key finding, as it revealed that any solution we develop would need to be compatible with these limited input systems to be practical and accessible for users.
                                        We also took into account the limitations that come with these devices, such as reduced precision or speed in input control, and how they communicate with other systems. Understanding these factors helped us define the constraints and requirements for our project. As a result, we established that our toolkit must be designed to function with a minimum of four inputs, aligning with the capabilities of existing assistive technologies.
                                    </li>
                                </ul>
                                <ul style={{width:"100%"}}>
                                    <li>The <u>second critical consideration</u> was <strong>determining the essential abilities and actions required for a person to effectively engage in VR</strong>. For our toolkit to be viable, we needed to ensure that users could perform the core interactions that are fundamental to VR experiences. After analyzing typical VR interactions, we concluded that three base abilities were necessary for a functional and inclusive VR experience:
                                    <ul>
                                        <li><strong>Movement</strong>: The ability to traverse virtual spaces, whether through walking, flying, or teleportation.
                                        </li>
                                        <li><strong>Looking Around</strong>: The capacity to control the view in VR, allowing users to look around and orient themselves in the virtual environment.
                                        </li>
                                        <li><strong>Object Interaction</strong>: The ability to interact with objects, such as opening doors, picking up items, or pressing buttons, to engage with the environment.
                                        </li>
                                    </ul>
                                    By defining these essential actions, we ensured that the toolkit would support a meaningful VR experience for users with mobility impairments.</li>
                                </ul>
                            </div>
                            <span style={{textAlign:"left"}}>
                                In order for the <strong style={{color:"dodgerblue"}}>V.E.R.A Locomotion Accessibility Toolkit</strong> to be a viable option for individuals with mobility disabilities to participate in VR studies, it must meet two key criteria:
                                It must be compatible with and controllable via four-input assistive technologies.
                                It must allow users to perform the essential actions of moving, looking around, and interacting with objects in VR.
                                These considerations guided our design and development approach, ensuring that the toolkit would be both accessible and effective for its intended users.
                            </span>
                            </span>, center:false
                    }
                ]} />
            </div>











            <div></div>

            <div className="row">
                <TextPanel width="10" array={[{blank:"#424242", height:100},]} />
                <TextPanel array={[
                    {
                        text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Solution</span>, blank:"#6275D8",center:true 
                    }
                    ,{text:<span>
                    Our solution for the <strong style={{color:"dodgerblue"}}>V.E.R.A Locomotion Accessibility Toolkit</strong> centers 
                    around <strong>the creation of a user interface (UI) element that functions as a simplified menu system, specifically designed to be controlled using only four inputs</strong>. This menu-based system allows individuals with 
                    mobility impairments to navigate and interact within virtual reality (VR) environments, making it possible for them to engage fully with 
                    XR experiences.</span>},]} />
                <TextPanel width="10" array={[{blank:"#424242", height:100},]} />
            </div>
            <div></div>
            <div className="row">
                <TextPanel array={[
                {
                    text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Controls</span>, blank:"#6275D8",center:true
                },
                {text:<span>
                <img style={{width:"calc(100% + 7px)", marginLeft:"-5px",marginTop:"-2px", borderBottom:"black solid 4px"}} src={VERAControls}/>
                The menu interface is designed to be operated through four distinct buttons, each corresponding to a specific function:
                <ul>
                    <li><strong>Tab Left</strong>: Moves the user’s focus to the previous menu item.</li>
                    <li><strong>Tab Right</strong>: Moves the user’s focus to the next menu item.</li>
                    <li><strong>Select</strong>: Confirms the user’s selection and enters a submenu or executes an action.</li>
                    <li><strong>Back</strong>: Returns the user to the previous menu or cancels an action.</li>
                </ul>
                These four inputs map to common control mechanisms in assistive technologies, ensuring that users who rely on limited input devices can 
                comfortably and effectively use the system.</span>,height:100},]} />

                <TextPanel array={[
                {
                    text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Menu Catagories</span>, blank:"#6275D8",center:true
                },
                {text:<span>
                The main categories of the menu system cover all the essential interactions needed for a VR experience:
                <ul>
                    <li><strong>Looking</strong>: Options for controlling the user’s view or adjusting perspective.</li>
                    <li><strong>Moving</strong>: Options for locomotion within the virtual environment, allowing users to traverse VR spaces.</li>
                    <li><strong>Interactions</strong>: Options for interacting with virtual objects, such as pressing buttons or picking up items.</li>
                    <li><strong>Settings</strong>: Options for adjusting preferences or fine-tuning the experience to meet the user’s needs.</li>
                </ul>
                Each of these categories contains its own sub-menu of specific actions, allowing the user to efficiently tab through options, select actions, 
                and return to previous menus. This approach ensures that individuals with mobility impairments can fully interact with virtual environments 
                using only four inputs, maintaining simplicity while offering robust control and functionality in VR.</span>,height:100},]} />
            </div>














            <br/>
            <TextPanel width="100" array={[{text:<span style={{fontSize:"clamp(14px,1.4vw,22px)"}}>Menu Details</span>,height:100, blank:"#FF4E4E",center:true}]}/>
            <div className="row">
                <div className="column">
                    <TextPanel array={[
                    {
                        text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Looking</span>, blank:"#6275D8",center:true
                    },
                    {text:
                    <span>
                        <img style={{width:"calc(100% + 7px)", marginLeft:"-5px",marginTop:"-2px", borderBottom:"black solid 4px"}} src={LookMenu}/>
                        The <u>Looking category</u> provides users with full control over their view in VR, essential for visual interaction in the virtual environment.
                        <br/>
                        <br/>
                        The Looking category offers three main options:
                        <ul>
                            <li>
                                <strong>Look Up</strong>: Allows users to adjust their gaze upward, letting them inspect higher areas without physical movement.                                    </li>
                            <br/>
                            <li>
                                <strong>Look Down</strong>: Directs the user's gaze downward, useful for viewing lower objects or areas without needing to tilt their head.                                    </li>
                            <br/>
                            <li>
                                <strong>Reset View</strong>: Returns the user's view to a neutral, forward-facing position, helping them quickly reorient in the virtual space.
                            </li>
                        </ul>
                    </span>}]} />



                    <TextPanel  fill={true} array={[
                    {
                        text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Interact</span>, blank:"#6275D8",center:true
                    },
                    {text:<span>
                        <img style={{width:"calc(100% + 7px)", marginLeft:"-5px",marginTop:"-2px", borderBottom:"black solid 4px"}} src={InteractMenu}/>
                        The <u>Interaction category</u> empowers users to effectively engage with objects in the virtual environment, ensuring a meaningful and accessible experience, especially for those with mobility impairments. This category is designed to help users identify nearby interactable objects and engage with them seamlessly through an intuitive control scheme.
                        <br/>
                        <br/>
                        The Interaction category offers three main options:
                        <ul>
                            <li>
                            <strong>Highlight Nearby Interactables</strong>: This option allows users to quickly scan and visually highlight objects within their vicinity that can be interacted with. When activated, it makes nearby interactable objects more visible, which is particularly helpful in complex environments with many items. This feature enables users to focus on relevant objects for interaction, enhancing their experience.
                            </li>
                            <br/>
                            <li>
                            <strong>Select Next Interactable</strong>: This option enables users to cycle through available interactable objects within range. When selected, the user can tab through a list of objects, each highlighted in the environment. Additionally, the system displays the name of the selected object on the user’s screen, helping them quickly identify what they want to engage with and reducing confusion about accessible items.
                            </li>
                            <br/>
                            <li>
                            <strong>View Interactions for (Object Name)</strong>: After selecting a specific interactable object, this option allows users to view and choose from a list of available actions for that object. The submenu that appears depends on the actions defined by the developer. For example, if the selected object is a door, actions might include “Open” or “Close.” For more complex objects, actions could vary based on the functionality implemented by the developer. This option gives users the flexibility to perform detailed interactions tailored to the context of the selected object.
                            </li>
                        </ul>
                    </span>},{height:100,blank:"#424242"}]} />
                </div>

                <div className="column">
                    <TextPanel array={[
                    {
                        text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Movement</span>, blank:"#6275D8",center:true
                    },
                    {text:<span>
                        <img style={{width:"calc(100% + 7px)", marginLeft:"-5px",marginTop:"-2px", borderBottom:"black solid 4px"}} src={MoveMenu}/>
                        The <u>Movement category</u> in the <strong style={{color:"dodgerblue"}}>V.E.R.A Locomotion Accessibility Toolkit</strong> provides essential controls for navigating virtual environments using a simplified tank control system. Designed for users with mobility impairments, it allows movement and orientation in VR with minimal inputs, making navigation more accessible and reducing physical strain.
                        <br/>
                        <br/>
                        The Movement category offers three main options:

                        <ul>
                            <li>
                            <strong>Move Forward</strong>: Moves the user forward in the virtual space. Unlike full-directional systems, movement is restricted to forward-only to simplify navigation.                                    </li>
                            <br/>
                            <li>
                            <strong>Turn Left</strong>: Rotates the user left in place without moving forward, allowing them to change direction.
                            </li>
                            <br/>
                            <li>
                            <strong>Turn Right</strong>: Rotates the user right. Once reoriented, users can move forward in the new direction.
                            </li>
                        </ul>
                    </span>,height:100},]} />



                    <TextPanel fill={true} array={[
                    {
                        text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Settings</span>, blank:"#6275D8",center:true
                    },
                    {text:<span>
                        <img style={{width:"calc(100% + 7px)", marginLeft:"-5px",marginTop:"-2px", borderBottom:"black solid 4px"}} src={SettingMenu}/>
                        The <u>Settings category</u> in the <strong style={{color:"dodgerblue"}}>V.E.R.A Locomotion Accessibility Toolkit</strong> offers users customizable options to enhance their VR experience based on personal needs, optimizing comfort and accessibility.
                        <br/>
                        <br/>
                        The Settings category offers a multitude of options:
                        <ul>
                            <li>
                            <strong>Use Joystick</strong>: Enables joystick support for movement, providing an alternative to the standard four-button controls, while maintaining the tank control system.
                            </li>
                            <br/>
                            <li>
                            <strong>Tap Activate Movement</strong>: Allows users to toggle movement with a tap, reducing the need for continuous button pressing.
                            </li>
                            <br/>
                            <li>
                            <strong>Virtual Hands</strong>: Lets users disable virtual hands if they find them distracting, simplifying the visual field.
                            </li>
                            <br/>
                            <li>
                            <strong>Movement Speed</strong>: Adjusts the forward movement speed for user comfort.
                            </li>
                            <br/>
                            <li>
                            <strong>Turn Amount</strong>: Controls the degree of rotation when turning left or right, offering fine or rapid direction changes.
                            </li>
                            <br/>
                            <li>
                            <strong>Menu Tilt</strong>: Adjusts the tilt of the menu for better comfort and visibility.
                            </li>
                            <br/>
                            <li>
                            <strong>Menu Height</strong>: Allows users to raise or lower the menu's position within their field of view.
                            </li>
                            <br/>
                            <li>
                            <strong>Menu Opacity</strong>: Adjusts the transparency of the menu, allowing for a clearer or more immersive interface.
                            </li>
                        </ul>
                    </span>,height:100},]} />
                </div>
            </div>

            <br/>
            <TextPanel width="100" array={[{text:<span style={{fontSize:"clamp(14px,1.4vw,22px)"}}>Implementation Information</span>,height:100, blank:"#FF4E4E",center:true}]}/>
            <div className="row">
                <TextPanel width="5" array={[{blank:"#424242", height:100},]} />
                <TextPanel width="100" array={[{text:<span>
                    Throughout development of the <strong style={{color:"dodgerblue"}}>V.E.R.A Locomotion Accessibility Toolkit</strong>, we remained focused on ensuring that the solution could 
                    be easily used in various virtual experiences, <strong>The goal was to make the integration process 
                    straightforward for developers, thereby encouraging widespread adoption and making VR more accommodating for individuals with physical impairments.</strong> 
                    We understood that if developers find the implementation process tedious or time-consuming, 
                    they are less likely to incorporate such accessibility features into their projects. With this in mind, we prioritized keeping the setup 
                    minimal to ensure high developer quality of life.
                    <br/>
                    <br/>
                    To <strong>streamline integration, we designed the plugin to be a drag-and-drop solution</strong>. Developers simply need to drag the plugin into 
                    their VR project, and it automatically connects to key functionality objects. This ensures that the core systems—menu navigation, 
                    inputs, and movement—are ready to function without any further modifications. This reduces the complexity and effort on the part 
                    of the developer, making it much easier to add accessibility features to their VR experiences.
                    <br/>
                    <br/>
                    There is, <strong>however, one essential part of the toolkit that developers must actively implement: the classification and customization of 
                    interactables</strong>. Since each virtual experience is unique, it is impossible to predict which objects should be interactable and what 
                    actions the user should be able to perform with those objects. For example, some developers may create environments where objects 
                    like doors, drawers, or tools need to be manipulated, while others may focus on different types of interactions.
                    <br/>
                    <br/>
                    To accommodate this, developers are required to:
                    <ul>
                        <li><strong>Classify Interactables</strong>: To make an object interactable, developers simply need to add the Selectable Script to the object. This allows users to interact with it through the menu.
                        </li>
                        <br/>
                        <li><strong>Specify Actions</strong>: The developer must define what actions users can perform with each interactable. To simplify this, we've provided a pre-built list of common actions—such as grabbing, throwing, opening, and closing objects—that can be quickly assigned. For more complex or custom actions, developers can easily incorporate their own logic by selecting from their existing scripts within the same framework.
                        </li>
                    </ul>
                    In conclusion, our focus was on minimizing the hassle for developers while ensuring that the plugin remains highly functional and 
                    adaptable. By keeping the integration process straightforward and reducing the required implementation steps, we’ve made the toolkit 
                    a viable option for developers to include accessibility features in their virtual experiences. Our hope is that by making it easy to 
                    accommodate individuals with mobility impairments, more developers will adopt this tool, making VR experiences more inclusive and accessible.
                    </span> }]}/>
                <TextPanel width="5" array={[{blank:"#424242", height:100},]} />
            </div>






            <br/>
            <TextPanel width="100" array={[{text:<span style={{fontSize:"clamp(14px,1.4vw,22px)"}}>Team Members</span>,height:100, blank:"#FF4E4E",center:true}]}/>
            <div className="column">
                <TextPanel width="100" array={[{text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Sponsors</span>, blank:"#4AC936",center:true }]}/>
                <div className="row">
                    <TextPanel width="100" array={[{text:<span><div style={{width:"calc(75%)", marginLeft:"calc(25% / 2)", borderBottom:"black solid 2px", marginBottom:"2px",fontSize:"clamp(12px,1.2vw,18px)"}}>Gregory Welch</div><em>V.E.R.A Lead Principal Investigator</em></span>,center:true,height:100 }]}/>
                    <TextPanel width="100" array={[{text:<span><div style={{width:"calc(75%)", marginLeft:"calc(25% / 2)", borderBottom:"black solid 2px", marginBottom:"2px",fontSize:"clamp(12px,1.2vw,18px)"}}>Ali Haskins Lisle</div><em>V.E.R.A Director of Development and Operations</em></span>,center:true,align:true,height:100}]}/>
                    <TextPanel width="100" array={[{text:<span><div style={{width:"calc(75%)", marginLeft:"calc(25% / 2)", borderBottom:"black solid 2px", marginBottom:"2px",fontSize:"clamp(12px,1.2vw,18px)"}}>Dylan Fox</div><em>Director of Operations for XR Access</em></span>,center:true,height:100 }]}/>
                </div>
            </div>
            <div></div>
            <div className="column">
                <TextPanel width="100" array={[{text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Developers</span>, blank:"#4AC936",center:true }]}/>
                <div className="row">
                    <TextPanel width="100" array={[{text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Corey Clements</span>,center:true}]}/>
                    <TextPanel width="100" array={[{text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Parsa Baghaie</span>,center:true}]}/>
                    <TextPanel width="100" array={[{text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Oliver Wacker</span>,center:true}]}/>
                </div>
                <div></div>
                <div className="row">
                    <TextPanel width="100" array={[{text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Christian Merino</span>,center:true}]}/>
                    <TextPanel width="100" array={[{text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Joshua Federman</span>,center:true}]}/>
                    <TextPanel width="100" array={[{text:<span style={{fontSize:"clamp(12px,1.2vw,18px)"}}>Adam Lei</span>,center:true}]}/>
                </div>
            </div>
        </div>
    );
}
/////////////////////////////////////////////////////////////

let change = null;
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

const titleName = "V.E.R.A's Unity Locomotion Accessability Toolkit";
const titleFontSize = 1.75;
const linkHref = "github.com/CoreyClements1/VERA_SD"
const headerFontMax = 27;

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
