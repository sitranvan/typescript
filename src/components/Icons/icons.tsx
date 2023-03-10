import React from 'react'

export interface FillProps {
    fill?: string
}

export const LogoIcon: React.FC = () => (
    <svg
        width={32}
        height={32}
        className='UP8CN'
        viewBox='0 0 32 32'
        version='1.1'
        aria-labelledby='unsplash-home'
        aria-hidden='false'
    >
        <desc lang='en-US'>Unsplash logo</desc>
        <title id='unsplash-home'>Unsplash Home</title>
        <path d='M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z' />
    </svg>
)
export const LogoIconWhite: React.FC = () => (
    <svg
        width={32}
        height={32}
        className='UP8CN'
        viewBox='0 0 32 32'
        version='1.1'
        fill='#fff'
        aria-labelledby='unsplash-home'
        aria-hidden='false'
    >
        <desc lang='en-US'>Unsplash logo</desc>
        <title id='unsplash-home'>Unsplash Home</title>
        <path d='M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z' />
    </svg>
)


export const VisualSearch: React.FC = () => (
    <svg
        width={22}
        height={22}
        className='VdNCI nT46U VETef'
        fill='#767676'
        viewBox='0 0 24 24'
        version='1.1'
        aria-hidden='false'
    >
        <desc lang='en-US'>Visual search</desc>
        <path d='M5 15H3v4c0 1.1.9 2 2 2h4v-2H5v-4ZM5 5h4V3H5c-1.1 0-2 .9-2 2v4h2V5Zm14-2h-4v2h4v4h2V5c0-1.1-.9-2-2-2Zm0 16h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4ZM12 8c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Z' />
    </svg>
)

export const BellIcon: React.FC = () => (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='#767676' version='1.1' aria-hidden='false'>
        <desc lang='en-US'>Bell</desc>
        <path d='M14.345 21.15c-4.637 1.604-8.871.902-9.778-1.805-.303-1.002-.202-2.005.403-3.108.302-.5.302-1.303.1-1.905l-.705-2.306c-.605-1.604-.403-3.308.202-4.712.403-1.102 1.109-1.904 2.117-2.606l-.202-.602c-.302-.601.1-1.403.706-1.604l1.21-.401c.705-.3 1.41.1 1.612.802l.202.602c1.31-.1 2.52.2 3.629.902 1.21.802 2.117 1.905 2.62 3.409l.807 2.506c.202.501.706 1.203 1.31 1.404 1.11.4 1.916 1.103 2.218 2.105 1.008 2.507-1.814 5.715-6.451 7.319Zm4.536-6.717c-.403-1.103-3.226-1.705-7.056-.401-3.83 1.303-5.645 3.609-5.242 4.712.403 1.103 3.226 1.704 7.056.4 3.83-1.302 5.645-3.608 5.242-4.711Zm-7.56 4.11c-1.008 0-1.815-.501-2.42-1.203-.1-.1-.1-.3 0-.4.706-.602 1.714-1.204 3.327-1.806.605-.2 1.21-.4 1.814-.5.202 0 .303.1.303.2v.501c0 1.203-.706 2.306-1.714 2.807.1 0-.706.401-1.31.401Z'></path>
    </svg>
)

export const PrevIcon: React.FC = () => (
    <svg width={24} height={24} className='DG_Wq' fill='#767676' viewBox='0 0 24 24' version='1.1' aria-hidden='false'>
        <desc lang='en-US'>Chevron left</desc>
        <path d='M15.5 18.5 14 20l-8-8 8-8 1.5 1.5L9 12l6.5 6.5Z' />
    </svg>
)

export const NextIcon: React.FC = () => (
    <svg width={24} height={24} className='DG_Wq' fill='#767676' viewBox='0 0 24 24' version='1.1' aria-hidden='false'>
        <desc lang='en-US'>Chevron right</desc>
        <path d='M8.5 5.5 10 4l8 8-8 8-1.5-1.5L15 12 8.5 5.5Z' />
    </svg>
)

export const TrendingIcon: React.FC = () => (
    <svg width={20} height={20} className='ij2OU' fill='#767676' viewBox='0 0 24 24' version='1.1' aria-hidden='false'>
        <desc lang='en-US'>A trend sign</desc>
        <path d='m16 6 2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6Z' />
    </svg>
)

export const HeartIcon: React.FC = ({ fill }: FillProps) => (
    <svg
        width={16}
        height={16}
        className='TrVF8'
        fill='currentColor'
        viewBox='0 0 24 24'
        version='1.1'
        aria-hidden='false'
    >
        <desc lang='en-US'>A heart</desc>
        <path d='M21.424 4.594c-2.101-2.125-5.603-2.125-7.804 0l-1.601 1.619-1.601-1.62c-2.101-2.124-5.603-2.124-7.804 0-2.202 2.126-2.102 5.668 0 7.894L12.019 22l9.405-9.513a5.73 5.73 0 0 0 0-7.893Z' />
    </svg>
)

export const PlusIcon: React.FC = () => (
    <svg width={16} height={16} className='utUL6' fill='#555' viewBox='0 0 24 24' version='1.1' aria-hidden='false'>
        <desc lang='en-US'>A plus sign</desc>
        <path d='M21.8 10.5h-8.3V2.2h-3v8.3H2.2v3h8.3v8.3h3v-8.3h8.3z'></path>
    </svg>
)

export const DownIcon: React.FC = () => (
    <svg width={16} height={16} className='c_c7b' fill='#555' viewBox='0 0 24 24' version='1.1' aria-hidden='false'>
        <desc lang='en-US'>Arrow pointing down</desc>
        <path d='m19.35 11.625-5.85 5.4V1.5h-3v15.525l-5.85-5.4-2.025 2.25L12 22.425l9.375-8.55-2.025-2.25Z' />
    </svg>
)
// ffffffcc
export const TickIcon: React.FC = () => (
    <svg
        width={14}
        height={14}
        className='nD8iJ'
        fill='currentColor'
        viewBox='0 0 24 24'
        version='1.1'
        aria-hidden='false'
    >
        <desc lang='en-US'>A checkmark inside of a circle</desc>
        <path d='M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.9 14.7L6 12.6l1.5-1.5 2.6 2.6 6-6.1 1.5 1.5-7.5 7.6z' />
    </svg>
)

export const PhotosIcon: React.FC = () => (
    <svg
        width={18}
        height={18}
        className='Gdg38'
        fill='currentColor'
        viewBox='0 0 24 24'
        version='1.1'
        aria-hidden='false'
    >
        <desc lang='en-US'>A photo</desc>
        <path d='M20 3H4c-.6 0-1 .4-1 1v16c0 .6.4 1 1 1h16c.6 0 1-.4 1-1V4c0-.6-.4-1-1-1ZM5 18l3.5-4.5 2.5 3 3.5-4.5 4.5 6H5Z' />
    </svg>
)

export const CollectionsIcon: React.FC = () => (
    <svg
        width={18}
        height={18}
        className='Gdg38'
        fill='currentColor'
        viewBox='0 0 24 24'
        version='1.1'
        aria-hidden='false'
    >
        <desc lang='en-US'>A stack of photos</desc>
        <path d='M2 6H0v5h.01L0 20c0 1.1.9 2 2 2h18v-2H2V6Zm20-2h-8l-2-2H6c-1.1 0-1.99.9-1.99 2L4 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2ZM7 15l4.5-6 3.5 4.51 2.5-3.01L21 15H7Z' />
    </svg>
)

export const UsersIcon: React.FC = () => (
    <svg
        width={18}
        height={18}
        className='Gdg38'
        fill='currentColor'
        viewBox='0 0 24 24'
        version='1.1'
        aria-hidden='false'
    >
        <desc lang='en-US'>A group of people</desc>
        <path d='M23 17v3h-4v-3c0-1.7-1-2.9-2.3-3.9 2.7.4 6.3 1.7 6.3 3.9ZM9 12c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4Zm6 0c2.2 0 4-1.8 4-4s-1.8-4-4-4c-.5 0-.9.1-1.3.2C14.5 5.3 15 6.6 15 8s-.5 2.7-1.3 3.8c.4.1.8.2 1.3.2Zm-6 1c-2.7 0-8 1.3-8 4v3h16v-3c0-2.7-5.3-4-8-4Z' />
    </svg>
)

export const ShareIcon: React.FC = () => (
    <svg width={20} height={20} className='XzKLz' fill='#555' viewBox='0 0 24 24' version='1.1' aria-hidden='false'>
        <desc lang='en-US'>A forward-right arrow</desc>
        <path d='M13 20v-5.5c-5.556 0-8.222 1-11 5.5C2 13.25 5.222 8.625 13 7.5V2l9 9-9 9Z' />
    </svg>
)

export const InfoIcon: React.FC = () => (
    <svg width={20} height={20} className='VryqT' fill='#555' viewBox='0 0 24 24' version='1.1' aria-hidden='false'>
        <desc lang='en-US'>Info icon</desc>
        <path d='M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2Zm1.111 8.889v6.667H10.89v-6.667h2.222Zm0-4.445v2.223H10.89V6.444h2.222Z' />
    </svg>
)

export const DotMoreIcon: React.FC = () => (
    <svg width={20} height={20} className='RCM9S' fill='#555' viewBox='0 0 24 24' version='1.1' aria-hidden='false'>
        <desc lang='en-US'>More Actions</desc>
        <path d='M6 12c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2Zm14-2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Zm-8 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Z' />
    </svg>
)

export const LocationIcon: React.FC = () => (
    <svg width={16} height={16} className='ywnoU' fill='#767676' viewBox='0 0 24 24' version='1.1' aria-hidden='false'>
        <desc lang='en-US'>A map marker</desc>
        <path d='M17.6 4.2C16 2.7 14.1 2 12 2s-4 .7-5.6 2.2C4.8 5.7 4 7.7 4 10.2c0 1.7.7 3.5 2 5.4 1.3 2 3.3 4.1 6 6.4 2.7-2.3 4.7-4.4 6-6.4 1.3-2 2-3.8 2-5.4 0-2.5-.8-4.5-2.4-6zm-1.1 10.1c-1 1.5-2.5 3.2-4.5 5.1-2-1.9-3.5-3.6-4.5-5.1-1-1.5-1.5-2.9-1.5-4.1 0-1.8.6-3.3 1.7-4.5C8.9 4.6 10.3 4 12 4s3.1.6 4.3 1.7c1.2 1.2 1.7 2.6 1.7 4.5 0 1.2-.5 2.5-1.5 4.1zm-2-4.3c0 1.4-1.1 2.5-2.5 2.5S9.5 11.4 9.5 10s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5z' />
    </svg>
)
export const PublishedIcon: React.FC = () => (
    <svg width={16} height={16} className='ywnoU' fill='#767676' viewBox='0 0 24 24' version='1.1' aria-hidden='false'>
        <desc lang='en-US'>Calendar outlined</desc>
        <path d='M21 6v14c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h1V2h2v2h8V2h2v2h1c1.1 0 2 .9 2 2zM5 8h14V6H5v2zm14 12V10H5v10h14z' />
    </svg>
)
export const CameraIcon: React.FC = () => (
    <svg width={16} height={16} className='ywnoU' fill='#767676' viewBox='0 0 24 24' version='1.1' aria-hidden='false'>
        <desc lang='en-US'>Camera</desc>
        <path d='m14.12 4 1.83 2H20v12H4V6h4.05l1.83-2h4.24ZM15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2Zm-3 7c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3Zm0-2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5Z' />
    </svg>
)
export const LicenseIcon: React.FC = () => (
    <svg width={16} height={16} className='ywnoU' fill='#767676' viewBox='0 0 24 24' version='1.1' aria-hidden='false'>
        <desc lang='en-US'>Safety</desc>
        <path d='m10 14.2 6.6-6.6L18 9l-8 8-4-4 1.4-1.4 2.6 2.6ZM21 5v6c0 5.5-3.8 10.7-9 12-5.2-1.3-9-6.5-9-12V5l9-4 9 4Zm-2 1.3-7-3.1-7 3.1V11c0 4.5 3 8.7 7 9.9 4-1.2 7-5.4 7-9.9V6.3Z' />
    </svg>
)

export const CheckFilters: React.FC = () => (
    <svg width={16} height={16} className='CeP7L' viewBox='0 0 24 24' version='1.1' aria-hidden='false'>
        <desc lang='en-US'>A checkmark</desc>
        <path d='m10 17.4-5-5L6.4 11l3.6 3.6L17.6 7 19 8.4l-9 9Z' />
    </svg>
)

export const MessageIcon: React.FC = () => (
    <svg width={20} height={20} className='qHQDH' fill='#555' viewBox='0 0 24 24' version='1.1' aria-hidden='false'>
        <desc lang='en-US'>An envelope</desc>
        <path d='M20 4H4c-1.12 0-2 .88-2 2v12c0 1.12.88 2 2 2h16c1.12 0 2-.88 2-2V6c0-1.12-.88-2-2-2Zm0 4-8 4.96L4 8V6l8 4.96L20 6v2Z' />
    </svg>
)

export const ConnectIcon: React.FC = () => (
    <svg width={18} height={18} className='xFKwB' fill='#555' viewBox='0 0 24 24' version='1.1' aria-hidden='false'>
        <desc lang='en-US'>A URL sharing icon (chains)</desc>
        <path d='M11.905 4.56a5.328 5.328 0 1 1 7.534 7.535l-2.82 2.82-1.414-1.414 2.82-2.82a3.328 3.328 0 1 0-4.706-4.706l-2.82 2.82L9.085 7.38l2.82-2.82Zm3.65 5.3-5.696 5.695-1.414-1.415 5.695-5.695 1.415 1.414Zm-6.76.64-2.82 2.82a3.328 3.328 0 0 0 4.706 4.705l2.82-2.82 1.414 1.414-2.82 2.82a5.328 5.328 0 1 1-7.535-7.534l2.82-2.82 1.415 1.414Z' />
    </svg>
)

export const LocationFillIcon: React.FC = () => (
    <svg width={18} height={18} className='xFKwB' fill='#555' viewBox='0 0 24 24' version='1.1' aria-hidden='false'>
        <desc lang='en-US'>A map marker</desc>
        <path d='M5.988 15.637C7.313 17.596 9.317 19.717 12 22c2.683-2.283 4.688-4.404 6.013-6.363C19.338 13.679 20 11.867 20 10.2c0-2.5-.804-4.492-2.413-5.975C15.979 2.742 14.117 2 12 2c-2.117 0-3.979.742-5.587 2.225C4.804 5.708 4 7.7 4 10.2c0 1.667.663 3.479 1.988 5.437ZM15 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z' />
    </svg>
)

export const EarthIcon: React.FC = () => (
    <svg
        width={18}
        height={18}
        className='VRrV5'
        fill='currentColor'
        viewBox='0 0 24 24'
        version='1.1'
        aria-hidden='false'
    >
        <desc lang='en-US'>Planet earth</desc>
        <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93Zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39Z' />
    </svg>
)

export const InstagramIcon: React.FC = () => (
    <svg
        width={18}
        height={18}
        className='VRrV5'
        fill='currentColor'
        viewBox='0 0 24 24'
        version='1.1'
        aria-hidden='false'
    >
        <desc lang='en-US'>Instagram icon</desc>
        <path d='M21.933 7.877c-.048-1.064-.219-1.79-.465-2.429a4.874 4.874 0 0 0-1.154-1.77 4.959 4.959 0 0 0-1.77-1.154c-.635-.246-1.361-.417-2.429-.464C15.052 2.012 14.71 2 11.996 2c-2.714 0-3.056.012-4.123.06-1.063.047-1.79.218-2.425.464-.658.254-1.214.599-1.77 1.155a4.959 4.959 0 0 0-1.154 1.77c-.246.634-.417 1.36-.464 2.428C2.012 8.94 2 9.282 2 11.996c0 2.714.012 3.056.06 4.123.047 1.064.218 1.79.464 2.429.254.658.599 1.214 1.155 1.77a4.958 4.958 0 0 0 1.77 1.154c.634.246 1.36.417 2.428.464 1.067.048 1.405.06 4.123.06s3.056-.012 4.123-.06c1.063-.047 1.79-.218 2.429-.464a4.872 4.872 0 0 0 1.77-1.155 4.956 4.956 0 0 0 1.154-1.77c.246-.634.417-1.36.465-2.428.047-1.067.059-1.405.059-4.123s-.016-3.056-.067-4.119Zm-1.798 8.159c-.044.976-.206 1.504-.345 1.857a3.103 3.103 0 0 1-.746 1.15c-.35.35-.683.568-1.151.747-.353.135-.881.301-1.857.345-1.056.047-1.37.06-4.04.06s-2.984-.012-4.04-.06c-.976-.044-1.504-.207-1.857-.345a3.103 3.103 0 0 1-1.15-.746 3.054 3.054 0 0 1-.747-1.151c-.135-.353-.301-.881-.345-1.857-.047-1.056-.06-1.37-.06-4.04s.013-2.984.06-4.04c.044-.976.206-1.504.345-1.857.183-.468.397-.801.746-1.15.35-.35.683-.568 1.151-.747.353-.135.881-.301 1.857-.345 1.056-.047 1.37-.06 4.04-.06s2.984.013 4.04.06c.976.044 1.504.206 1.857.345.468.183.801.397 1.15.746.35.35.568.683.747 1.151.135.353.301.881.345 1.857.047 1.056.06 1.37.06 4.04s-.012 2.988-.06 4.04Zm-8.139-9.17a5.136 5.136 0 1 0 .002 10.27 5.136 5.136 0 0 0-.002-10.27Zm0 8.463a3.333 3.333 0 1 1 0-6.665 3.333 3.333 0 0 1 0 6.665Zm6.536-8.67a1.197 1.197 0 1 1-2.397 0 1.197 1.197 0 1 1 2.397 0Z' />
    </svg>
)
