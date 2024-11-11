import React from 'react';
import './mainStyle.css';
import { CIcon } from '@coreui/icons-react';
import * as icon from '@coreui/icons';
import image1 from '../../images/pexels-creative-vix-9754.jpg';
import image4 from '../../images/pexels-joyston-judah-331625-933054.jpg';

const Main = () => {
  return (
    <>
      <div className='mainContainer'>
        <div className='header'>
          <div className='leftPart'>
            <ul>
              <li>Workspaces</li>
              <li>Recent</li>
              <li>Starred</li>
              <li>More</li>
              <li>
                <CIcon
                  icon={icon.cilPlus}
                  style={{ height: '1em', color: 'grey' }}
                />
              </li>
            </ul>
          </div>
          <div className='rightPart'>
            <input
              className='headerInput'
              type='text'
              placeholder='Search'
            ></input>
            <CIcon
              icon={icon.cilBell}
              className='icon'
              style={{ height: '1em', color: 'grey' }}
            />
            <CIcon
              icon={icon.cilLightbulb}
              style={{ height: '1em', color: 'grey' }}
            />
            <CIcon
              icon={icon.cilFace}
              style={{ height: '1em', color: 'grey' }}
            />
          </div>
        </div>

        <div className='mainBody'>
          <div className='sideBar'>
            <div className='upperSideBar'>
              <ul style={{ padding: '0', margin: '0' }}>
                <li style={{ fontWeight: '500' }}>
                  <CIcon
                    icon={icon.cilHome}
                    style={{
                      height: '.5em',
                      color: 'black',
                      paddingRight: '.3em',
                    }}
                  />
                  Boards
                </li>
                <li style={{ fontWeight: '500' }}>
                  <CIcon
                    icon={icon.cilHome}
                    style={{
                      height: '.5em',
                      color: 'black',
                      paddingRight: '.3em',
                    }}
                  />
                  Templates
                </li>
                <li style={{ fontWeight: '500' }}>
                  <CIcon
                    icon={icon.cilHome}
                    style={{
                      height: '.5em',
                      color: 'black',
                      paddingRight: '.3em',
                    }}
                  />
                  Home
                </li>
              </ul>
            </div>
            <hr></hr>

            <p style={{ fontSize: '12px', color: 'grey' }}>Workspaces</p>
            <div className='workSpaceSideBar'>
              <p style={{ fontWeight: '500' }}>FocusMate workspace</p>
              <ul>
                <li>
                  <CIcon
                    icon={icon.cilHome}
                    style={{
                      height: '.5em',
                      color: 'black',
                      paddingRight: '.3em',
                    }}
                  />
                  Boards
                </li>
                <li>
                  <CIcon
                    icon={icon.cilHeart}
                    style={{
                      height: '.5em',
                      color: 'black',
                      paddingRight: '.3em',
                    }}
                  />{' '}
                  Highlights
                </li>
                <li>
                  <CIcon
                    icon={icon.cilApplications}
                    style={{
                      height: '.5em',
                      color: 'black',
                      paddingRight: '.3em',
                    }}
                  />
                  Views
                </li>
                <li>
                  <CIcon
                    icon={icon.cilGroup}
                    style={{
                      height: '.5em',
                      color: 'black',
                      paddingRight: '.3em',
                    }}
                  />
                  Members
                </li>
                <li>
                  <CIcon
                    icon={icon.cilCog}
                    style={{
                      height: '.5em',
                      color: 'black',
                      paddingRight: '.3em',
                    }}
                  />
                  Settings
                </li>
              </ul>
            </div>
          </div>
          <div className='boardsView'>
            <h2>YOUR WORKSPACES</h2>

            <div className='boardsViewTitles'>
              <p>FocusMate workspace</p>
              <ul
                className='workSpaceList'
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <li
                  style={{
                    height: '.7em',
                    background: 'lightgray',
                    marginLeft: '15px',
                  }}
                >
                  <CIcon
                    icon={icon.cilHome}
                    style={{
                      height: '.5em',
                      color: 'black',
                      paddingRight: '.3em',
                    }}
                  />
                  Boards
                </li>
                <li
                  style={{
                    height: '.7em',
                    background: 'lightgray',
                    marginLeft: '15px',
                  }}
                >
                  <CIcon
                    icon={icon.cilApplications}
                    style={{
                      height: '.5em',
                      color: 'black',
                      paddingRight: '.3em',
                    }}
                  />
                  Views
                </li>
                <li
                  style={{
                    height: '.7em',
                    background: 'lightgray',
                    marginLeft: '15px',
                  }}
                >
                  <CIcon
                    icon={icon.cilGroup}
                    style={{
                      height: '.5em',
                      color: 'black',
                      paddingRight: '.3em',
                    }}
                  />
                  Members
                </li>
                <li
                  style={{
                    height: '.7em',
                    background: 'lightgray',
                    marginLeft: '15px',
                  }}
                >
                  <CIcon
                    icon={icon.cilCog}
                    style={{
                      height: '.5em',
                      color: 'black',
                      paddingRight: '.3em',
                    }}
                  />
                  Settings
                </li>
              </ul>
            </div>

            <div className='boardsCards'>
              <div
                className='card'
                style={{ backgroundImage: `url(${image1})` }}
              >
                <p>Business Management</p>
              </div>
              <div
                className='card'
                style={{ backgroundImage: `url(${image4})` }}
              >
                <p>Daily To Do List</p>
              </div>
              <div
                className='card'
                style={{ backgroundImage: `url(${image1})` }}
              >
                <p>Project Management</p>
              </div>
              <div
                className='card'
                style={{ backgroundImage: `url(${image4})` }}
              >
                <p>Trip Management</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
