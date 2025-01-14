import React from 'react';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';
import project from '../project_list.json';
const ProjectDetail = ({projectId}) => {
  const single_project = project[projectId];
  return (
    <StyledWrapper>
      <div className="card">
        <img className="image" src={single_project.projectImgPath}/>
        <div className="content">
          <a href="#">
            <span className="title">
              {single_project.projectName}
            </span>
          </a>
          <p className="desc">
            {single_project.projectDetail}
          </p>
          <a className="action" href={single_project.projectLink}>
            <FaGithub/>
            Find out more on Github
            <span aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    border-radius: 0.5rem;
    background-color: #f3f4ff;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    border: 1px solid black;
    width: 100%;
    height: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .card a {
    text-decoration: none;
  }

  .content {
    padding: 0.5rem;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .image {
    width: 500px;
    height: 350px;
    background-color: rgb(239, 205, 255);
    border-radius: 0.5rem;
    object-fit: cover;
    align-items: center;
    justify-content: center;
  }

  .title {
    color: #111827;
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 600;
    height: 100px;
  }

  .desc {
    margin-top: 0.5rem;
    color: #6B7280;
    font-size: 0.875rem;
    line-height: 1.25rem;
    height: 150px;
  }

  .action {
    display: inline-flex;
    margin-top: 1rem;
    color: #ffffff;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
    align-items: center;
    gap: 0.25rem;
    background-color: #2563EB;
    padding: 4px 8px;
    border-radius: 4px;
    cursor: pointer;
  }

  .action span {
    transition: 0.3s ease;
  }

  .action:hover span {
    transform: translateX(4px);
  }
`;

export default ProjectDetail;
