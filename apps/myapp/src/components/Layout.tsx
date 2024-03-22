import Main from './Main';
import Header from './Header'
import { useMemo } from 'react';

export default function Layout() {
    const header = useMemo(() => <Header />, []);
    return (
        <div className="container">
            {header}
            <Main />
        </div>
    )
}