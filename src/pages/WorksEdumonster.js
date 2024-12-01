import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {Tag, Anchor, Image} from 'antd';

const WorksEdumonster = () => {
    const { Link } = Anchor;
    function backToTopFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

  return (
    <Container style={{marginTop:"120px", marginBottom:"120px"}}>
        <Row id="works-outline">
            <Col className="bg-lightgrey py-4 px-5">
                <h1 className="semibold-text darkgrey-text-color">outline</h1>
                <Anchor affix={false}>
                    <Link className="size-20-text" href="#overview" title="Overview" />
                    <Link className="size-20-text" href="#design-process" title="Design Process" />
                    <Link className="size-20-text" href="#define" title="Define" />
                    <Link className="size-20-text" href="#ideate" title="Ideate" />
                    <Link className="size-20-text" href="#reflection" title="Reflection" />
                </Anchor>
            </Col>
        </Row>

        <Row id="tags" style={{marginTop:"50px"}}>
            <Col>
                <Tag color="#313131" className="bold-text" style={{letterSpacing:"1px"}}>GAME DESIGN</Tag>
                <Tag color="#313131" className="bold-text" style={{letterSpacing:"1px"}}>SOLO PROJECT</Tag>
            </Col>
        </Row>

        <Row id="overview" style={{marginTop:"30px"}}>
            <Col>
                <h1 className="semibold-text orange-color">overview</h1>
                <h5 className="semibold-text size-20-text mb-0 mt-4">ROLE</h5>
                <p className="size-20-text">Game Designer</p>

                <h5 className="semibold-text size-20-text mb-0 mt-4">TIMELINE</h5>
                <p className="size-20-text">2022 (WIP)</p>

                <h5 className="semibold-text size-20-text mb-0 mt-4">TOOLS</h5>
                <p className="size-20-text">Figma, GoodNotes, Photoshop</p>

                <h5 className="semibold-text size-20-text mb-0 mt-4">GENRE</h5>
                <p className="size-20-text">Simulation, Strategy, Management</p>

                <h5 className="semibold-text size-20-text mb-0 mt-4">GAMEPLAY</h5>
                <p className="size-20-text">The game takes place in a fantasy world where monsters of all shapes and personalities live and attend school. In this game, you play as a staff of a school for monsters where you start as an associate lecturer for a class. Throughout the game, you will need to deal with a variety of challenges, such as monsters getting sick or causing trouble in class. As the game progresses, you move up the ladder until becoming the dean of the school. Your responsibilities are also expanding from teaching a class to managing the whole school. You will also be able to customise the school to your liking, adding new buildings, upgrading existing ones, and even decorating the school grounds.</p>
            </Col>
        </Row>

        <hr/>
        <Row id="design-process" style={{marginTop:"50px", marginBottom:"50px"}}>
            <Col>
                <h1 className="semibold-text orange-color">design process</h1>
                <div className="mt-4 text-center justify-content-center">
                    <Image width={956} preview={false} src="https://live.staticflickr.com/65535/52570820035_10c26198b4_o.png" />
                </div>
            </Col>
        </Row>

        <hr/>
        <Row id="define" style={{marginTop:"50px", marginBottom:"50px"}}>
            <Col>
                <h1 className="semibold-text orange-color">define</h1>
                <p className="size-20-text">I came up with an idea to create a simulation slash strategy school-themed game, which was highly inspired by these three media.</p>
                <Row className="mt-4 justify-content-center">
                    <Container className="px-5">
                        <Image.PreviewGroup>
                            <Row>
                                <Col>
                                    <Container>
                                        <Row className="text-center"><Col>
                                            <Image width={370} preview={false} src="https://live.staticflickr.com/65535/52575928483_a489eaa4b5_o.png" />
                                            <p className="size-9-text">Image Source: <a href="https://en.wikipedia.org/wiki/Monsters_University" target="_blank" rel="noreferrer noopener">Walt Disney Studios Motion Pictures on Wikipedia</a></p>
                                        </Col></Row>
                                        <Row className="mt-3"><Col>
                                            <p className="size-20-text mb-1 semibold-text">Monsters University film</p>
                                            <p className="size-15-text">This Disney Pixar 2013 film offered a potential storyline where <span className="semibold-text">diverse monsters</span> study varied programs, join exciting clubs, compete in thrilling events, make new friends, and more. How exciting it would be if this world becomes interactive, right??!!</p>
                                        </Col></Row>
                                    </Container>
                                </Col>
                                <Col>
                                    <Container>
                                        <Row className="text-center"><Col>
                                            <Image width={370} preview={false} src="https://live.staticflickr.com/65535/52575928468_10490d3153_o.png" />
                                            <p className="size-9-text">Image Source: <a href="https://store.steampowered.com/app/332070/School_of_Dragons/" target="_blank" rel="noreferrer noopener">School of Dragons on Steam</a></p>
                                        </Col></Row>
                                        <Row className="mt-3"><Col>
                                            <p className="size-20-text mb-1 semibold-text">School of Dragons game</p>
                                            <p className="size-15-text">A virtual MMORPG game produced based on DreamWorks' films How to Train Your Dragon and How to Train Your Dragon 2 that enables players to raise and <span className="semibold-text">train their dragons.</span> This game inspired me to develop a fantasy school-themed game idea, but with a twist: in Edumonster, players got the chance to be the teacher and not the student!</p>
                                        </Col></Row>
                                    </Container>
                                </Col>
                                <Col>
                                    <Container>
                                        <Row className="text-center"><Col>
                                            <Image width={370} preview={false} src="https://live.staticflickr.com/65535/52574936002_b62ac67f8b_o.png" />
                                            <p className="size-9-text">Image Source: <a href="https://www.ea.com/games/the-sims/the-sims-4/store/addons/the-sims-4-discover-university" target="_blank" rel="noreferrer noopener">Electronic Arts Inc.</a></p>
                                        </Col></Row>
                                        <Row className="mt-3"><Col>
                                            <p className="size-20-text mb-1 semibold-text">The Sims 4 Discover University game</p>
                                            <p className="size-15-text">The "open-world simulation" side of Edumonster was inspired by my all-time favourite The Sims 4. TS4 offered an expansion pack where players got to settle in school as a student and then have the chance to pursue an <span className="semibold-text">education career</span>. However, it was still so limited because players cannot see and control the Sims character when working as a professor.</p>
                                        </Col></Row>
                                    </Container>
                                </Col>
                            </Row>
                        </Image.PreviewGroup>
                    </Container>
                </Row>
                <Row className="mt-5 justify-content-center size-20-text">
                    <p>After some benchmarking, I formulated some “How Might We” (HMW) statements:</p>
                    <ul style={{marginLeft:"10rem"}}>
                        <li>How might we make players feel joyful in experiencing an enhanced but realistic education career?</li>
                        <li>How might we make players immersed in a fantastical world?</li>
                    </ul>
                    <p>I used these statements to guide my game design and constructed 3 player persona insights.</p>
                    <Container className="px-5" style={{maxWidth:"1000px"}}>
                        <Row className="flex-align-center">
                            <Col xs={4}><Image width={270} preview={false} src="https://live.staticflickr.com/65535/52570708634_f7f23b03b7_o.png" /></Col>
                            <Col className="mt-4">"I enjoy <span className="semibold-text">discovering new things</span>, exploring every area of the game map, and interacting with the game's environment."</Col>
                        </Row>
                        <Row className="flex-align-center mt-4">
                            <Col xs={4}><Image width={270} preview={false} src="https://live.staticflickr.com/65535/52570986798_0432895969_o.png" /></Col>
                            <Col className="mt-5">"I hope to complete the quests, collect all of the collectables, and <span className="semibold-text">accomplish every achievement</span> in the game."</Col>
                        </Row>
                        <Row className="flex-align-center mt-4">
                            <Col xs={4}><Image width={270} preview={false} src="https://live.staticflickr.com/65535/52569971297_b10c2a870c_o.png" /></Col>
                            <Col className="mt-5">"I'm looking for ways to <span className="semibold-text">express myself</span> by creating, building, and customizing things in games."</Col>
                        </Row>
                    </Container>
                </Row>
            </Col>
        </Row>

        <hr/>
        <Row id="ideate" style={{marginTop:"50px", marginBottom:"50px"}}>
            <Col>
                <h1 className="semibold-text orange-color">ideate</h1>
                <p className="size-20-text">In the ideation stage, I brainstormed and generated various design solutions by mind mapping, sketching, and exploring ideas.</p>
                
                <h5 className="semibold-text size-20-text mb-0 mt-5">BRAINSTORMING: GAME MECHANICS & AESTHETICS</h5>
                <Image.PreviewGroup>
                    <Container>
                        <Row>
                            <Col style={{boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}} className="py-4 px-2 mt-3 mb-5 border-radius-20 text-center">
                                <Image width={600} src="https://live.staticflickr.com/65535/52576804321_5d30f59739_o.jpg" />
                            </Col>
                            <Col style={{boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", marginLeft:"3rem"}} className="py-3 px-2 mt-3 mb-5 border-radius-20 text-center">
                                <Image width={600} src="https://live.staticflickr.com/65535/52577082429_8e29a3fb99_o.jpg" />
                            </Col>
                        </Row>
                    </Container>
                    
                    <Container>
                        <Row>
                            <Col className="flex-width-xs"><div className="circle-30-size bg-orange text-center semibold-text text-white size-20-text" style={{paddingTop:"0.2rem"}}>1</div></Col>
                            <Col className="semibold-text size-20-text px-0" style={{paddingTop:"0.2rem"}}>Monsters</Col>
                        </Row>
                        <Row className="mt-3">
                            <div style={{boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", maxWidth:"750px", marginLeft:"auto", marginRight:"auto"}} className="py-4 mt-3 mb-5 border-radius-20 text-center">
                                <Image width={700} src="https://live.staticflickr.com/65535/52609648117_c4c7933f8e_o.png" />
                            </div>
                        </Row>
                        <Row className="mt-3">
                            <Col>
                                <p>Monsters are the central life state of the game, and the players play a monster as their character throughout the game. They start the game by creating a monster character, naming them and choosing their starter teaching module.</p>
                                <p>Monsters are complex creatures with emotions and needs. Monsters live out their day-to-day lives, needing to fulfil their hunger, bladder, hygiene, social, and happiness while maintaining their energy bar. The life stages of a monster start with birth as an offspring, ageing up to youth years (young monsters), then fully-grown monsters, seniors, to death. Monsters work as teachers typically start with a fully-grown stage until seniors. They teach students who are young monsters.</p>
                                <p>Monsters can have a unique appearance with different shapes, sizes, eye colours, skin colours, and special features. They also might have a variety of different habits and behaviours. Some might be playful and energetic, while others might be more laid-back and calm. Some cute monsters might be social and enjoy spending time with others, while others might be more solitary.</p>
                                <p>Monsters are also equipped with one or multiple magical elements. The current game design proposed eight elements: Ice, Electric, Earth, Water, Plant, Wind, Light, and Fire. Each element has its own unique physical appearance feature, such as white wings for monsters with wind elements and red horns for monsters with the fire element. Their elements also influence their emotions and needs. For example, monsters with electric elements have particular dislikes towards the aquatic environment and being there will quickly lower their happiness bar. On the other hand, monsters with water elements tend to be happiest when situated in a similar environment. </p>
                                <p>Each monster also possessed abilities called Stats, much similar to skills. There are six types of stats: Battle, Speed, Health, Nursing, Creativity, and Nature. Furthermore, there are five consecutive levels: Beginner, Average, Competent, Proficient, and Expert. Each stat type has its corresponding school modules. For instance, a monster who wants to teach Art Study modules needs a higher level of Creativity stats. Likewise, student monsters taking this module can level up their stats from Beginner to Average and so on.</p>
                            </Col>
                        </Row>

                        <Row className="mt-5">
                            <Col className="flex-width-xs"><div className="circle-30-size bg-orange text-center semibold-text text-white size-20-text" style={{paddingTop:"0.2rem"}}>2</div></Col>
                            <Col className="semibold-text size-20-text px-0" style={{paddingTop:"0.2rem"}}>Profession</Col>
                        </Row>
                        <Row className="mt-3">
                            <Col>
                                <p>There will be 5 levels of education career in the game, starting with Associate Lecturer. The game always begins by asking the players to name the school. Afterwards, the players could create a monster character as their avatar and start the game as associate lecturers of the school. As the game progresses, the players can move up the ladder until becoming the school's dean.</p>
                                <ul><li className="size-15-text mb-0 semibold-text">Associate Lecturer</li></ul>
                                <p>An associate lecturer must teach and <span className="semibold-text">manage one module by themselves and assist a senior lecturer in one module</span>. Players can set their lecture style, class activities, and teaching materials when managing a module. They can also check their classes' attendance, assign and mark student assignments (homework, class presentation, etc.), prepare and conduct terms, and manage their students' grades. Sometimes, they are given tasks by a senior lecturer to mark student assignments or prepare terms for a module they assist. As associate lecturers, players are also expected to join academic staff meetings, check the university email for news and announcements, responding enquiries from students, and make friends with fellow lecturers, staff, and students. They can also tutor students off-hours for extra coins.</p>
                                <ul><li className="size-15-text mb-0 semibold-text">Lecturer</li></ul>
                                <p>If the career progression bar for Level 1 has been filled up, players can move up to become a lecturer. A lecturer can do everything an associate lecturer can, plus a few additional tasks. As a lecturer, players no longer need to assist senior lecturers but have to <span className="semibold-text">manage two modules by themselves.</span> They can now be the Monster Internship module's leader, allowing them to collaborate with links outside the school, such as the Monster Infirmary down the street. Lecturers are also expected to write scholarly papers in which they can freely choose the topic related to the module they teach. For example, if they lead the Advanced Potion module, there will be several topic options, including Making Potions for Sleep Deprived with Ginger and Nightshade.</p>
                                <ul><li className="size-15-text mb-0 semibold-text">Senior Lecturer</li></ul>
                                <p>After filling up the career progression bar, players can become senior lecturers. Now, they have to <span className="semibold-text">lead three modules.</span> But, they can appoint one associate lecturer to help them in one of those modules. A list of potential associate lecturers will be shown with their characteristics and experiences, which the player can later choose. It is important to note that they must build a good relationship with their associates to handle the module well.</p>
                                <ul><li className="size-15-text mb-0 semibold-text">Professor</li></ul>
                                <p>With enough experience and good ratings, the school's dean can crown you the professor title. The core task will be the same as the senior lecturer, managing three modules. However, a professor can write recommendation letters for students and <span className="semibold-text">become a supervisor for student dissertations</span>. They also will get invitations to speak at seminars to get extra coins.</p>
                                <ul><li className="size-15-text mb-0 semibold-text">Director</li></ul>
                                <p>Once in a while, there will be openings for a director in the school, chosen by the dean. The player can accept or refuse if chosen to become a director. Nevertheless, their academic title would still be a professor. But, if they take the offer, they will get an additional role as a <span className="semibold-text">director of the school operations</span> plus new responsibilities. For the school cafeteria, for example, they need to set the menu and check the quality to ensure that monster students are well-fed. They also will get notifications if the school buildings need cleaning or repair. A director also can approve or deny student applications for school hall accommodations. Then, they can ask students to volunteer to check the halls throughout the semester. Regarding the school staff, players with the school's director role can submit applications for the dean to hire new cooks, caretakers, and other non-academic staff.</p>
                                <ul><li className="size-15-text mb-0 semibold-text">Dean</li></ul>
                                <p>As the <span className="semibold-text">highest role in the school</span>, players are expected to manage class schedules, hire and train academic and non-academic staff, appoint the school's director, and promote senior lecturers to become professors. They need to employ adequate staff members with relevant skills and simultaneously manage the school's budget, such as paying for staff, school supplies and building maintenance. It would need excellent management and budgeting skill to excel. The fun part is they got to approve or deny new school clubs and foresee school events. At the end of the semester, the dean also can deliver a speech at graduations.</p>
                            </Col>
                        </Row>

                        <Row className="mt-5">
                            <Col className="flex-width-xs"><div className="circle-30-size bg-orange text-center semibold-text text-white size-20-text" style={{paddingTop:"0.1rem"}}>3</div></Col>
                            <Col className="semibold-text size-20-text px-0" style={{paddingTop:"0.1rem"}}>Skills</Col>
                        </Row>
                        <Row className="mt-3">
                            <Col>
                                <p className="size-15-text">To be a successful lecturer, it is vital to have specific skills. Each skill has a scale from one to five. Players can master those skills by reading books, taking lessons from professors, attending training sessions scheduled by the dean (free but random schedule), or even attending outside school classes (always available but need to be paid).</p>
                                <ul>
                                    <li className="size-15-text"><span className="semibold-text">Communication skills:</span> High communication skills lead to faster positive relationship-building with others.</li>
                                    <li className="size-15-text"><span className="semibold-text">Teaching skills:</span> High teaching skills lead to more learning activities and student assignment options and easier handling of challenges that may arise in the classroom.</li>
                                    <li className="size-15-text"><span className="semibold-text">Technical skills:</span> High technical skills lead to faster preparation of study materials, exam papers, and writing scholarly papers.</li>
                                    <li className="size-15-text"><span className="semibold-text">Subject-specific skills:</span> High subject-specific skills lead to higher monster stats (will be explained later in the Monster section). A strong understanding of the subject matter creates a more positive learning environment for students, and they can easily understand the subject.</li>
                                </ul>
                            </Col>
                        </Row>

                        <Row className="mt-5">
                        <Col className="flex-width-xs"><div className="circle-30-size bg-orange text-center semibold-text text-white size-20-text" style={{paddingTop:"0.2rem"}}>4</div></Col>
                            <Col className="semibold-text size-20-text px-0" style={{paddingTop:"0.2rem"}}>Teaching Modules</Col>
                        </Row>
                        <Row className="mt-3">
                            <Col>
                                <p>There will be several modules that players can choose to teach. Each module has its own playable activity options. For instance, the Plant Study module requires the lecturer to forge various unique plants from the forest and bring them to class. Then, the player can choose the learning activity. Options include doing the traditional teaching method, where the lecturers explain the plants in front of the class, or making it more interactive by having group discussions.</p>    
                                <p>Some modules are listed below (they still can be developed).</p>
                                <p className="semibold-text mb-0">Creativity Modules</p>
                                <ul>
                                    <li>Art Study: Monsters collect fruits and vegetables to make paints, then use their hands and body to paint artwork.</li>
                                    <li>Monster Fashion Design: Monsters research and design a costume for a specific monster.</li>
                                    <li>Monster Food Technology: Monsters learn to cook and experiment with food.</li>
                                    <li>Monster Journalism: Monsters learn to become radio hosts and reporters for local school issues and write them in a newspaper.</li>
                                    <li>etc.</li>
                                </ul>
                                <p className="semibold-text mb-0">Battle Modules</p>
                                <ul>
                                    <li>Advanced Hiding: Monsters learn to hunt using only their sight and hearing senses.</li>
                                    <li>Smell Tracker: Monsters learn to hunt using only with smell senses.</li>
                                    <li>Portal Technology: Monsters learn to construct a portal for teleportation.</li>
                                    <li>Intoxicating Song Vocal Study: Monsters sing and write lyrics to monster-themed intoxicating songs.</li>
                                    <li>etc.</li>
                                </ul>
                                <p className="semibold-text mb-0">Health and Nursing Modules</p>
                                <ul>
                                    <li>Offspring Health and Development: Monsters learn to babysit.</li>
                                    <li>Hatchery: Monsters learn to take care of eggs.</li>
                                    <li>Monster Senior Care: Monsters learn to care for senior/elderly monsters.</li>
                                    <li>Monster Athletic: Monsters run and play sports.</li>
                                    <li>etc.</li>
                                </ul>
                                <p className="semibold-text mb-0">Nature-Oriented Modules</p>
                                <ul>
                                    <li>Plant Study: Monsters study various plants, such as determining whether it is toxic.</li>
                                    <li>Advanced Potion: Monsters assemble potions and medicines using plants.</li>
                                    <li>Aquatic Conservation and Ecology: Monsters study various aquatic creatures.</li>
                                    <li>Metal Study: Monsters study various metals and crystals.</li>
                                    <li>etc.</li>
                                </ul>
                                <p className="semibold-text mb-0">Compulsory Modules</p>
                                <ul>
                                    <li>Internship: Monsters do a practice-based project outside the school.</li>
                                    <li>Dissertation: Monster does a final project supervised by up to two professors.</li>
                                </ul>
                            </Col>
                        </Row>

                        <Row className="mt-5">
                        <Col className="flex-width-xs"><div className="circle-30-size bg-orange text-center semibold-text text-white size-20-text" style={{paddingTop:"0.2rem"}}>5</div></Col>
                            <Col className="semibold-text size-20-text px-0" style={{paddingTop:"0.2rem"}}>School Staff and Facility</Col>
                        </Row>
                        <Row className="mt-3">
                            <Col>
                                <p>The school's <span className="semibold-text">academic staff</span> include all educators, from associate lecturers to professors. The school's <span className="semibold-text">non-academic staff</span> are caretakers, admission staff, cafeteria cooks, librarians, and school clinic doctors.</p>
                                <p>The school facilities are listed below (they can still be developed).</p>
                                <ul>
                                    <li>Art Room: For art-related modules.</li>
                                    <li>Music Room: For music and vocal-related modules.</li>
                                    <li>Radio Broadcasting Studio: For journalism-related modules.</li>
                                    <li>Running track: For athletic-related modules.</li>
                                    <li>Classrooms: For general modules.</li>
                                    <li>Faculty Lounge for academic staff</li>
                                    <li>Student Union: For student clubs.</li>
                                    <li>School Ground: For school events and gatherings.</li>
                                    <li>Convenience Shop: To buy materials needed for classes.</li>
                                    <li>Library</li>
                                    <li>Cafeteria</li>
                                    <li>Clinic</li>
                                    <li>Accommodation Halls</li>
                                    <li>Caretaker Rooms</li>
                                    <li>Toilets</li>
                                    <li>Parking</li>
                                </ul>
                            </Col>
                        </Row>

                        <Row className="mt-5">
                        <Col className="flex-width-xs"><div className="circle-30-size bg-orange text-center semibold-text text-white size-20-text" style={{paddingTop:"0.2rem"}}>6</div></Col>
                            <Col className="semibold-text size-20-text px-0" style={{paddingTop:"0.2rem"}}>Quests & Events</Col>
                        </Row>
                        <Row className="mt-3">
                            <Col>
                                <p>To make the game joyful for the three personas that have been made, I designed several mechanics, namely playable tasks, quests, school events, surprises, and collectables. <span className="semibold-text">Playable tasks</span> mentioned in the mind map are only just a few. In fact, nearly all of the activities in the game are playable, as that is what it takes to become a joyful simulation game. This game also gives players the ability to make choices and decisions within the game to make them feel more invested.</p>
                                <p>Although players are free to play the game the way they like, <span className="semibold-text">quests</span> are embedded in the game to provide a sense of progression and accomplishment for the player, as well as help guide the player through the game world. Quests can also offer rewards such as coins, items, and stats points.</p>
                                <p>The game also embedded a calendar of <span className="semibold-text">school events</span>. Many school events are designed so the player as an educator can participate, such as school fairs and competitions, seminars, open days, parent meetings, graduations, and the school's anniversary events. Lecturers can also accompany students on field trips and organize exhibits for their student works.</p>
                                <p>There are also <span className="semibold-text">surprising "unexpected" events</span>, including troubles in class, school fights, and conflicts with fellow school staff or parents. The lecturers and students can also sometimes get sick or hurt that needs immediate treatment. For all the events, players have the option to punish or reward their students. But keep in mind that players must check their students' monster elements and characteristics to understand how to handle them appropriately.</p>
                                <p>At the end of each term, students will give <span className="semibold-text">ratings</span> on their lecturers that will highly affect their career progression. Rewarded students might give higher ratings, and vice versa. Players can provide more constructive and helpful feedback to failing students, not only an awful grade. This way, the students would feel assisted and not give a bad rating. Building and maintaining good relationships with students and their parents can also influence the student's ratings. Senior lecturers who assign their associates to tutor the students personally can also get a higher chance of satisfactory ratings.</p>
                            </Col>
                        </Row>

                        <Row className="mt-5">
                        <Col className="flex-width-xs"><div className="circle-30-size bg-orange text-center semibold-text text-white size-20-text" style={{paddingTop:"0.2rem"}}>7</div></Col>
                            <Col className="semibold-text size-20-text px-0" style={{paddingTop:"0.2rem"}}>Coins & Collectables</Col>
                        </Row>
                        <Row className="mt-3">
                            <Col>
                                <p><span className="semibold-text">Coins</span> are the only currency in the game. Coins are needed to buy groceries, food, clothing, home upgrades and appliances. Players can also use coins to buy required class materials, purchase potions to ease their tasks, or take lessons to upgrade their skills. </p>
                                <p>Lecturers are paid coins by their log work hours. They can get extra coins by tutoring students, participating in events, and more. Occasionally, they can also call in sick or on vacation. </p>
                                <p>Some collectables in the game are school upgrades, achievements, clothing and accessories. Others are items like crystals, metals, fishes, and plants.</p>
                            </Col>
                        </Row>

                        <Row className="mt-5">
                        <Col className="flex-width-xs"><div className="circle-30-size bg-orange text-center semibold-text text-white size-20-text" style={{paddingTop:"0.2rem"}}>8</div></Col>
                            <Col className="semibold-text size-20-text px-0" style={{paddingTop:"0.2rem"}}>Town</Col>
                        </Row>
                        <Row className="mt-3">
                            <Col>
                                <p>The key to creating an immersive game world is to design a detailed and visually appealing game environment and craft a rich culture for the game world. </p>
                                <p>At the beginning of the game, players could choose a place to build a home. The lives of monsters might be influenced by their magical elements. Some monsters might live in isolated or hidden areas, such as deep forests or underground caves. All and all, players are free to explore the town. They could interact with other monsters in the same neighbourhood, roam around school buildings, buy needed supplies in shops, gather herbs, flowers, or fruits for class materials through the forests, and more.</p>
                                <p>In addition, there are some objects that players can collect, such as different types of plants, crystals, metals, and fish. Players might also explore ancient ruins and discover long-forgotten magical artefacts. There could be all sorts of adventures to be had in such a world. No matter the experience, this fantastical world would be full of wonder, magic, and endless possibilities.</p>
                            </Col>
                        </Row>
                    </Container>
                </Image.PreviewGroup>
            </Col>
        </Row>

        <hr/>
        <Row id="reflection" style={{marginTop:"50px", marginBottom:"50px"}}>
            <Col>
                <h1 className="semibold-text orange-color">reflection</h1>

                <p className="size-20-text semibold-text mt-3">Takeaways</p>
                <Container style={{maxWidth:"1050px"}}>
                    <Row>
                        <Col xs={1} className="size-20-text orange-color semibold-text text-center">01</Col>
                        <Col className="size-20-text">Study more about monsters, their types, and their abilities from books, films, and literature.</Col>
                    </Row>
                    <Row className="mt-4">
                        <Col xs={1} className="size-20-text orange-color semibold-text text-center">02</Col>
                        <Col className="size-20-text">Study more about fantastical world environments and culture.</Col>
                    </Row>
                </Container>

                <p className="size-20-text semibold-text mt-5">Next Steps</p>
                <Container style={{maxWidth:"1050px"}}>
                    <Row>
                        <Col xs={1} className="size-20-text orange-color semibold-text text-center">01</Col>
                        <Col className="size-20-text">Collaborate with illustrators to draw the monster characters and other game art.</Col>
                    </Row>
                    <Row className="mt-4">
                        <Col xs={1} className="size-20-text orange-color semibold-text text-center">02</Col>
                        <Col className="size-20-text">Collaborate with a sound designer to create sound and music to create a sense of atmosphere and immersion in a game world.</Col>
                    </Row>
                    <Row className="mt-4">
                        <Col xs={1} className="size-20-text orange-color semibold-text text-center">03</Col>
                        <Col className="size-20-text">Make a game prototype and do testing</Col>
                    </Row>
                </Container>
            </Col>
        </Row>

        <hr/>
        <Row style={{marginTop:"50px"}}>
            <button size="large" shape="round" className="ant-btn ant-btn-round ant-btn-default ant-btn-lg orange-button" type="button" onClick={backToTopFunction}>
                <span className="semibold-text size-20-text">back to top</span>
            </button>
        </Row>
    </Container>
    )
  };
  
  export default WorksEdumonster;