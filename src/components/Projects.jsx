import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import './Projects.css';
import { ThemeContext } from '../ThemeContext';
import ProjectDetail from './ProjectDetail';

const Section = styled.div`
  height: 90vh;
  width: 85%;
  margin: 0 auto;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  `
const Container = styled.div`
  width: 1400px;
  margin: 0 30px;
  padding: 10px 0px;
  align-items: center;
  display: flex;
`
const Left = styled.div`
    width: 100%;
    margin-bottom: 20px;
`
const Right = styled.div`
    width: 100%;
    height: 700px;
    margin-bottom: 20px;
`
const Title = styled.h1`
    width: 50%;
    font-size: 40px;
    align-items: center;
    margin-bottom: 40px;
`
const ProjectsList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`   


function Projects() {
  const { isLightTheme, toggleTheme } = useContext(ThemeContext);
  const [projectId, setProjectId] = useState(0);
  const handleProjectClick = async (id) => {
    setProjectId(id);
  }
  return (
    <Section>
        <Container>
            <Left>
                <Title>Projects</Title>
                <ProjectsList>
                    <div className={isLightTheme ? 'project_Dark' : 'project_Light'} onClick={() => handleProjectClick(0)}>
                        <div className='project-title'>Online Chatbot platform</div>
                        <div className='project-desc'>
                            2022 Sep - 2023 Dec
                        </div>
                    </div>
                    <div className={isLightTheme ? 'project_Dark' : 'project_Light'} onClick={() => handleProjectClick(1)}>   
                        <div className='project-title'>Automated IELTs examiner</div>
                        <div className='project-desc'>2022 Sep - 2024 Feb</div>
                    </div>
                    <div className={isLightTheme ? 'project_Dark' : 'project_Light'} onClick={() => handleProjectClick(2)}>
                        <div className='project-title'>CrowdSpark</div>
                        <div className='project-desc'>2024 Oct</div>
                    </div>
                    <div className={isLightTheme ? 'project_Dark' : 'project_Light'} onClick={() => handleProjectClick(3)}>
                        <div className='project-title'>SuickOverflow</div>
                        <div className='project-desc'>2024 Dec - ongoing</div>
                    </div>
                </ProjectsList >
            </Left>
            <Right>
                <ProjectDetail projectId={projectId} />
            </Right>
        </Container>
    </Section>
  )
}

export default Projects