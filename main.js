const courses = [
    {
        number: 1,
        title: "Climatology 1",
        category: "phygeo",
        videoUrl: "https://us06web.zoom.us/rec/share/D3wZ-OD1mT48uy4n8gXYT8TitM4pXwIbcIrtOWwOgR0BAJfze1JuI5qriKhT88Uo.IP1Qtx8umLfCzmZh?startTime=1763470925000"
    },
     {
        number: 2,
        title: "Climatology 2",
        category: "phygeo",
        videoUrl: "https://us06web.zoom.us/rec/share/D3wZ-OD1mT48uy4n8gXYT8TitM4pXwIbcIrtOWwOgR0BAJfze1JuI5qriKhT88Uo.IP1Qtx8umLfCzmZh?startTime=1763475854000"
    },
    {
        number: 3,
        title: "Climatology 3",
        category: "phygeo",
        videoUrl: 'https://us06web.zoom.us/rec/share/8UyY49L9RZ6kEd-rumfXj3OFbQq1kh6TfvPyPbbddpMsYskP-lkxP_Zf6xT1FnPm.JgNdksnYbYJvZ6mU?startTime=1763557206000'
    },
     {
        number: 4,
        title: "Climatology 4",
        category: "phygeo",
        videoUrl:  'https://us06web.zoom.us/rec/share/8UyY49L9RZ6kEd-rumfXj3OFbQq1kh6TfvPyPbbddpMsYskP-lkxP_Zf6xT1FnPm.JgNdksnYbYJvZ6mU?startTime=1763562449000'
    },
     {
        number: 5,
        title: "Climatology 5",
        category: "phygeo",
        videoUrl:  "https://us06web.zoom.us/rec/share/e6kMVXUmun5jx4_EYgj5ixJl3niCqLxjNnlotS20O8B-lazYjTVrREXaD5qwFeXr.F_DzvLY25rnRq6mG"
    },
    {
        number: 6,
        title: " Oceanography Class 1 ",
        category: "phygeo",
        videoUrl: "https://us06web.zoom.us/rec/share/HsxiBxl2gJrW8kDNHzL-bSSqds1SdOh4d3inUJ_J_lk0pty6X27A1snu76HMh5Ou.yQCj8W-DsXtH55gB?startTime=1763886517000"
    },
    {
        number: 7,
        title: " Oceanography Class 2",
        category: "phygeo",     
        videoUrl: "https://us06web.zoom.us/rec/share/HsxiBxl2gJrW8kDNHzL-bSSqds1SdOh4d3inUJ_J_lk0pty6X27A1snu76HMh5Ou.yQCj8W-DsXtH55gB?startTime=1763891961000"
    },
    {
        number: 8,
        title: "Oceanography Class 3",
        category: "phygeo",
        videoUrl: "https://us06web.zoom.us/rec/share/HsxiBxl2gJrW8kDNHzL-bSSqds1SdOh4d3inUJ_J_lk0pty6X27A1snu76HMh5Ou.yQCj8W-DsXtH55gB?startTime=1763894841000" 
    },
    {
        number: 9,
        title: "Geomorphic Process + Chemical Weathering",
        category: "phygeo",
        videoUrl: "https://us06web.zoom.us/rec/share/pUhB2f3cmK08r-atssm1v_CPjeDsnRJmHiIaTCVZgmB4W18HAubtGTAWKh6HIYMX.ABSAdO_MXNryRq3s?startTime=1764075537000"
    },
    {
        number: 10,
        title: "Physical Weathering + Mass movements + PYQs",
        category: "phygeo",
        videoUrl: "https://us06web.zoom.us/rec/share/pUhB2f3cmK08r-atssm1v_CPjeDsnRJmHiIaTCVZgmB4W18HAubtGTAWKh6HIYMX.ABSAdO_MXNryRq3s?startTime=1764080038000"
     },
    {
        number : 1,
        title : "Paper 2 Orientation class",
        category : "batchs",
        videoUrl: "https://us06web.zoom.us/rec/share/AVH9a71Z6qrandHE5Q5_2vwRO4Wg3mOF6KVi3YjneD_CD3LjlYfKKS7MnC7-Cxb1.BPn11OQ-MTuolNjC?startTime=1764127202000"
    },
    {
        number: 11,
        title: "Earthquake",
        category: "phygeo",
        videoUrl: "https://us06web.zoom.us/rec/share/PpfKS2YET8Q_Wm0aCnW7dnvHS7FkH0lQrkI7u6uPv_Qxx3Ypp8IN_hLqr-e4vf1R.mDNmzLP_7tmb_l5S?startTime=1764248384000"
    },
    {
        number: 12,
        title: "Volcano",
        category: "phygeo",
        videoUrl: "https://us06web.zoom.us/rec/share/PpfKS2YET8Q_Wm0aCnW7dnvHS7FkH0lQrkI7u6uPv_Qxx3Ypp8IN_hLqr-e4vf1R.mDNmzLP_7tmb_l5S?startTime=1764253304000"
     },
    {
        number: 1,
        title: "Basics of argument writing",
        category: "Answer writing",
        videoUrl: "https://us06web.zoom.us/rec/share/NeWCPTiyonPhxyoF9AEedts-FBSQ61LBFG5ICxbjD_GUMHvrT5S4_wyQ0B9PB_8S.leawoMWQK44EMhnn" 
    },
    { 
        number: 1,
        title: "MGNREGA",
        category: "One Pager",
        videoUrl: "https://us06web.zoom.us/rec/share/TR-KU7aM4xyxJG7MCEFPnQ9IIhYSmYicmJqQk2WQUGwoL0p-VIQhEsVtCDJ1cg0L.7B8dG0BXkv_JWlb_?startTime=1764334815000"
    },
 ]; 

let currentCategory = 'all';

function createCourseCard(course) {
    const card = document.createElement('div');
    card.className = 'course-card';
    card.innerHTML = `
        <div class="course-header">
            <div class="course-category">${course.category}</div>
            <div class="course-number">Class ${course.number}</div>
            <div class="course-title">${course.title}</div>
        </div>
        <div class="course-body">
            <a href="${course.videoUrl}" class="video-link" target="_blank" rel="noopener noreferrer">
                Watch Video ▶
            </a>
        </div>
    `;
    return card;
}

function renderCourses(coursesToRender) {
    const grid = document.getElementById('courseGrid');
    const noResults = document.getElementById('noResults');
    
    grid.innerHTML = '';
    
    if (coursesToRender.length === 0) {
        noResults.style.display = 'block';
        grid.style.display = 'none';
    } else {
        noResults.style.display = 'none';
        grid.style.display = 'grid';
        
        coursesToRender.forEach(course => {
            grid.appendChild(createCourseCard(course));
        });
    }
    
    document.getElementById('visibleClasses').textContent = coursesToRender.length;
}

function filterCourses() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    let filteredCourses = courses;
    
    if (currentCategory !== 'all') {
        filteredCourses = filteredCourses.filter(course => 
            course.category === currentCategory
        );
    }
    
    if (searchTerm) {
        filteredCourses = filteredCourses.filter(course => 
            course.title.toLowerCase().includes(searchTerm) ||
            course.category.toLowerCase().includes(searchTerm) ||
            course.number.toString().includes(searchTerm)
        );
    }
    
    renderCourses(filteredCourses);
}

function handleSearch(event) {
    filterCourses();
}

function handleCategoryClick(event) {
    if (event.target.classList.contains('filter-btn')) {
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        event.target.classList.add('active');
        currentCategory = event.target.dataset.category;
        
        filterCourses();
    }
}

function init() {
    document.getElementById('totalClasses').textContent = courses.length;
    renderCourses(courses);
    
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', handleSearch);
    
    const filterContainer = document.querySelector('.filter-container');
    filterContainer.addEventListener('click', handleCategoryClick);
}

document.addEventListener('DOMContentLoaded', init);
