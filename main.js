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
    {
	number: 1,
	title: "Chemical Reaction",
	category: "Chemistry",
	videoUrl:'https://us06web.zoom.us/rec/share/8I9fGtWjqNerGmSjwe6mqJbsXIOmTLneWWKDxvUr5BjsGWn2oPCV1otqmkZZ1VMB.ahgCwor0plM_9ZrM?startTime=1765371780000'
},
{

	number:2,
	title: "Acid-Base",
	category: "Chemistry",
	videoUrl: 'https://us06web.zoom.us/rec/share/r17GY8V9Ud7pItp72Y1q0d7gzoKwNMVkS0W4V4fjToCNsIVCntIf-c4Zqaz70H1c.mR12lQw_aBfSlohg?startTime=1765544547000'
},
{

	number: 3,
	title: "Salt",
	category: "Chemistry",
	videoUrl: 'https://us06web.zoom.us/rec/share/r17GY8V9Ud7pItp72Y1q0d7gzoKwNMVkS0W4V4fjToCNsIVCntIf-c4Zqaz70H1c.mR12lQw_aBfSlohg?startTime=1765549752000'
},
{

	number:4,
	title: "Metal And Non Metal Class 1",
	category: "Chemistry",
	videoUrl: 'https://us06web.zoom.us/rec/share/i4O57oFC_Ove1m7zDQSyx-FLw9gQXpgbmAnzIUkhTuK5hON2BKjBjjopHIh04syA.8qAx8v8PrGIN6Y4r?startTime=1765890071000'
},
{

	number:5,
	title: "Metal and non metal class 2",
	category: "Chemistry",
	videoUrl:  'https://us06web.zoom.us/rec/share/i4O57oFC_Ove1m7zDQSyx-FLw9gQXpgbmAnzIUkhTuK5hON2BKjBjjopHIh04syA.8qAx8v8PrGIN6Y4r?startTime=1765894226000'
},
{
	number: 6,
	title: "Carbon Class 1",
	category: "Chemistry",
	videoUrl: 'https://us06web.zoom.us/rec/share/TPU74iVXTWBja9HMDqxdwOdp2whKUBv0K4RkSW3ucTWrHhCeqZEkUWjW2KJABiah.IG3TzhTbuTlyw4El?startTime=1766064079000'
},
{

	number: 7,
	title: "Carbon Class 2",
	category: "Chemistry",
	videoUrl:  'https://us06web.zoom.us/rec/share/TPU74iVXTWBja9HMDqxdwOdp2whKUBv0K4RkSW3ucTWrHhCeqZEkUWjW2KJABiah.IG3TzhTbuTlyw4El?startTime=1766068845000'
},
{

	number: 8,
	title: "Soap+Detergent+Octane+Cetane No",
	category: "Chemistry",
	videoUrl: 'https://us06web.zoom.us/rec/share/bj7LDZ3RClMi0B2zRpXtbm-HV6lXeQ_A5oa8labGRk0cPuBhWELk-Uuq18k_0zac.v7QInFGf3MZqpQou'
},
{

	number: 9,
	title: "Solution + Suspension + Colloid",
	category: "Chemistry",
	videoUrl: 'https://us06web.zoom.us/rec/share/bX9G1TO_xe_MguIKaxJlaQdA2YrLZoEEttFbSJFfjT7NK28d_F41WytJAxspoHvY.7zWoM0F04xumr5kQ?startTime=1766494721000'
},
{

	number: 10,
	title: "Structure of Atom",
	category: "Chemistry",
	videoUrl: 'https://us06web.zoom.us/rec/share/bX9G1TO_xe_MguIKaxJlaQdA2YrLZoEEttFbSJFfjT7NK28d_F41WytJAxspoHvY.7zWoM0F04xumr5kQ?startTime=1766500881000'
},
{

	number: 11,
	title: "Atoms & Molecules",
	category: "Chemistry",
	videoUrl:  'https://us06web.zoom.us/rec/share/8PmPCh0uepjLHZI_vjlFohH2Gw7wvW6Lv5xVn9lXHwbtUfI8sP3dqlfPudQGv58M.u7tKI8veLKFpZyp1'
},
{

	number: 12,
	title: "Periodic Table And Trends",
	category: "Chemistry",
	videoUrl:  'https://us06web.zoom.us/rec/share/xJB1HI0XNygNuqaXxChHArc0_K-VNm-U8tHWVeJXftQtnhX842mK_CztH5FhOox6.Zi71PKcMY1fDHegQ?startTime=1766754146000'
},

 {
        number: 1,
        title: "Neighbourhood first policy",
        category: "ir",
        videoUrl: 'https://us06web.zoom.us/rec/share/RyLeJFkGd8nTe_2vFmCUz7L5Iew_qSP9ERK-LDAMUAP7k69BcrG2YpkV01ik_-vs.xNy_ILf67IdKEqzu'
    },
    {
      number: 2,
        title: "India and its neighbours",
        category: "ir",
        videoUrl: 'https://us06web.zoom.us/rec/share/kGBLK9tX52UQCcuSdHPAnCnKqkkqMtb6MjB2uXmHZ04Lx6KK5FaSCQkUYi9hvftO.enAaU7RBE4IBgAzP'
    },
    {
     number: 3,
        title: "India and its neighbours-Class 2",
        category: "ir",
        videoUrl: 'https://us06web.zoom.us/rec/share/hjhZR1x7oVJfnpzKazK7l-4ryNHFeWAvO9MjyTFGCGN1ZaNK0NUJIj0ww7G1Fi3d.tuUMY7aLK8Dewq6n'
    },
    {
      number: 4,
        title: "India and its neighbours-Class 3",
        category: "ir",
        videoUrl:  'https://us06web.zoom.us/rec/share/U537QHYbvhsXcZMMTE489fEYWxBM1NLKiAmxVc3tgivLWCYJHuvmC8Nvtx37pJY.7QBt2WsQSM1ULoEp'
    },
    {
      number: 5,
        title: "India and its neighbours-Class 4",
        category: "ir",
        videoUrl: 'https://us06web.zoom.us/rec/share/RmESrUoLH51K6HkcP_nMcZ3mOYrnno6WlULccwHWRMm9_jK3G0j_9GYUhEqf-lRA.Pm-r8LTvA7EDUS1j'
    },
    {
      
     number: 6,
        title: "India and its neighbours-Class 5",
        category: "ir",
        videoUrl: 'https://us06web.zoom.us/rec/share/F0z5SL_vcpk59mnl0YJq62lGLOHr_FINmsBRDoNiyfQdP4EYJqrnzw1xtCryL3-3.FSIHndVVXj7p3__p'
    },
    {
      number: 7,
        title: "India - Russia Relation",
        category: "ir",
        videoUrl:  'https://us06web.zoom.us/rec/share/XWQbcfvHb-pzH4mdR5KQkQ7L7BE0En34Jv3JdSAW-sciI-ZkQ3J05z7qG_F5zZuD.zgFMmsn1-GtK-0XJ'
    },
    {
      number: 8,
        title: "India USA Relations",
        category: "ir",
        videoUrl: 'https://us06web.zoom.us/rec/share/wsUTawZxThnaUtPJyR7V9MRBGSGf6Ep-zrdHx8GwycKEKfAjJ-5xp-4DN-wLWQMh.nBkOjHaIzPUmGExT'
    },
    {
      number: 9,
        title: "India Israel and Report Discussion",
        category: "ir",
        videoUrl:  'https://us06web.zoom.us/rec/share/JhysuBB3pm7QmEDYcYmo5aA7qIxObVYF_SUIGYb9jkXEOplrgxtI-gjhvPoNg_3I.i9uVptmaT_Ms70vj'
    },
    {
      
     number: 10,
        title: "Essay discussion and Multilateral intitution World bank",
        category: "ir",
        videoUrl: 'https://us06web.zoom.us/rec/share/s_UQa2VT528iIGkHfbKE8fTfbE0xc73IQj0DxRt2xLPxgNEjQkqqh1L42FaIDXwe.f21b6M3oOtpenOPD'
    },
    {
      number: 11,
        title: "Report and Arguments discussion And Multilateral Institution - IMF",
        category: "ir",
        videoUrl:  'https://us06web.zoom.us/rec/share/_7FO_6zvkf9VAjvOygAqdAi19kC5RBNgdlQJYW_-2mx7_1D2g0dToUyTYnUgWouo.fJNXVp6yHbX8JsyM'
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
