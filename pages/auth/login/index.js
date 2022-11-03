import getConfig from 'next/config';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import AppConfig from '../../../layout/AppConfig';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { LayoutContext } from '../../../layout/context/layoutcontext';
import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';

const LoginPage = () => {
    const [password, setPassword] = useState('');
    const [checked, setChecked] = useState(false);
    const { layoutConfig } = useContext(LayoutContext);
    const contextPath = getConfig().publicRuntimeConfig.contextPath;
    const router = useRouter();
    const containerClassName = classNames('surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden', { 'p-input-filled': layoutConfig.inputStyle === 'filled' });

    return (
        <div className={containerClassName}>
            <div className="flex flex-column justify-content-center">
                <div className="flex card-container">
                    <Image src={`${contextPath}/layout/images/logo-${layoutConfig.colorScheme === 'light' ? 'dark' : 'white'}.svg`} alt="Sakai logo" className="mb-5 w-6rem flex-shrink-0" />
                    <div className="flex flex-column card-container">
                        <div className="flex align-items-right justify-content-right text-xl font-bold border-round">HOSPITAL SANTA BÁRBARA</div>
                        <div className="flex align-items-right justify-content-right text-base font-light border-round mr-2">SUCRE-BOLIVIA</div>
                    </div>
                </div>
                <div style={{ borderRadius: '56px', padding: '0.3rem', background: 'linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)' }}>
                    <div className="w-full surface-card py-5 px-5 sm:px-8" style={{ borderRadius: '53px' }}>
                        <div className="text-center">
                            <div className="text-900 text-3xl font-medium mb-3">Bienvenido</div>
                        </div>

                        <div>
                            <label htmlFor="usuario" className="block text-900 text-xl font-medium mb-2">
                                Usuario
                            </label>
                            <InputText inputid="usuario" type="text" placeholder="Usuario Siaf-Sice" className="w-full md:w-30rem mb-5" style={{ padding: '1rem' }} />

                            <label htmlFor="password1" className="block text-900 font-medium text-xl mb-2">
                            Contraseña
                            </label>
                            <Password inputid="password1" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" toggleMask className="w-full mb-5" inputClassName='w-full p-3 md:w-30rem'></Password>
                            <div className="flex align-items-center justify-content-between mb-5 gap-5">
                                
                                <a className="font-medium no-underline ml-2 text-right cursor-pointer" style={{ color: 'var(--primary-color)' }}>
                                    Recuperar Contraseña?
                                </a>
                            </div>
                            <Button label="Ingrear" className="w-full p-3 text-xl" onClick={() => router.push('/')}></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

LoginPage.getLayout = function getLayout(page) {
    return (
        <React.Fragment>
            {page}
            <AppConfig simple />
        </React.Fragment>
    );
};
export default LoginPage;
