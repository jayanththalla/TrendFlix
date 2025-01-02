import NavbarItem from './Navbaritem';

export default function Navbar() {  
    return (
        <div className='flex items-center justify-center dark:bg-gray-600 bg-amber-100 lg:text-lg p-4 h-12'>
            <NavbarItem title="Trending" param="fetchTrending"/>
            <NavbarItem title="Top Rated" param="fetchTopRated"/>
        </div>
    );
}