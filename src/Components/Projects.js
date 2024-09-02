import './Projects.css'
import theme_patter from '../assets/theme_pattern.svg'
import mywork_data from '../assets/mywork_data'
import arrow_icon from '../assets/arrow_icon.svg'
const Projects = () => {
  return (
    <div className='projects'>
      <div className='projects-title'>
        <h1>My Projects</h1>
        <img src={theme_patter} alt='' />
      </div>
      <div className='projects-container'>
        {mywork_data.map((work, index) => (
          <div key={index} >
            <img src={work.w_img} alt='' />
            <h3>{work.w_name}</h3>
            <a href={work.w_link} target='_blank' rel='noopener noreferrer'>
              View Project
            </a>
          </div>
        ))}
      </div>
      <div className='projects-showmore'>
        <a href="https://github.com/Sangawar-Kavya" target="_blank" rel="noopener noreferrer">
          <p>Show More</p>
          <img src={arrow_icon} alt='' />
        </a>
      </div>
    </div>
  )
}

export default Projects
