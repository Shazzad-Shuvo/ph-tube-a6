const handleCategory = async() =>{
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await res.json();
    const categories = data.data;
    // console.log(categories);
    showCategory(categories);
}

const showCategory = (categories) =>{
    const categoryTabContainer = document.getElementById('tab-container');

    categories.forEach(category =>{
        const categoryDiv = document.createElement('div');
        categoryDiv.innerHTML = `
        <button class="px-5 py-3 rounded-lg font-medium bg-slate-200 hover:bg-red-500 text-gray-800 hover:text-white ">${category?.category}</button>
        `;

        categoryTabContainer.appendChild(categoryDiv);
    })
}




handleCategory();