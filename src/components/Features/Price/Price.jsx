import React from 'react';

import styled, {css} from 'styled-components';

import GoX from 'react-icons/lib/go/x';
import GoCheck from 'react-icons/lib/go/check';

const Wrapper = styled.section`
    width: 70%;
    margin: 0 auto;
    margin-top: 2em;
`;

const DivWrapper = styled.div`
    width: 90%;
    margin: 0 auto;
`;

const H2 = styled.h2`
    width: 65%;
    font-size: 1.5em;
    color: white;
    font-weight: 200;
    padding: 0 10px;
    text-align: center;

    ${props => props.inline && css`
        display: inline-flex;
    `}
`;

const JoinButton4 = styled.button`
    font-size: 14px;
    letter-spacing: 1.9px;
    font-weight: 200;
    margin: 0.5em 0.5em 0.5em 1.7em;
    padding: 18px 20px;
    color: white;
    background-color: #e50914;
    cursor: pointer;
    text-decoration: none;
    vertical-align: middle;
    font-family: Arial, sans-serif;
    border-radius: 2px;
    user-select: none;
    text-align: center;
    border: 0;

    &:hover {
        background-color: #E53935;
    }

    ${props => props.narrow && css`
        flex: none;
    `}
`;

const Table = styled.table`
    width: 100%;
    color: white;
    font-weight: 200;
    fill: white;
    margin-top: 40px;
    border-collapse: collapse;
    thead {
        border-collapse: collapse;
        text-transform: uppercase;
        th {
            padding: 10px;
        }
    }
    tbody {
        border-collapse: collapse;
        color: #999;
        td {
            text-align: center;
            padding: 11px 20px;
            &:first-child {
                text-align: left;
            }
        }
        tr {
            &:nth-child(2n) {
                background-color: #222;
            }
        }
    }
`;


const pickPrice = () => {
    return (
        <Wrapper>
            <DivWrapper>
                <H2 inline>Choose one plan and watch everything on Netflix.</H2>
                <JoinButton4>JOIN FREE FOR A MONTH</JoinButton4>
            </DivWrapper>
                <Table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Basic</th>
                            <th>Standard</th>
                            <th>Premium</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Monthly price after free month ends on 3/7/18</td>
                            <td>USD7.99</td>
                            <td>USD9.99</td>
                            <td>USD11.99</td>
                        </tr>
                        <tr>
                            <td>HD available</td>
                            <td><GoX /></td>
                            <td><GoCheck /></td>
                            <td><GoCheck /></td>
                        </tr>
                        <tr>
                            <td>Ultra HD available</td>
                            <td><GoX /></td>
                            <td><GoX /></td>
                            <td><GoCheck /></td>
                        </tr>
                        <tr>
                            <td>Screens you can watch on at the same time</td>
                            <td>1</td>
                            <td>2</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>Watch on your laptop, TV, phone and tablet</td>
                            <td><GoCheck /></td>
                            <td><GoCheck /></td>
                            <td><GoCheck /></td>
                        </tr>
                        <tr>
                            <td>Unlimited movies and TV shows</td>
                            <td><GoCheck /></td>
                            <td><GoCheck /></td>
                            <td><GoCheck /></td>
                        </tr>
                        <tr>
                            <td>Cancel anytime</td>
                            <td><GoCheck /></td>
                            <td><GoCheck /></td>
                            <td><GoCheck /></td>
                        </tr>
                        <tr>
                            <td>First month free</td>
                            <td><GoCheck /></td>
                            <td><GoCheck /></td>
                            <td><GoCheck /></td>
                        </tr>
                    </tbody>
                </Table>
        </Wrapper>
    )
}

export default pickPrice;