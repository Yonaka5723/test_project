import React,{useState, useEffect} from 'react';
 
const menuContainerStyle = {
    position: 'relative',
    width: '300px',
    padding: '14px',
    fontFamily: 'Microsoft JhengHei',
    paddingBottom: '7px',
    backgroundColor: 'white',
    border: '1px solid #E5E5E5',
};
 
const menuTitleStyle = {
    marginBottom: '7px',
    fontWeight: 'bold',
    backgroundColor:'#ac6b6b',
    color: '#00a0e9',
    cursor: 'pointer',
};
 
const menuBtnStyle = {
    position: 'absolute',
    right: '7px',
    top: '33px',
    // backgroundColor: 'transparent',
    border: 'none',
    color: '#00a0e9',
    outline: 'none',
};
 
const menuStyle = {
    display: 'block', //這裡先讓它顯示
};
 
function Menu(props) {
    const [isOpen, setIsOpen] = useState(false);
    useEffect( () => {
        if(isOpen){
            document.getElementsByClassName('menu-btn')[0].textContent = '^';
            document.getElementsByClassName('menu_l')[0].style.display = 'block';
        }else{
            document.getElementsByClassName('menu-btn')[0].textContent = 'V';
            document.getElementsByClassName('menu_l')[0].style.display = 'none';
        }
    },[isOpen]);

    return (
        <div style={menuContainerStyle}>
            <p style={menuTitleStyle}>{props.title}</p>
            <button 
                className = 'menu-btn'
                style={menuBtnStyle}
                onClick = {() => setIsOpen(!isOpen)}>
                    V
            </button>
            <ul className='menu_l' id ='menu_ul'>{props.children}</ul>
            
        </div>
    );
}
 
export default Menu;