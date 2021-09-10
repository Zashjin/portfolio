import classes from './Experience.module.css'
import Header from './../Header/Header'

const listTitleStyle = {
     fontWeight: 900, color: '#045805', fontSize: '30px'
} 

const Ul = { 
    flexDirection:'row'
} 

const Company = { 
    fontSize:'22px'
}

const LiHrStyle = { 
    alignSelf: 'center',
    margin: '1px 0  10px 0',
	height: '2px',
    width: '80%',
    margin: '1px 3px 10px 5px',
	height: '2px',
    border: 'none',
    background: '-webkit-gradient(linear, 0 0, 100% 0, from(transparent), to(transparent), color-stop(50%, #045805))',
}

const CompanyHr = {
    paddingLeft:'20%',
    paddingRight:'20%',
    margin:'0px',
    width:'60%'
}

const Devops =
<div>
    <div style={Ul}>
        <ul>
            <li style={ listTitleStyle }>
                DevOps Staff (Front-End)
                <hr style={LiHrStyle}/>
            </li>
            <li style= {Company}>
                Damage Inc.
                <hr style={CompanyHr}/>
            </li>
        </ul>
        <ul>
            <li>
                Springville, Utah
            </li>
            <li>
                August 2021 - Present
            </li>
        </ul>
    </div>
        <p>
            Aided in developing a new away feature for users.
        </p>
        <p>
        Added filter for Division Leaders to view the activity of their members.
        </p>
    
</div>

const Thinkful =
<div>
    <ul>
        <li style={ listTitleStyle }>
            Software Developer - In-training
            <hr style={LiHrStyle}/>
        </li>
        <li style= {Company}>
            Thinkful
            <hr style={CompanyHr}/>	
        </li>
    </ul>
    <ul>
        <li>
            Orem, Utah
        </li>
        <li>
            March, 2021 – September 2021
        </li>
    </ul>
    <p>
    Learned software development standards with an emphasis on HTML5, JavaScript, React, CSS3.  
    </p>
    <p>
        Created and deployed mobile-first applications
    </p>
    <p>
    Spent several hours a week with a Senior Web Developer.
    </p>
</div>

const AllExperience =[Devops,Thinkful]

const Experience = () => {
    return (
        <div className={classes.Experience} id='experience'>
            <Header title={'Experience'}/>
            <div className={classes.Container}>
                {AllExperience.map(experience => {
                    return (
                        <div className={classes.List}>
                            {experience}
                        </div>
                    )
                })}
            </div>
        </div>
      );
}
 
export default Experience;