import { useState } from "react";
import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarLink = styled(Link)`
    display: flex;
    color: white;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    list-style: none;
    height: 60px;
    text-decoration: none;
    font-size: 18px;
    &:hover {
        background: #252831;
        border-left: 4px solid green;
        cursor: pointer;
    }
`;
const SidebarLabel = styled.span`
    margin-left: 16px;
`;
const DropdownLink = styled(Link)`
    background: #252831;
    height: 60px;
    padding-left: 3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: white;
    font-size: 18px;
    &:hover {
        background: green;
        cursor: pointer;
    }
`

const SubNav = ({item}) => {
    const [subnav, setSubnav] = useState(false);
    const showSubNav = () => setSubnav(!subnav);

    return <>
    <SidebarLink
      to={item.path}
      onClick={item.subNav && showSubNav}>
      <div>
          {item.icon}
            <SidebarLabel>
          {item.title}
          </SidebarLabel>
                </div>
                <div>
                  {item.subNav && subnav
                        ? item.iconOpen
                        : item.subNav
                        ? item.iconClose
                        : null}
                </div>
    </SidebarLink>
    
       { subnav &&
        item.subNav.map((item, index) => {
                    return (
                        <DropdownLink
                            to={item.path}
                            key={index}
                        >
                            {item.icon}
                            <SidebarLabel>
                                {item.title}
                            </SidebarLabel>
                        </DropdownLink>
                    );
        })}
  </>
}
  

export default SubNav
