import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
    background-color: #E78111;
    padding: 16px;
    width: 100%;
    height: 56px;
`;

const Logo = styled.img`
    height: 22px;
    width: 20px;
`;

function Header() {
    return (
        <HeaderWrapper>
            <Logo src="img/logo32.png"></Logo>
        </HeaderWrapper>
    );
}

export default Header