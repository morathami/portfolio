import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {Tag, Anchor, Image} from 'antd';

const WorksTS4Fashion = () => {
    const { Link } = Anchor;

  return (
    <Container style={{marginTop:"120px", marginBottom:"120px"}}>
        <Row id="works-outline">
            <Col className="bg-lightgrey py-4 px-5">
                <h1 className="semibold-text darkgrey-text-color">outline</h1>
                <Anchor affix={false}>
                    <Link className="size-20-text" href="#overview" title="Overview" />
                    <Link className="size-20-text" href="#design-process" title="Design Process" />
                    <Link className="size-20-text" href="#result-showcase" title="Final Result Showcase" />
                </Anchor>
            </Col>
        </Row>

        <Row id="tags" style={{marginTop:"50px"}}>
            <Col>
                <Tag color="#313131" className="bold-text" style={{letterSpacing:"1px"}}>BLENDER 3D MODELLING</Tag>
                <Tag color="#313131" className="bold-text" style={{letterSpacing:"1px"}}>GAME FASHION DESIGN</Tag>
                <Tag color="#313131" className="bold-text" style={{letterSpacing:"1px"}}>SOLO PROJECT</Tag>
            </Col>
        </Row>

        <Row id="overview" style={{marginTop:"30px"}}>
            <Col>
                <h1 className="semibold-text orange-color">overview</h1>
                <h5 className="semibold-text size-20-text mb-0 mt-4">ROLE</h5>
                <p className="size-20-text">Designer, 3D Artist</p>

                <h5 className="semibold-text size-20-text mb-0 mt-4">TIMELINE</h5>
                <p className="size-20-text">2017-2018</p>

                <h5 className="semibold-text size-20-text mb-0 mt-4">TOOLS</h5>
                <p className="size-20-text mb-0">Blender, Photoshop</p>
                <p className="size-20-text">Made for The Sims 4 in-game clothing using <a href="https://sims4studio.com/" rel="noreferrer noopener" target="_blank">Sims 4 Studio</a> (a community-made tools)</p>
            </Col>
        </Row>

        <hr/>
        <Row id="design-process" style={{marginTop:"50px", marginBottom:"50px"}}>
            <Col>
                <h1 className="semibold-text orange-color">design process</h1>
                <div className="mt-4 text-center justify-content-center">
                    <Image width={1223} preview={false} src="https://live.staticflickr.com/65535/52561657100_896ca040b7_o.png" />
                </div>
            </Col>
        </Row>
        <Row className='mt-4'>
            <Container style={{boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", maxWidth:"1200px"}} className="px-5 py-5 border-radius-20 my-4">
                <Row>
                    <Col>
                        <Container>
                            <Row>
                                <Col xs={1}><div className="circle-30-size bg-orange text-center semibold-text text-white size-20-text" style={{paddingTop:"0.2rem"}}>1</div></Col>
                                <Col className="semibold-text size-20-text ml-3" style={{paddingTop:"0.2rem"}}>Get Inspired</Col>
                            </Row>
                            <Row className="mt-3">
                                <Col className="size-15-text mb-0">First and foremost, I looked for fashion inspiration where I could <span className="semibold-text">find ideas and sources of creativity</span> to develop the model later based on my style. I usually flip through fashion magazines, browse online to see popular fashion styles, try new combinations of clothes, or experiment with different colour palettes. I describe my designs as casual, cheerful, and highly influenced by Korean pop stars' 2015s outfits.</Col>
                            </Row>

                            <Row className="mt-5rem">
                                <Col xs={1}><div className="circle-30-size bg-orange text-center semibold-text text-white size-20-text" style={{paddingTop:"0.2rem"}}>2</div></Col>
                                <Col className="semibold-text size-20-text ml-3" style={{paddingTop:"0.2rem"}}>Extract Mesh and Texture</Col>
                            </Row>
                            <Row className="mt-3">
                                <Col className="size-15-text mb-0">I utilised Sims 4 Studio, a community-made tool, to <span className="semibold-text">extract meshes and textures from the game.</span> The extracted mesh was already in Blender file format, whereas the texture file was a PNG image. I could modify meshes of clothing, accessories, and even hairstyles.</Col>
                            </Row>

                            <Row className="mt-5rem">
                                <Col xs={1}><div className="circle-30-size bg-orange text-center semibold-text text-white size-20-text" style={{paddingTop:"0.2rem"}}>3</div></Col>
                                <Col className="semibold-text size-20-text ml-3" style={{paddingTop:"0.2rem"}}>Mesh Editing</Col>
                            </Row>
                            <Row className="mt-3">
                                <Col className="size-15-text mb-0"><span className="semibold-text">Using Blender, I edited the mesh</span> to make a brand-new model. The process involved modifying a mesh's vertices, edges and faces using various techniques, such as moving, scaling, rotating, adding, deleting, or merging.</Col>
                            </Row>

                            <Row className="mt-5rem">
                                <Col xs={1}><div className="circle-30-size bg-orange text-center semibold-text text-white size-20-text" style={{paddingTop:"0.2rem"}}>4</div></Col>
                                <Col className="semibold-text size-20-text ml-3" style={{paddingTop:"0.2rem"}}>Texture Editing</Col>
                            </Row>
                            <Row className="mt-3">
                                <Col className="size-15-text mb-0">After editing the mesh, I needed to <span className="semibold-text">adjust its texture using Adobe Photoshop.</span> It was done by applying and changing its colour, bump, specular, and other maps.</Col>
                            </Row>

                            <Row className="mt-5rem">
                                <Col xs={1}><div className="circle-30-size bg-orange text-center semibold-text text-white size-20-text" style={{paddingTop:"0.2rem"}}>5</div></Col>
                                <Col className="semibold-text size-20-text ml-3" style={{paddingTop:"0.2rem"}}>Try and Share</Col>
                            </Row>
                            <Row className="mt-3">
                                <Col className="size-15-text mb-0">
                                    <p>Having all done, I imported the edited mesh and texture back into the Sims 4 Studio program to see the final result. If I was satisfied with how it turned out, the new clothing model was <span className="semibold-text">ready to be worn!</span></p>
                                    <p>I used to <span className="semibold-text">share my creations</span> with The Sims players ("Simmers") community using Tumblr with the name morasims.tumblr.com. However, over time I got busy in college and "real life" things got kinda hectic. In 2019, I decided to delete my Tumblr. Nowadays, I can only find a few reblogs that still exist as memories.</p>
                                    <p className='mb-0'>Here are some of my finds:</p>
                                    <ul>
                                        <li><a href="https://simlette.tumblr.com/day/2016/04/03/" rel="noreferrer noopener" target="_blank">Chihiro Top on Simlette Tumblr</a></li>
                                        <li><a href="https://love4sims4.tumblr.com/post/174825936808/knock-pullover" rel="noreferrer noopener" target="_blank">Knock Pullover Recolor on Love 4 CC Finds Tumblr</a></li>
                                        <li><a href="https://greenllamas.tumblr.com/post/169930771650/8bitto" rel="noreferrer noopener" target="_blank">Pastel Hair Recolor on greenllamas Tumblr</a></li>
                                        <li><a href="https://maxismatchccworld.tumblr.com/post/174084458630/arrietty" rel="noreferrer noopener" target="_blank">Arrietty Jumpsuit on Maxis Match CC World Tumblr</a></li>    
                                        <li><a href="https://catycait-sims4ccfinds.tumblr.com/post/167887836815/petit-strawhat" rel="noreferrer noopener" target="_blank">Petit Straw Hat on CatyCait CC Finds Tumblr</a></li>
                                    </ul>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col>
                        <Image width={500} preview={false} src="https://live.staticflickr.com/65535/52561242136_341280bc47_o.png" />
                    </Col>
                </Row>
            </Container>
        </Row>

        <hr/>
        <Row id="result-showcase" style={{marginTop:"50px"}}>
            <Col>
                <h1 className="semibold-text orange-color">final result showcase</h1>
                <p className="size-20-text">Here is a showcase of some of my most satisfactory designs. Some are from my local archives because they can no longer be found online.</p>
            </Col>
        </Row>
        <Row>
            <Image.PreviewGroup>
                <Container className="mt-5 px-5 py-5">
                    <Row className="flex-align-center">
                        <Col>
                            <h5 className="semibold-text size-20-text my-0">CHIHIRO TOP</h5>
                            <p className="size-15-text mt-3 mb-0">It was created by merging and editing two separate meshes (a dress and a top). Then, I made a new solid-coloured texture and a colour palette comprising 15 colour swatches. Both meshes I used were original meshes from the game.</p>
                            <Container className="mt-3 text-center">
                                <Row>
                                    <Col><Image className="border-radius-20" preview={false} width={300} src="https://live.staticflickr.com/65535/52570231401_320838c173_o.png" /></Col>
                                </Row>
                                <Row className="mt-3">
                                    <Col className="circle-20-size" style={{marginLeft:"1rem", backgroundColor:"#B91F03"}} />
                                    <Col className="circle-20-size" style={{marginLeft:"1rem", backgroundColor:"#EF5A00"}} />
                                    <Col className="circle-20-size" style={{marginLeft:"1rem", backgroundColor:"#F4BF01"}} />
                                    <Col className="circle-20-size" style={{marginLeft:"1rem", backgroundColor:"#03BC80"}} />
                                    <Col className="circle-20-size" style={{marginLeft:"1rem", backgroundColor:"#00A5A7"}} />
                                    <Col className="circle-20-size" style={{marginLeft:"1rem", backgroundColor:"#28B7D9"}} />
                                    <Col className="circle-20-size" style={{marginLeft:"1rem", backgroundColor:"#6AD4E2"}} />
                                    <Col className="circle-20-size" style={{marginLeft:"1rem", backgroundColor:"#DE4863"}} />
                                    <Col className="circle-20-size" style={{marginLeft:"1rem", backgroundColor:"#EFBB94"}} />
                                    <Col className="circle-20-size" style={{marginLeft:"1rem", backgroundColor:"#EC7D9E"}} />
                                    <Col className="circle-20-size" style={{marginLeft:"1rem", backgroundColor:"#ED7074"}} />
                                    <Col className="circle-20-size" style={{marginLeft:"1rem", backgroundColor:"#C364A6"}} />
                                    <Col className="circle-20-size" style={{marginLeft:"1rem", backgroundColor:"#602FAF"}} />
                                    <Col className="circle-20-size" style={{marginLeft:"1rem", backgroundColor:"#FFFFFF", border: "solid black 1px"}} />
                                    <Col className="circle-20-size" style={{marginLeft:"1rem", backgroundColor:"#000000"}} />
                                </Row>
                            </Container>
                        </Col>
                        <Col className="text-center"><Image className="border-radius-20" width={600} src="https://live.staticflickr.com/65535/52563108881_e8031c3d78_o.png" /></Col>
                    </Row>
                </Container>
                <Container className="bg-pastel-orange mt-5rem px-5 py-5">
                    <Row className="flex-align-center">
                        <Col>
                            <h5 className="semibold-text size-20-text my-0">ARRIETTY JUMPSUIT</h5>
                            <p className="size-15-text mt-3 mb-0">It was created by merging and editing two separate meshes (a top and an outfit). Then, I made a new solid-coloured texture and a pastel-themed colour palette comprising ten colour swatches. Both meshes I used were original meshes from the game.</p>
                            <Container className="px-0 mx-0 mt-3 text-center">
                                <Row>
                                    <Col><Image className="border-radius-20" preview={false} width={300} src="https://live.staticflickr.com/65535/52570677775_c3233b05e1_o.png" /></Col>
                                </Row>
                                <Row className="mt-3 mx-auto text-center" style={{width:"450px"}}>
                                    <Col className="circle-30-size" style={{marginLeft:"1rem", backgroundColor:"#DF6363"}} />
                                    <Col className="circle-30-size" style={{marginLeft:"1rem", backgroundColor:"#F37040"}} />
                                    <Col className="circle-30-size" style={{marginLeft:"1rem", backgroundColor:"#F3C370"}} />
                                    <Col className="circle-30-size" style={{marginLeft:"1rem", backgroundColor:"#B4DC94"}} />
                                    <Col className="circle-30-size" style={{marginLeft:"1rem", backgroundColor:"#97C8DE"}} />
                                    <Col className="circle-30-size" style={{marginLeft:"1rem", backgroundColor:"#94A2F1"}} />
                                    <Col className="circle-30-size" style={{marginLeft:"1rem", backgroundColor:"#B97EDA"}} />
                                    <Col className="circle-30-size" style={{marginLeft:"1rem", backgroundColor:"#E491DE"}} />
                                    <Col className="circle-30-size" style={{marginLeft:"1rem", backgroundColor:"#FFFFFF"}} />
                                    <Col className="circle-30-size" style={{marginLeft:"1rem", backgroundColor:"#000000"}} />
                                </Row>
                            </Container>
                        </Col>
                        <Col className="text-center"><Image className="border-radius-20" width={500} src="https://live.staticflickr.com/65535/52563637648_089885a123_o.png" /></Col>
                    </Row>
                </Container>
                <Container className="mt-5rem px-5 py-5">
                    <Row className="flex-align-center">
                        <Col>
                            <h5 className="semibold-text size-20-text my-0">SOPHIE DRESS</h5>
                            <p className="size-15-text mt-3 mb-0">It was created by merging and editing two separate dress meshes. Then, I made a new solid-coloured texture and a pastel-themed colour palette comprising ten colour swatches. Both meshes I used were original meshes from the game.</p>
                            <Container className="px-0 mx-0 mt-3 text-center">
                                <Row>
                                    <Col><Image className="border-radius-20" preview={false} width={300} src="https://live.staticflickr.com/65535/52570677810_df9370e392_o.png" /></Col>
                                </Row>
                                <Row className="mt-3 mx-auto text-center" style={{width:"450px"}}>
                                    <Col className="circle-30-size" style={{marginLeft:"1rem", backgroundColor:"#DF6363"}} />
                                    <Col className="circle-30-size" style={{marginLeft:"1rem", backgroundColor:"#F37040"}} />
                                    <Col className="circle-30-size" style={{marginLeft:"1rem", backgroundColor:"#F3C370"}} />
                                    <Col className="circle-30-size" style={{marginLeft:"1rem", backgroundColor:"#B4DC94"}} />
                                    <Col className="circle-30-size" style={{marginLeft:"1rem", backgroundColor:"#97C8DE"}} />
                                    <Col className="circle-30-size" style={{marginLeft:"1rem", backgroundColor:"#94A2F1"}} />
                                    <Col className="circle-30-size" style={{marginLeft:"1rem", backgroundColor:"#B97EDA"}} />
                                    <Col className="circle-30-size" style={{marginLeft:"1rem", backgroundColor:"#E491DE"}} />
                                    <Col className="circle-30-size" style={{marginLeft:"1rem", backgroundColor:"#FFFFFF", border: "solid black 1px"}} />
                                    <Col className="circle-30-size" style={{marginLeft:"1rem", backgroundColor:"#000000"}} />
                                </Row>
                            </Container>
                        </Col>
                        <Col className="text-center"><Image className="border-radius-20" width={500} src="https://live.staticflickr.com/65535/52563393684_0d391779ac_o.png" /></Col>
                    </Row>
                </Container>
                <Container className="bg-pastel-orange mt-5rem px-5 py-5">
                    <Row className="flex-align-center">
                        <Col>
                            <h5 className="semibold-text size-20-text my-0">SHIZUKU DRESS</h5>
                            <p className="size-15-text mt-3 mb-0">It was created by merging and editing two separate dress meshes. Then, I made a new solid-coloured texture and a pastel-themed colour palette comprising ten colour swatches. Both meshes I used were original meshes from the game.</p>
                            <Container className="px-0 mx-0 mt-3 text-center">
                                <Row>
                                    <Col><Image className="border-radius-20" preview={false} width={300} src="https://live.staticflickr.com/65535/52570231376_d535db3c6b_o.png" /></Col>
                                </Row>
                                <Row className="mt-3 mx-auto text-center" style={{width:"450px"}}>
                                    <Col className="circle-30-size" style={{marginLeft:"1rem", backgroundColor:"#DF6363"}} />
                                    <Col className="circle-30-size" style={{marginLeft:"1rem", backgroundColor:"#F37040"}} />
                                    <Col className="circle-30-size" style={{marginLeft:"1rem", backgroundColor:"#F3C370"}} />
                                    <Col className="circle-30-size" style={{marginLeft:"1rem", backgroundColor:"#B4DC94"}} />
                                    <Col className="circle-30-size" style={{marginLeft:"1rem", backgroundColor:"#97C8DE"}} />
                                    <Col className="circle-30-size" style={{marginLeft:"1rem", backgroundColor:"#94A2F1"}} />
                                    <Col className="circle-30-size" style={{marginLeft:"1rem", backgroundColor:"#B97EDA"}} />
                                    <Col className="circle-30-size" style={{marginLeft:"1rem", backgroundColor:"#E491DE"}} />
                                    <Col className="circle-30-size" style={{marginLeft:"1rem", backgroundColor:"#FFFFFF"}} />
                                    <Col className="circle-30-size" style={{marginLeft:"1rem", backgroundColor:"#000000"}} />
                                </Row>
                            </Container>
                        </Col>
                        <Col className="text-center"><Image className="border-radius-20" width={500} src="https://live.staticflickr.com/65535/52563393744_eb8a440d55_o.png" /></Col>
                    </Row>
                </Container>
                <Container className="mt-5rem px-5 py-5">
                    <Row className="flex-align-center">
                        <Col>
                            <h5 className="semibold-text size-20-text my-0">FLOWER STRAW HAT FOR KIDS</h5>
                            <p className="size-15-text mt-3 mb-0">It was created by converting (resizing and editing) a hat mesh from adult to children sized. Then, I recolored the texture. Mesh I used was original from the game. Original hat picture:</p>
                            <Container className="mt-3 text-center">
                                <Row>
                                    <Col><Image className="border-radius-20" preview={false} width={300} src="https://live.staticflickr.com/65535/52570506024_d0a2d06ddc_o.png" /></Col>
                                </Row>
                                <Row className="mt-3 mx-auto text-center" style={{width:"550px"}}>
                                    <Col className="circle-30-size" style={{marginLeft:"1rem", backgroundColor:"#ED6B54"}} />
                                    <Col className="circle-30-size" style={{marginLeft:"1rem", backgroundColor:"#F88743"}} />
                                    <Col className="circle-30-size" style={{marginLeft:"1rem", backgroundColor:"#F6BB47"}} />
                                    <Col className="circle-30-size" style={{marginLeft:"1rem", backgroundColor:"#AAFFDD"}} />
                                    <Col className="circle-30-size" style={{marginLeft:"1rem", backgroundColor:"#98C8DE"}} />
                                    <Col className="circle-30-size" style={{marginLeft:"1rem", backgroundColor:"#95A2F1"}} />
                                    <Col className="circle-30-size" style={{marginLeft:"1rem", backgroundColor:"#FE80D4"}} />
                                    <Col className="circle-30-size" style={{marginLeft:"1rem", backgroundColor:"#FE7891"}} />
                                    <Col className="circle-30-size" style={{marginLeft:"1rem", backgroundColor:"#D17FFB"}} />
                                    <Col className="circle-30-size" style={{marginLeft:"1rem", backgroundColor:"#B487FC"}} />
                                    <Col className="circle-30-size" style={{marginLeft:"1rem", backgroundColor:"#EFBB94"}} />
                                    <Col className="circle-30-size" style={{marginLeft:"1rem", backgroundColor:"#E1E1E1"}} />
                                </Row>
                            </Container>
                        </Col>
                        <Col className="text-center"><Image className="border-radius-20" width={600} src="https://live.staticflickr.com/65535/52563393824_53e73fd2b9_o.png" /></Col>
                    </Row>
                </Container>
            </Image.PreviewGroup>
        </Row>
    </Container>
    )
  };
  
  export default WorksTS4Fashion;