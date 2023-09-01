const handleCategory = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await res.json();
    const categories = data.data;
    // console.log(categories);
    showCategory(categories);
}

const showCategory = (categories) => {
    const categoryTabContainer = document.getElementById('tab-container');

    categories.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.innerHTML = `
        <button onclick="handleCategoryVideo('${category.category_id}')" class="px-5 py-3 rounded-lg font-medium bg-slate-200 hover:bg-red-500 text-gray-800 hover:text-white ">${category?.category}</button>
        `;

        categoryTabContainer.appendChild(categoryDiv);
    })
}


const handleCategoryVideo = async (categoryId) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    const data = await res.json();
    const videoData = data.data;
    // console.log(videoData);
    showCategoryVideo(videoData);
}


const showCategoryVideo = (videoData) => {
    const videoCardDiv = document.getElementById('video-card');
    const videoCardDiv2 = document.getElementById('no-video-card');
    videoCardDiv.innerHTML = '';
    videoCardDiv2.innerHTML = '';
    // console.log(videoData);

    if (videoData.length === 0) {
        const videoDiv = document.createElement('div');
        videoDiv.innerHTML = `
        <figure><img class="mt-24 rounded-md block" src="./images/Icon.png" alt="" /></figure>
        <h3 class="text-4xl font-semibold text-center my-5">Oops!! Sorry, There is no <br> content here</h3>
        `;

        videoCardDiv2.appendChild(videoDiv);

    }
    videoData.forEach(video => {
        const videoDiv = document.createElement('div');

        videoDiv.innerHTML = `
            <figure><img class="w-80 h-52 rounded-md" src="${video?.thumbnail}" alt="" /></figure>
            <div class="card-body">
                <div class="flex gap-2">
                    <div>
                        <div class="avatar">
                            <div class="w-12 rounded-full">
                                <img src="${video?.authors[0]?.profile_picture}" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 class="card-title text-lg">${video?.title}</h2>
                        <div class="flex flex-row gap-2">
                            <small>${video?.authors[0]?.profile_name}</small>
                            <small>${`${video?.authors[0]?.verified}`== 'true' ? '<img src="./images/verified.svg" alt="">' : ''}</small>
                        </div>
                        <small>${video?.others?.views} views</small>
                        <h6></h6>
                    </div>
                </div>
            </div>
        `;
        console.log(video?.authors[0]?.verified);

        videoCardDiv.appendChild(videoDiv);
    })
}




handleCategory();
handleCategoryVideo("1000");