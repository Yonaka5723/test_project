import React from 'react';
import { createRoot} from 'react-dom/client';

const menuItemStyle = {
    marginBottom: '7px',
    paddingLeft: '26px',
    listStyle: 'none',
};

//1
const menuFactory = () =>{
    return <><div>hello world!</div><div>{1+1}</div><ul className="menu"><li className='menu-item' style={menuItemStyle} >項目一</li></ul></>
}

//2
let menuItemWording = ['Like的發問', 'Like的回答', 'Like的文章', 'Like的留言'];
let menuItemArr = menuItemWording.map(wording => <li className="menu-item"> {wording}</li>);

const menuFactory2 = () =>{
    return <><ul className="menu">{menuItemArr}</ul>{menuFactory3()}</>
}

//3
const handleClick = event => {
    console.log(event.target.value);
}
const menuFactory3 = () => {
    return(
    <ul className='menu'>
        <button value={12} onClick={handleClick}>
            按鈕
        </button>
    </ul>
    )

    
}

//4
import MenuItem from './component/MenuItem';
let MIW = ['Like的發問2', 'Like的回答2', 'Like的文章2', 'Like的留言2'];
let MIA = MIW.map(w => <MenuItem text = {w}/>)

import Menu from './component/Menu';

const menuFactory4  = () =>{
    return(
        <Menu title={'Andy Chang的Like'}>{MIA}</Menu>
    )
}

//5

import Apple from './component/Apple';


const menuFactory5 = () =>{
    return(
    <Apple onChange = {e => {console.log(e.value);}}/>
    );
}

//6
import Word from './component/word';



const root = createRoot( document.getElementById('root'));

root.render(
    <>
        {menuFactory()}
        {menuFactory2()}
        <ul className='menu'>
            <button value={87} onClick={handleClick}>
                按鈕
            </button>
        </ul>
        {menuFactory4()}
        {menuFactory5()}
        <select
            onChange={e => {
                console.log(e.target.value);
            }}
        >
            <option value="123">123</option>
            <option value="456">456</option>
        </select>
        <br/>
        <Word/>
    </>
);