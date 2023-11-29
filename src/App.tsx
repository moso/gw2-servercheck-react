import { useFetch } from '@/hooks/useFetch';
import Gw2Table from '@/components/Gw2Table/Gw2Table';
import { Gw2Server } from './types/types';

const App = (): JSX.Element => {
    const euIds = [2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2101,2102,2103,2104,2105,2201,2202,2203,2204,2205,2206,2207,2301];
    const naIds = [1001,1002,1003,1004,1005,1006,1007,1008,1009,1010,1011,1012,1013,1014,1015,1016,1017,1018,1019,1020,1021,1022,1023,1024];

    const euServers = [];
    const naServers = [];

    const { data: servers, isLoading, error } = useFetch<Gw2Server[]>(`https://api.guildwars2.com/v2/worlds?ids=${euIds},${naIds}&lang=en`);

    if (servers !== null) {
        for (const server of servers) {
            if (euIds.includes(server.id)) euServers.push(server);
            if (naIds.includes(server.id)) naServers.push(server);
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
                            <p>Data from <a href="https://wiki.guildwars2.com/wiki/API:2">official Guild Wars 2 API</a>.</p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default App
