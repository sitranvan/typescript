import { useEffect, useState } from 'react'
import { unsplashApi } from '../api/unsplashApi'
import { Topics } from '../types'

export default function useGetTopics() {
    const [topics, setTopics] = useState<Topics[]>([])

    const fetchData = async () => {
        try {
            const data = await unsplashApi.getTopics({ per_page: 10 })
            setTopics(data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return topics
}
