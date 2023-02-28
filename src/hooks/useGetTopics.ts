import { useEffect, useState } from 'react'
import { unsplashApi } from '../api/unsplashApi'
import { Topics } from '../types'

export default function useGetTopics() {
    const [topics, setTopics] = useState<Topics[]>([])

    const fetchData = async () => {
        const data = await unsplashApi.getTopics({ per_page: 10 })
        setTopics(data.data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return topics
}
