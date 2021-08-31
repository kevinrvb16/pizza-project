import TemporaryDrawer from './tempDrawShop';
import TemporaryDrawerMenu from './temporaryDrawerMenu.js';
function HeaderApp() {
    return (
        <div id="navBar">
            <div id='menuIcon'>
                <TemporaryDrawerMenu></TemporaryDrawerMenu>
            </div>
            <div id= "logoTexto">Pizzaria
            </div>
            <div id='buyIcon'>
            <TemporaryDrawer></TemporaryDrawer>
            </div>
        </div>
    );
}

export default HeaderApp;
