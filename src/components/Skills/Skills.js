import classes from './Skills.module.css'
import Header from './../Header/Header'
import { FaReact, FaHtml5, FaGitAlt, FaNodeJs, FaYarn, FaNpm  } from 'react-icons/fa';
import { DiCss3, DiJavascript1, DiHeroku, DiVisualstudio} from "react-icons/di";
import { SiTypescript, SiChai, SiMocha, SiJirasoftware, SiVercel } from "react-icons/si";



const Skills = () => {
    return ( 
        <div className={classes.Skills} id='skills'>
             <Header title={'My Skills'} />
             <h4>
                 Below are some programming languages, toolkits, frameworks, and libraries that I have worked with and like working with. 
             </h4>
             <div className={classes.Container}>
                    return (
                        <div className={classes.List}>
                            <h1>Languages</h1>
                            <div className={classes.Icons}>
                                <div>         
                                    <DiJavascript1  title='JavaScript' color='yellow' size='40px' style={{padding: '1%'}}/>
                                    <p>JavaScript</p>
                                </div>
                                <div>
                                    <FaHtml5  title='HTML 5'  color='red' size='40px' style={{padding: '1%'}}/>
                                    <p>HTML 5</p>
                                </div>
                                <div>
                                    <DiCss3  title='CSS 3'  color='#0066b2' size='40px' style={{padding: '1%'}}/>
                                    <p>CSS 3</p>
                                </div>
                                <div>
                                    <FaReact  title='React'  color='#00FFFF' size='40px' style={{padding: '1%'}}/>
                                    <p>React</p>
                                </div>
                                <div>
                                    <SiTypescript  title='TypeScript'  color='#0066b2' size='40px' style={{padding: '1%'}}/>
                                    <p>TypeScript</p>
                                </div>
                         
                         </div>
                         </div>
                         <div className={classes.List}>
                            <h1>Frameworks & Libraries</h1>
                            <div className={classes.Icons}>
                                <div>
                                    <FaNodeJs  title='Node.js'  color='#03C03C' size='40px' style={{padding: '1%', marginTop:'10px'}}/>
                                    <p>Node.js</p>
                                </div>
                                <div>
                                    <FaGitAlt  title='Git' color='#FF3800' size='40px' style={{padding: '1%', marginTop:'10px'}}/>
                                    <p>Git</p>
                                </div>
                                <div>
                                    <SiMocha  title='Mocha' color='#80461B' size='40px' style={{padding: '1%', marginTop:'10px'}}/>
                                    <p>Mocha</p>
                                </div>
                                <div>
                                    <SiChai  title='Chai' color='red' size='40px' style={{padding: '1%', marginTop:'10px'}}/>
                                    <p>Chai</p>
                                </div>
                            </div>
                        </div>
                         <div className={classes.List}>
                            <h1>Technologies</h1>
                            <div className={classes.Icons}>
                                <div>
                                    <DiHeroku title='Heroku' color='purple' size='40px' style={{padding: '1%', marginTop:'10px'}}/>
                                    <p>Heroku</p>
                                </div>
                                <div>
                                    <SiVercel title='Vercel' color='white' size='40px' style={{padding: '1%', marginTop:'10px'}}/>
                                    <p>Vercel</p>
                                </div>
                                <div>
                                    <DiVisualstudio title='Visual Studios' color='purple' size='40px' style={{padding: '1%', marginTop:'10px'}}/>
                                     <p>Visual Studio</p>
                                </div>
                                <div>
                                    <SiJirasoftware title='JIRA' color='#0066b2' size='40px' style={{padding: '1%', marginTop:'10px'}}/>
                                    <p>Jira</p>
                                </div>
                                <div>
                                    <FaNpm title='NPM' color='red' size='40px' style={{padding: '1%', marginTop:'10px'}}/>
                                    <p>NPM</p>
                                </div>
                                <div>
                                    <FaYarn title='Yarn' color='cyan' size='40px' style={{padding: '1%', marginTop:'10px'}}/>
                                    <p>Yarn</p>
                                </div>

                            </div>
                        </div>
                     )
             </div>
        </div>
     );
}
 
export default Skills;