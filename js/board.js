let board_posts = [

    {
    
    id:1 ,
    title:'결제 관련 문의 드립니다!',
    content:'호텔고에서 결제하면 제 아이디로 혜택이 쌓이나요?',
    writerId:'osh_1004',
    createdAt:'2023-07-01 15:31',
    like:39
    
    },
    
    {
    
    id:2 ,
    title:'예약을 변경 하고 싶습니다.',
    content:'일정이 바뀌어 예약을 변경하고 싶습니다.',
    writerId:'bae9pang',
    createdAt:'2023-07-04 17:31',
    like:35
    
    },
    
    {
    
    id:3 ,
    title:'호텔 등급 출처는 어디인가요?',
    content:'아 이준호랑 사귈까',
    writerId:'holy_won',
    createdAt:'2023-07-06 01:26',
    like:43
    
    },
    {
        id:4, 
        title:'최저가 보장이 되나요?',
        content:'듣도 보도 못한 사이트인데 믿을만한지 궁금하네요.',
        writerId:'acli',
        createdAt:'2023-07-06 13:18',
        like:3
      },
      {
        id:5, 
        title:'호텔 연락처를 알고 싶습니다만',
        content:'참..눈물만 납니다..ㅠ',
        writerId:'checkGPT',
        createdAt:'2023-07-07 15:33',
        like:5
      },
      {
        id:6, 
        title:'예약 결제는 어떻게 진행 되나요?',
        content:'지금 돈이 없어서 예약 결제를 하고싶은디...',
        writerId:'bboddo22',
        createdAt:'2023-07-07 16:01',
        like:107
      },
      {
        id:7, 
        title:'예약 확인 어디서 하나요?',
        content:'마이페이지에 있나요? 마이페이지는 어딨나요,,',
        writerId:'dding-ddong19',
        createdAt:'2023-07-08 05:25',
        like:486
      },
      {
        id:8, 
        title:'환불 정책은 어디 있나요',
        content:'제 돈 다 못 받는거 아니죵...?',
        writerId:'kkoong0225',
        createdAt:'2023-07-08 06:21',
        like:85
      },
      {
        id:9, 
        title:'예약 확인서는 어떻게 받죠??',
        content:'저는 눈으로 보고 손으로 만져져야 믿기 때문에 통장도 꼭 만들러갑니다.',
        writerId:'zzanga18',
        createdAt:'2023-07-08 06:27',
        updatedAt:'2023-07-05 15:51', 
        like:3
      },
      {
        id:10, 
        title:'계정 정보를 변경하고 싶어용',
        content:'내 아이디 너무 흑역사ㅠ ',
        writerId:'beercandy_89',
        createdAt:'2023-07-09 12:31',
        like:4
      },
      {
        id:11, 
        title:'광고이메일 차단',
        content:'은 어떻게 하나요? 너무 많이 보내시네요;',
        writerId:'qwer023',
        createdAt:'2023-07-09 14:07',
        like:2
      },
      {
        id:12, 
        title:'아~~~~~대표님께 드릴 말씀이 있습니다.연락주세요.',
        content:'우리만의 시크릿',
        writerId:'secret18',
        createdAt:'2023-07-09 22:22',
        like:0
      },
      {
        id:13, 
        title:'리뷰 기능은 언제 생기나요~',
        content:'다 괜찮은데 리뷰 기능이 없네욘.',
        writerId:'goodluck7',
        createdAt:'2023-07-10 07:07',
        like:3
      },
      {
        id:14, 
        title:'제휴 사이트',
        content:'제휴 예약 사이트 있으면 좀 알려주세요~!',
        writerId:'tissue_tissue',
        createdAt:'2023-07-10 11:47',
        like:5
      },
      {
        id:15, 
        title:'왜 이름이 호텔고 인가요?',
        content:'누가 지었나요? 구립니다 ',
        writerId:'goorigoori78',
        createdAt:'2023-07-10 11:59',
        like:83
      }
    
    
    ]
    
    console.log('갠츈');
    function fetchPosts(page, limit, ordby){
        if(ordby === 'date'){
            board_posts.sort((a,b)=> new Date(a.createdAt) -new Date(b.createdAt));
        }else{
            board_posts.sort((a,b)=> new Date(b.createdAt) -new Date(a.createdAt));
        };


    let res = board_posts.slice((page-1)*limit, page*limit);

    return {
        status:200,
        data:{
            totalCount : board_posts.length,
            record : res
        }
    };
    };
//  한 페이지 당 보여줄 게시물 갯수
let limit = 10;

//특정 페이지의 게시물을 그려주는 함수

const getPosts = (page)=>{
    let res = fetchPosts(page, limit,'date');
    let tableDiv = document.querySelector('#table');
    let cnt = tableDiv.children.length -1 ;
    while(tableDiv.children.length > 1){
        tableDiv.removeChild(tableDiv.children[cnt]);
        cnt--;
    }

    for(let i =1; i < res.data.record.length; i++){
        let newRow = document.createElement('div')
        newRow.className ='table-row' 
    //    cell1 만들기
        let cell1 = document.createElement('div');
        cell1.className = 'cell cell10'
        cell1.textContent = res.data.record[i].id;
        newRow.appendChild(cell1);
        // cell2만들기
        let cell2 = document.createElement('div');
        cell2.className = 'cell cell55'
        cell2.textContent = res.data.record[i].title;
        newRow.appendChild(cell2);
        //cell3만들기
        let cell3 = document.createElement('div');
        cell3.className = 'cell cell15'
        cell3.textContent = res.data.record[i].writerId;
        newRow.appendChild(cell3);
        //cell4만들기
        let cell4 = document.createElement('div');
        cell4.className = 'cell cell20'
        cell4.textContent = res.data.record[i].createdAt;
        newRow.appendChild(cell4);

        tableDiv.appendChild(newRow)
    }
};

let res = fetchPosts(1, limit,'date');
let totalPage = Math.ceil(res.data.totalCount/ limit);

let btnWrap = document.querySelector('#btnWrap');
for(let i = 0; i < totalPage; i++){
    let newBtn = document.createElement('button');
    newBtn.textContent = i+1;
    newBtn.className = 'pageBtn'
    newBtn.onclick=()=>{
        getPosts(i+1);
    }
    btnWrap.append(newBtn);
}





for(let i = 0; i < res.data.record.length; i++){
    let newRow = document.createElement('div');
    newRow.className = 'table-row';

    let cell1 = document.createElement('div');
    cell1.className = 'cell cell10'
    cell1.textContent = res.data.record[i].id;
    newRow.appendChild(cell1);

    let cell2 = document.createElement('div');
    cell2.className = 'cell cell55'
    cell2.textContent = res.data.record[i].title;
    newRow.appendChild(cell2);

    let cell3 = document.createElement('div');
    cell3.className = 'cell cell15'
    cell3.textContent = res.data.record[i].writerId;
    newRow.appendChild(cell3);

    let cell4 = document.createElement('div');
    cell4.className = 'cell cell20'
    cell4.textContent = res.data.record[i].createdAt;
    newRow.appendChild(cell4);

    let tableDiv = document.querySelector('#table');
    tableDiv.appendChild(newRow);
}

