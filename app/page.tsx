import {headers} from "next/headers";

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
    const header = headers()

    return <ul>
        {
            Array.from(header.entries())
                .map(([key, value]) => <li key={key}>{key}: {value}</li>)
        }
    </ul>
}
