import Gw2Table from '@/components/Gw2Table/Gw2Table';
import DarkModeToggle from '@/components/DarkModeToggle/DarkModeToggle';
import { useFetch } from '@/hooks/useFetch';
import { Gw2Server } from '@/types/types';
import { Helmet } from 'react-helmet';

const App = (): JSX.Element => {
    const { data: servers, isLoading, error } = useFetch<Gw2Server[]>(`https://api.guildwars2.com/v2/worlds?ids=all&lang=en`);

    const euServers = [];
    const naServers = [];

    if (servers !== null) {
        for (const server of servers) {
            // All servers below id 2000 are NA servers
            if (server.id < 2000) naServers.push(server);
            else euServers.push(server);
        }
    }

    return (
        <>
            <div className="container">
                <div className="row xs-justify-center mx-auto">
                    <div className="xs-12">
                        <h1 className="section-title">Guild Wars 2 Server Population Check</h1>
                    </div>
                    {isLoading && (
                        <div className="xs-12">Table loading...</div>
                    )}
                    {error && (
                        <div className="xs-12">{error}</div>
                    )}
                    {servers && (
                        <>
                            <div className="xs-12 md-6">
                                <h3 className="section-title">EU servers</h3>
                                <Gw2Table servers={euServers} />
                            </div>
                            <div className="xs-12 md-6">
                                <h3 className="section-title">NA servers</h3>
                                <Gw2Table servers={naServers} />
                            </div>
                        </>
                    )}
                </div>
                <footer>
                    <div className="row xs-justify-center mx-auto">
                        <div className="xs-12">
                            <p>Data from <a href="https://wiki.guildwars2.com/wiki/API:2">official Guild Wars 2 API</a>.
                                <DarkModeToggle />
                            </p>
                        </div>
                    </div>
                </footer>
            </div>

            <Helmet>
                <title>Guild Wars 2 Server Population Check</title>
                <meta name="description" content="Check Guild Wars 2 server population LIVE " />
            </Helmet>
        </>
    )
}

export default App
