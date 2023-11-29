/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { Gw2Server } from '@/types/types';
import { classNames, insertSpaces} from '@/helpers';

const Gw2Table = (props: { servers: any[] }): JSX.Element => {
    const [sortConfig, setSortConfig] = useState({ key: 'name', direction: -1 }); // direction: ascended

    const sortMe = (key: string) => {
        let direction = -1;
        if (sortConfig.key === key && sortConfig.direction === -1) direction = 1;
        setSortConfig({ key, direction });
    }

    const populationSort: { [key: string]: number } = {
        'Low': 0,
        'Medium': 1,
        'High': 2,
        'VeryHigh': 3,
        'Full': 4
    }

    const sortedServers = [...props.servers];
    if (sortConfig !== null) {
        sortedServers.sort((a, b) => {
            if (sortConfig.key === 'name') {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction;
                } else if (a[sortConfig.key] > b[sortConfig.key]) {
                    return -sortConfig.direction;
                }
            } else {
                return sortConfig.direction * (populationSort[a.population] - populationSort[b.population])
            }

            return 0;
        });
    }

    return (
        <>
            <table className="table">
                <thead>
                    <th
                        className={classNames({
                            'sort-asc': sortConfig.key === 'name' && sortConfig.direction === -1,
                            'sort-desc': sortConfig.key === 'name' && sortConfig.direction === 1,
                        })}
                        onClick={() => sortMe('name')}
                    >
                        Server name
                    </th>
                    <th
                        className={classNames({
                            'sort-asc': sortConfig.key === 'population' && sortConfig.direction === -1,
                            'sort-desc': sortConfig.key === 'population' && sortConfig.direction === 1,
                        })}
                        onClick={() => sortMe('population')}
                    >
                        Population
                    </th>
                </thead>
                <tbody>
                    {sortedServers && sortedServers.map((server: Gw2Server, index: number) => (
                        <tr key={index}>
                            <td>{server.name}</td>
                            <td className={`population-${server.population.toLowerCase()}`}>
                                {insertSpaces(server.population)}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Gw2Table;
