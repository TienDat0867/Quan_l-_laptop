import { urlserver, CSan_Pham, ISan_Pham, TINH_CHAT, MAU_SAC } from './common.js';
export const form_them_san_pham = async () => {
    let nha_sx_arr = await laynhasx();
    let nsx_options:string=``;
    nha_sx_arr.forEach(nsx=> nsx_options+=`<option value='${nsx.id}'>${nsx.ten}</option>`)

    let mausac_option:string=``;
    for (const key in MAU_SAC){
        mausac_option+=`<option value='${MAU_SAC[key]}'>${key}</option>`
    }

    let tinh_chat_option:string=``;
    for (let key in TINH_CHAT){
        tinh_chat_option+=`<option value='${TINH_CHAT[key]}'>${key}</option>`
    }
    return `
<form class='col-10 m-auto border border-primary p-2'>
    <div class='mb-3 d-flex'>
        <div class='col-6'>
            Tên SP <input id='ten' class='form-control border-primary' type='text'>
        </div>
        <div class='col-6'>
            Ngày <input id='ngay' class='form-control border-primary' type='date'>
        </div>
    </div>
    
    <div class='mb-3 d-flex'>
        <div class='col-6'>
            Giá gốc <input id='gia' class='form-control border-primary' type='number'>
        </div>
        <div class='col-6'>
            Giá KM <input id='gia_km' class='form-control border-primary' type='number'>
        </div>
    </div>
    
    <div class='mb-3 d-flex'>
        <div class='col-6'>
            Hình <input id='hinh' class='form-control border-primary' type='text'>
        </div>
        <div class='col-6'>
            Lượt xem <input id='xem' class='form-control border-primary' type='number'>
        </div>
    </div>
    
    <div class='mb-3 d-flex'>
        <div class='col-6'>
            Tính chất <select id='tinh_chat' class='form-control border-primary'>
                <!-- Dữ liệu của select này sẽ được thêm động -->
                ${tinh_chat_option}
            </select>
        </div>
        <div class='col-6'>
            Màu sắc <select id='mau_sac' class='form-control border-primary'>
                <!-- Dữ liệu của select này sẽ được thêm động -->
                ${mausac_option}
            </select>
        </div>
    </div>
    
    <div class='mb-3 d-flex'>
        <div class='col-6'>
            Nhà sản xuất <select id='id_nha_sx' class='form-control border-primary'>
                <!-- Dữ liệu của select này sẽ được thêm động -->
                ${nsx_options}
            </select>
        </div>
        <div class='col-6'>
            Cân nặng <input id='can_nang' class='form-control border-primary' type='text'>
        </div>
    </div>
    
    <div class='mb-3 d-flex'>
        <div class='col-6'>
            Ẩn hiện
            <input name='an_hien' value='0' type='radio'> Ẩn
            <input name='an_hien' value='1' checked type='radio'> Hiện
        </div>
        <div class='col-6'>
            Nổi bật
            <input name='hot' value='0' type='radio'> Bình thường
            <input name='hot' value='1' checked type='radio'> Nổi bật
        </div>
    </div>
    
    <button id='btn' class='btn btn-primary px-3'>Thêm</button>
</form>
`
}
const laynhasx = async ()=>{
    return fetch(urlserver+"/nha_sx").then( r =>r.json()).then( d => d);
}
export const them_san_pham = async () =>{
    let ten:string = (document.querySelector("#ten") as HTMLInputElement).value;
    let ngay:string = (document.querySelector("#ngay") as HTMLInputElement).value;
    let gia:string = (document.querySelector("#gia") as HTMLInputElement).value;
    let gia_km:string = (document.querySelector("#gia_km") as HTMLInputElement).value;
    let hinh:string = (document.querySelector("#hinh") as HTMLInputElement).value;
    let xem:string = (document.querySelector("#xem") as HTMLInputElement).value;
    let tinh_chat:string = (document.querySelector("#tinh_chat") as HTMLInputElement).value;
    let mau_sac:string = (document.querySelector("#mau_sac") as HTMLInputElement).value;
    let id_nha_sx:string = (document.querySelector("#id_nha_sx") as HTMLInputElement).value;
    let can_nang:string = (document.querySelector("#can_nang") as HTMLInputElement).value;
    let an_hien:string = (document.querySelector('[name=an_hien]:checked') as HTMLInputElement).value;
    let hot:string = (document.querySelector('[name=hot]:checked') as HTMLInputElement).value;
    let data = {ten:ten, ngay:ngay, gia:gia, gia_km:gia_km, hinh:hinh, xem:xem, tinh_chat:tinh_chat, mau_sac:mau_sac, id_nha_sx:id_nha_sx, can_nang:can_nang, an_hien:an_hien, hot:hot}
    let opt = {method:'post', body:JSON.stringify(data), headers:{'Content-type':'application/json'}}
    let kq = await fetch(urlserver+`/san_pham/`, opt).then( res=>res.json()).then(data=>data);
    document.location='san_pham_list.html';
}
export const list_san_pham = async (sosp:number)=>{
    let url = urlserver+`/san_pham/?_sort=-ngay&_limit=${sosp}`
    let data = await fetch(url).then( res => res.json()).then( data => data);
    let arr:ISan_Pham[] = data as ISan_Pham[];
    let str =``;
    arr.forEach( sp => str+= motsan_pham(sp));
    str = `
        <div id='listadminsp' class='listadminsp'>
            <h2> Quản lí sản phẩm
                <a href='san_pham_them.html' class='fload-end'>Thêm</a>
            </h2>
            <div id='data'>
                <div class='sp'>
                    <b>Hình</b>
                    <b>ID, Tên, Ngày</b>
                    <b>Giá & Trạng thái</b>
                    <b>Thông tin</b>
                    <b>Thao tác</b>
                </div>
            ${str}
            </div>
        </div>`;
    return str;
}
const motsan_pham = (sp:ISan_Pham)=> {return`
<div class='sp'>
    <span><img src='${sp.hinh}'</span>
    <span> ID: ${sp.id} <br> Tên: ${sp.ten} <br> Ngày: ${sp.ngay}
    </span>
    <span> Giá gốc: ${Number(sp.gia).toLocaleString(`vi`)} VNĐ<br>
           Giá KM: ${Number(sp.gia_km).toLocaleString(`vi`)} VNĐ<br>
           Ẩn hiện: ${sp.an_hien==false?'Đang ẩn':'Đang hiện'}<br>
           Hot : ${sp.hot==false?'Bình thường':'Nổi bật'}
    </span>
    <span> Màu sắc : ${sp.mau_sac} <br> Cân nặng : ${sp.can_nang} kg <br>
           Lượt xem: ${sp.xem} lượt<br> Tính chất: ${sp.tinh_chat}
    </span>
    <span>
        <a href='san_pham_sua.html?id=${sp.id}' class='btn btn-warning px-3 me-1 btnsua'>Sửa</a>
        <button idsp='${sp.id}' class='btn btn-danger px-3 btnxoa'>Xóa</button>
    </span>
</div>`
}
