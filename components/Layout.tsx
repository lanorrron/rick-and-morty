import Head from 'next/head'
import Header from './Header'
import SideBar from './SideBar'

const Layout = ({ children }) => {
    return (
        <div className="flex">
            <div className="w-2/12">
                <SideBar />
            </div>
            <div className="w-10/12 flex flex-col">
                <div>
                    <Head>
                        <title>Rick and morty</title>
                        <meta name="Description" content="Landing page" />
                    </Head>
                    <Header />
                </div>
                <div className="flex-grow mx-4">{children}</div>
            </div>
        </div>
    );
};

export default Layout;