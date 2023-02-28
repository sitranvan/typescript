import { Fragment, useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useParams } from 'react-router-dom'
import { unsplashApi } from '../../api/unsplashApi'
import Button from '../../components/Button'
import useGetTopics from '../../hooks/useGetTopics'
import { ListPhoto, Topics } from '../../types'
import PuffLoader from 'react-spinners/PuffLoader'
import Slider from '../../components/Slider'
import TitleSlider from '../../components/TitleSlider'
import PhotoList from '../../components/PhotoList'
export default function TopicsPage() {
    const [photosTopic, setPhotosTopic] = useState<ListPhoto[]>([])
    const [topicInfo, setTopicInfo] = useState<Topics>()
    const [page, setPage] = useState<number>(1)
    const topics = useGetTopics()
    const { slug } = useParams<{ slug: string }>()

    const fetchData = async () => {
        try {
            const data = await unsplashApi.getPhotosTocpic(slug!, { per_page: 6, page })
            const newPhoto = [...photosTopic, ...data.data]
            setPhotosTopic(newPhoto)
            setPage(page + 1)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const fetchTopicPhoto = async () => {
            try {
                setPhotosTopic([])
                setPage(1)
                const data = await unsplashApi.getPhotosTocpic(slug!, { per_page: 6 })
                const newPhoto = data.data
                setPhotosTopic(newPhoto)
            } catch (error) {
                console.log(error)
            }
        }
        fetchTopicPhoto()
    }, [slug])

    useEffect(() => {
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // fetch title, img, desc topic
    useEffect(() => {
        try {
            const topicInfo = topics.find((topic) => topic.slug === slug)
            setTopicInfo(topicInfo)
        } catch (error) {
            console.log(error)
        }
    }, [slug, topics])

    return (
        <div>
            <Slider
                className='w-[90%]'
                sliderImg={photosTopic[0]?.urls.regular}
                photoBy={photosTopic[0]?.user.name || 'User'}
            >
                <Fragment>
                    <TitleSlider marginY='my-10' desc={topicInfo?.description} />
                    <Button className='py-[6px] px-6 text-black text-opacity-95' title={topicInfo?.title}>
                        Submit to
                    </Button>
                </Fragment>
            </Slider>
            <div className='mt-[50px]  w-[1280px] mx-auto px-8'>
                <InfiniteScroll
                    dataLength={photosTopic.length}
                    next={fetchData}
                    hasMore={true}
                    loader={<PuffLoader className='mx-auto' color='#767676' />}
                >
                    <div className='grid-photo'>
                        <PhotoList photos={photosTopic} />
                    </div>
                </InfiniteScroll>
            </div>
        </div>
    )
}
