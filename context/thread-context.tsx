import * as React from 'react'
import { Thread } from '../types/threads'
import { generateThreads } from '@/utils/generate-dommy-data' 

export const ThreadsContext = React.createContext<Thread[]>([]);

export const ThreadProvider = ({children,}:React.PropsWithChildren):JSX.Element => {
    const [threads,setThreads] = React.useState<Thread[]>([]);
    React.useEffect(() => {
        setThreads(generateThreads())
    }, [])
    return <ThreadsContext.Provider value = {threads}>
        {children}
    </ThreadsContext.Provider>
}
