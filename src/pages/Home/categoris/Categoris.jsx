import CategoryCard from "./caregoryCard/CategoryCard";

const Categoris = () => {
    const categoryItems = [
        { id: 1, name: 'Mens', description: 'Mens Category', imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/mens-fashion-outfits-index-1621544168.jpg?crop=1.00xw:1.00xh;0,0&resize=640:*' },
        { id: 2, name: 'Womens', description: 'Womens Category', imageUrl: 'https://img.hollisterco.com/is/image/anf/hco-2023-JulyWk2-Jeans-Grid-Womens-Pants-Endline_R.jpg' },
        { id: 3, name: 'Kids', description: 'Kids Category', imageUrl: 'https://sslimages.shoppersstop.com/sys-master/root/hc2/h85/30114329296926/Main-Banner-Static-Kids-Msite_4878689864.gif' },
        { id: 4, name: 'headphone', description: 'HeadPhone ', imageUrl: 'https://th.bing.com/th?id=OIP.vPZNbmkPO1nMGH6gkzO7vQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2' },
        { id: 5, name: 'laptop', description: 'Laptop Category', imageUrl: 'https://th.bing.com/th/id/OIP.dPW0QSJJXxplmv11udoxigHaE7?w=274&h=183&c=7&r=0&o=5&pid=1.7' },
        { id: 6, name: 'Phone', description: 'Phone Category', imageUrl: 'https://th.bing.com/th/id/OIP.b3sjv0CLKAudToJw73j4ZwHaFz?w=222&h=180&c=7&r=0&o=5&pid=1.7' },
        { id: 7, name: 'books', description: 'books Category', imageUrl: 'https://th.bing.com/th/id/OIP.M56Z_XU7r_UeDFR05bfkzwHaE7?w=259&h=180&c=7&r=0&o=5&pid=1.7' },
        { id: 8, name: 'electric', description: 'Electric Category', imageUrl: 'https://th.bing.com/th/id/OIP.iuH_Crjqf7tFqfxmFchxVwHaDe?w=318&h=164&c=7&r=0&o=5&pid=1.7' },
        { id: 9, name: 'medicine', description: 'Medicine Category', imageUrl: 'https://th.bing.com/th/id/OIP.ePxLOwNZL9gKtl_g9hZU9QHaE7?w=232&h=180&c=7&r=0&o=5&pid=1.7' },
        { id: 10, name: 'shoes', description: 'shoes Category', imageUrl: 'https://th.bing.com/th?q=Men%27s+Leather+Shoes&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-WW&cc=BD&setlang=en&adlt=moderate&t=1&mw=247&thvar=defctrl' },
        { id: 11, name: 'fish', description: 'Fish Category', imageUrl: 'https://th.bing.com/th/id/OIP.h-EEusnzeTzhWO7qNiBkEwHaEh?w=317&h=192&c=7&r=0&o=5&pid=1.7' },
        { id: 12, name: 'vegetable', description: 'vegetable Category', imageUrl: 'https://th.bing.com/th/id/OIP.kDcf5yG_ECgHZZMOuNUyqAHaE9?w=254&h=180&c=7&r=0&o=5&pid=1.7' },
    ];
    return (
        <div className="p-8 mt-20">
            <div className='divider w-3/1 my-4'>
                <p className='text-4xl font-serif text-orange-400'>Browse by Categories</p>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-6 gap-2">
                {categoryItems.map(category => <CategoryCard category={category} key={category.id}/>)}
            </div>
        </div>
    );
};

export default Categoris;