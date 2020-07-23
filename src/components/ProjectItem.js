import React, { useState } from 'react';
import { Card, Modal } from 'antd';
import { LinkOutlined, EllipsisOutlined, GithubOutlined } from '@ant-design/icons';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import squashPic from '../icons/Squash_Niagara_Logo.png'
import stackpolePic from '../icons/004.png'
import expensifyPic from '../icons/expensify.png'
import taskApiImg from '../icons/task-api.png'
import weatherAppImg  from '../icons/weather-app.png'
import indAppImg from '../icons/indApp.png'


const { Meta } = Card;

const ProjectItem = ( { project } ) => {

    const [visible, setVisible] = useState(false)

    const showModal = () => {
        setVisible(true)
    }

    const handleOk = () => {
        setVisible(false)
    }

    let cover
    switch(project.title){
        case 'Community Sponsored Project':
            cover = squashPic
            break
        case 'Expensify':
            cover = expensifyPic
            break
        case 'Financial WebApp':
            cover = stackpolePic
            break
        case 'Task Application REST API':
            cover = taskApiImg
            break
        case 'Weather App - Web server':
            cover = weatherAppImg
            break
        case 'Indecision App':
                cover = indAppImg
                break    
        default:
            cover = weatherAppImg
    }
    return (
        <div className="grid-item">  
            <ReactCSSTransitionGroup
            transitionAppear={true}
            transitionAppearTimeout={600}
            transitionEnterTimeout={600}
            transitionLeaveTimeout={200}
            transitionName="SlideIn"
        > 
            <Card
                style={{width:275, borderColor:'#1BC0DA'}}
                cover={<img alt="example" src={cover} />}
                actions={[
                    project.github ? <a href={project.github}><GithubOutlined  key="github" /></a> : null,
                    project.link ? <a href={project.link}><LinkOutlined key="link" /></a> : null,
                   // eslint-disable-next-line jsx-a11y/anchor-is-valid
                   <a  onClick={showModal}> <EllipsisOutlined key="ellipsis" /></a>,
                  ]}
            >
                <Meta 
                title={project.title} 
                description={project.skills.map((skill) => skill + ' ')}  
                />
            </Card>
            <Modal
            title={project.title}
            visible={visible}
            onOk={handleOk}
            onCancel={handleOk}
            >
            <img style={{maxWidth: '100%', marginBottom: 10}} alt="example" src={cover} />
            <p>{project.description}</p>
            </Modal>
        </ReactCSSTransitionGroup>
    </div>
    )
}

export { ProjectItem as default }
