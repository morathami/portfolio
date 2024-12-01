import React from 'react';
import {Container, Modal} from 'react-bootstrap';
import {Table, Tag} from 'antd';
import {CloseCircleFilled} from "@ant-design/icons";

function FullProjectTable() {
    const [modalShow, setModalShow] = React.useState(false);

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Year',
            dataIndex: 'year',
            key: 'year',
        },
        {
            title: 'Stack/Tools',
            dataIndex: 'stack',
            key: 'stack',
        },
        {
            title: 'Recognition',
            dataIndex: 'recognition',
            key: 'recognition',
        },
        {
            title: 'Tags',
            key: 'tags',
            dataIndex: 'tags',
            render: tags => (
                <>
                    {tags.map(tag => {
                        var color = '';
                        switch (tag) {
                            case 'design':
                                color = 'magenta';
                                break;
                            case 'frontend':
                                color = 'blue';
                                break;
                            case 'backend':
                                color = 'purple';
                                break;
                            case 'writing':
                                color = 'orange';
                                break;
                            default:
                                color = 'volcano';
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: 'Link',
            key: 'link',
            render: (text, record) => (
                <>
                    {
                        record.link !== "#" ? <a target="_blank" rel="noopener noreferrer" href={record.link}>Link</a> :
                            <p>Private</p>
                    }
                </>
            ),
        },
    ];

    const data = [
        {
            key: '20',
            name: 'Personal Website v5',
            year: 2022,
            stack: 'ReactJS',
            recognition: '',
            tags: ['design', 'frontend'],
            link: 'https://thamidaulay.com/',
        },
        {
            key: '19',
            name: 'Edumonster Game Design',
            year: 2022,
            stack: 'Figma',
            recognition: '',
            tags: ['gamedev'],
            link: '#',
        },
        {
            key: '18',
            name: 'Cyber Buddy Educational Game',
            year: 2022,
            stack: 'Godot',
            recognition: 'Undergraduate Degree Thesis',
            tags: ['design', 'gamedev'],
            link: '#',
        },
        {
            key: '17',
            name: 'WebGL 3D Model',
            year: 2022,
            stack: 'WebGL2 (Javascript)',
            recognition: 'Computer Graphics module assignment (Team)',
            tags: ['3dmodelling'],
            link: 'https://morathami.itch.io/tugas-proyek-cgv',
        },
        {
            key: '16',
            name: 'Siortu: Parenting App',
            year: 2021,
            stack: 'Figma',
            recognition: 'E-Learning module assignment (Team)',
            tags: ['design'],
            link: '#',
        },
        {
            key: '15',
            name: 'AJ TFP Backoffice Web',
            year: 2021,
            stack: 'Figma, Vue.js',
            recognition: 'Frontend Engineer Intern Project',
            tags: ['design', 'frontend'],
            link: '#',
        },
        {
            key: '14',
            name: 'Fasilkom UI Zoom License Management System',
            year: 2021,
            stack: 'Python, Django, ReactJS',
            recognition: 'Software Engineering Projects module assignment (Team)',
            tags: ['design', 'backend', 'frontend'],
            link: '#',
        },
        {
            key: '13',
            name: 'Personal Website v4',
            year: 2021,
            stack: 'ReactJS',
            recognition: '',
            tags: ['design', 'frontend'],
            link: 'http://thamiendamora.herokuapp.com/',
        },
        {
            key: '1',
            name: 'HafizhLab',
            year: 2021,
            stack: 'Figma, Nuxt.js',
            recognition: 'Muslim Hackfest Hackathon Champion & Most Favorite Team',
            tags: ['design', 'frontend'],
            link: 'https://www.figma.com/proto/H3X6pjeqCYgNkrM7M85ugt/HafizhLab-Muslim-HackFest?node-id=170%3A9222&scaling=scale-down&page-id=170%3A9221',
        },
        {
            key: '2',
            name: 'Webisaurus',
            year: 2020,
            stack: 'Python, Django',
            recognition: 'Software Engineering module assignment (Team)',
            tags: ['design', 'backend', 'frontend'],
            link: 'http://webisaurus.herokuapp.com/',
        },
        {
            key: '3',
            name: 'Lighthearted',
            year: 2020,
            stack: 'Godot',
            recognition: 'Game Development module assignment (Individual)',
            tags: ['gamedev'],
            link: 'https://morathami.itch.io/lighthearted',
        },
        {
            key: '4',
            name: 'Overtower',
            year: 2020,
            stack: 'Godot',
            recognition: 'Game Development module assignment (Team)',
            tags: ['gamedev'],
            link: 'https://zafirr.itch.io/overtower',
        },
        {
            key: '5',
            name: 'Connect.env',
            year: 2020,
            stack: 'Figma',
            recognition: 'Human-Computer Interaction module assignment (Team)',
            tags: ['design'],
            link: 'https://www.figma.com/proto/2nrxRSviiblf6NFXMMZKrL/Prototype-Connect.env?node-id=426%3A2641&scaling=scale-down&page-id=426%3A2380',
        },
        {
            key: '6',
            name: 'Helpr',
            year: 2020,
            stack: 'Prolog, Python, Flask',
            recognition: 'Artificial Intelligence module assignment (Team)',
            tags: ['backend'],
            link: 'http://sc-helpr.herokuapp.com/',
        },
        {
            key: '7',
            name: 'RemindMe',
            year: 2020,
            stack: 'Java, Spring Boot',
            recognition: 'Advanced Programming module assignment (Team)',
            tags: ['backend', 'chatbot'],
            link: 'https://gitlab.com/remind_me/remindme',
        },
        {
            key: '8',
            name: 'FarmaKami',
            year: 2020,
            stack: 'Python, Django',
            recognition: 'Databases module assignment (Team)',
            tags: ['backend'],
            link: 'https://tk4-basdat-kel48.herokuapp.com/',
        },
        {
            key: '9',
            name: 'Personal Website v3',
            year: 2019,
            stack: 'Python, Django, Javascript',
            recognition: 'Web Design & Programming module assignment (Individual)',
            tags: ['design', 'frontend', 'backend'],
            link: 'http://ppw6-thamiendamora.herokuapp.com/',
        },
        {
            key: '10',
            name: 'Personal Website v2',
            year: 2019,
            stack: 'Python, Django, Javascript',
            recognition: 'Web Design & Programming module assignment (Individual)',
            tags: ['design', 'frontend', 'backend'],
            link: 'http://ppw4-thamiendamora.herokuapp.com/',
        },
        {
            key: '11',
            name: 'Personal Website v1',
            year: 2019,
            stack: 'HTML',
            recognition: 'Web Design & Programming module assignment (Individual)',
            tags: ['design', 'frontend'],
            link: 'http://ppw1-thamiendamora.herokuapp.com/index.html',
        },
        {
            key: '12',
            name: 'WarungTeka',
            year: 2019,
            stack: 'Python, Django, Javascript',
            recognition: 'Web Design & Programming module assignment (Team)',
            tags: ['frontend', 'backend'],
            link: 'https://warungteka-ng.herokuapp.com/warungteka/',
        },
    ]

    const pagination = {
        pageSize: 3,
    }

    return (
        <div>
            <Container className="py-5">
                <button size="large" shape="round" className="ant-btn ant-btn-round ant-btn-default ant-btn-lg my-5 orange-button"
                        onClick={() => setModalShow(true)} type="button">
                            <span className="semibold-text size-20-text">see full project list</span>
                </button>

                <Modal
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    backdrop="static"
                    keyboard={false}
                    id="fullproject"
                >
                    <Modal.Header>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Full Project List
                        </Modal.Title>
                        <CloseCircleFilled style={{fontSize: '30px', color: '#F6AA81'}}
                                           onClick={() => setModalShow(false)}/>
                    </Modal.Header>
                    <Modal.Body>
                        <Table columns={columns} dataSource={data} pagination={pagination}/>
                    </Modal.Body>
                    <Modal.Footer/>
                </Modal>
            </Container>
        </div>
    );
}

export default FullProjectTable;
