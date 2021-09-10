import classes from './Skills.module.css'
import Header from './../Header/Header'

const listTitleStyle = { fontWeight: 900, color: '#045805', fontSize: '30px'}
const HrStyle = { 
    margin: '1px 0 10px 0',
	height: '2px',
    border: '1px solid #S056506',
    borderRadius: '3px',
    overflow:'hidden',
    boxShadow:'0 0 10px #2b9e19',
    background: '#045805' 
}

const LiHrStyle = { 
    alignSelf: 'center',
    margin: '1px 0  10px 0',
	height: '2px',
    width: '50%'
}


const FrontendSkills =
<ul>
    <li style={ listTitleStyle }>Front End</li>
    <hr style={LiHrStyle}/>
    <li>JavaScript ES6 </li>
    <hr style={HrStyle} width= '95%' float='left'></hr>
    <li>ReactJS</li>
    <hr style={HrStyle} width= '85%' float='left'/>
    <li>React Hooks</li>
    <hr style={HrStyle} width= '85%' float='left'/>
    <li>HTML5</li>
    <hr style={HrStyle} width= '75%' float='left'/>
    <li>CSS3</li>
    <hr style={HrStyle} width= '85%' float='left'/>
</ul>

const otherSkills =
<ul>
    <li style={ listTitleStyle }>Other Skills</li>
    <hr style={LiHrStyle}/>
   <li>Restful API's</li>
    <hr style={HrStyle} width= '70%' float='left' />
    <li>Unit Testing</li>
    <hr style={HrStyle} width= '75%' float='left'/>
    <li>Pair Programming</li>
    <hr style={HrStyle} width= '90%' float='left'/>
    <li>Data Structures</li>
    <hr style={HrStyle} width= '80%' float='left'/>
    <li>Test-Driven Development</li>
    <hr style={HrStyle} width= '85%' float='left'/>
</ul>

const tools = 
<ul>
    <li style={ listTitleStyle }>Tools</li>
    <hr style={LiHrStyle}/>
    <li>Mocha & Chai</li>
    <hr style={HrStyle} width= '90%' float='left'/>
    <li>Git</li>
    <hr style={HrStyle} width= '85%' float='left'/>
    <li>Github</li>
    <hr style={HrStyle} width= '90%' float='left'/>
    <li>Heroku</li>
    <hr style={HrStyle} width= '70%' float='left'/>
    <li>Vercel</li>
    <hr style={HrStyle} width= '70%' float='left'/>
</ul>

const totalSkills =[FrontendSkills, otherSkills, tools]



const Skills = () => {
    return ( 
        <div className={classes.Skills} id='skills'>
             <Header title={'My Skills'} />
             <p>
                 Below are some programming languages, toolkits, frameworks, and libraries that I have worked with and like working with. 
             </p>
             <div className={classes.Container}>
                 {totalSkills.map(skills => {
                     return (
                         <div className={classes.List}>
                                {skills}
                         </div>
                     )
                 })}
             </div>
        </div>
     );
}
 
export default Skills;