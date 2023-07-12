import Head from 'next/head'
import Header from '../layout/Header'
import SideBar from '../layout/SideBar'

const Layout = ({ children }) => {
    return (
        <div className="flex">
            <div className="w-full flex flex-col">
                <div>
                    <Head>
                        <title>Rick and morty</title>
                        <meta name="Description" content="Landing page" />
                    </Head>
                    <Header className={'flex'}/>
                </div>
                <div className={'md:mt2 lg:mt-2 '}>{children}</div>
            </div>
        </div>
    );
};

export default Layout;