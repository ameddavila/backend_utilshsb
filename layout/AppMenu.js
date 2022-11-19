import getConfig from 'next/config';
import React, { useContext } from 'react';
import AppMenuitem from './AppMenuitem';
import { LayoutContext } from './context/layoutcontext';
import { MenuProvider } from './context/menucontext';
import Link from 'next/link';

const AppMenu = () => {
    const model = [
        {
            label: 'Inicio',
            items: [
                { label: 'SEGUROS A CORTO PLAZO', icon: 'pi pi-list', to: '/' 
                
                },
                { label: 'FICHAS', icon: 'pi pi-ticket', to: '/fichasmain' },
                { label: 'DISPONIBILIDAD CAMAS', icon: 'pi pi-plus-circle', to: '/estadistica' },
                { label: 'DASHBOARD', icon: 'pi pi-chart-bar', to: '/dasboard' },
                { label: 'Login', icon: 'pi pi-fw pi-sign-in', to: '/auth/login' }
            ],

        },
       
        {
            label: 'Menú Privado',
            items: [
                {
                    label: 'Farmacia',
                    icon: 'pi pi-fw pi-bookmark',
                    items: [
                        { label: 'Producción', icon: 'pi pi-fw pi-bookmark' },
                        { label: 'Internacion Convenios', icon: 'pi pi-fw pi-bookmark' }
                    ]
                },
                {
                    label: 'Admisiones',
                    icon: 'pi pi-fw pi-bookmark',
                    items: [
                        { label: 'Reporte Fichas', icon: 'pi pi-fw pi-bookmark' }
                    ]
                }
            ]
        },
        
    ];

    return (
        <MenuProvider>
            <ul className="layout-menu">
                {model.map((item, i) => {
                    return !item.seperator ? <AppMenuitem item={item} root={true} index={i} key={item.label} /> : <li className="menu-separator"></li>;
                })}


            </ul>
        </MenuProvider>
    );
};

export default AppMenu;
