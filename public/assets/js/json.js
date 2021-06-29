const data = "hewan.json";
const data1 = "hewan_landing.json";
const listMhs = document.querySelector('#mhs-list');
const listHwn = document.querySelector('#hwn-list');
var urlParams = new URLSearchParams(window.location.search);
var species = urlParams.get("species");

const getListMhs = () => {
    fetch(data)
        .then(response => {
            return response.json();
        }).then(responseJson => {
            console.log(responseJson.hewan);
            if (species == null) {
                showListMhs(responseJson.hewan);
            } else {
                showListMhsfromGender(responseJson.hewan);
            }
        }).catch(error => {
            console.error(error);
        });
}

 

const showListMhs = mhs => {
    listMhs.innerHTML = "";
    mhs.forEach(item => {
        listMhs.innerHTML += `
        <div class="row">
            <div class="col">
                <div class="card">
                    <div class="card-image">
                    <div class="wrapper1">
                    <div class="zoom-effect1">
                    <div class="kotak">
                    <img src="${item.gallery}"
                        class="img-fluid" alt="" style="border-radius: 10px; cursor: pointer;">
                    </div>
                    </div>
                    </div>
                    <div class="card-body">
                        <p>
                            Nama            : ${item.name}<br>
                            Tahun Lahir    : ${item.bornyear}<br>
                            Jenis Kelamin    : ${item.gender}<br>
                            Di vaksinasi   : ${item.isvaccinated}
                        </p>
                    <button class="btn  btn-sm tombol">Detail</button>
                    </div>
                </div>
              </div>
         </div>
        
        `
    });
}




const showListMhsfromGender = mhs => {
    listMhs.innerHTML = "";
    if (species == "Kucing") {
        species = "60c5e6d4b96cd62a91a0f755";
    } else {
        species = "60ccb5aab5bed10004d8caa7";
    }
    mhs.forEach(item => {
        console.log(species);
        if (item.species == species) {
            listMhs.innerHTML += `
            <div class="row">
            <div class="col">
                <div class="card">
                    <div class="card-image">
                        <div class="wrapper1">
                            <div class="zoom-effect1">
                                <div class="kotak">
                                <img src="${item.gallery}"
                                    class="img-fluid" alt="" style="border-radius: 10px; cursor: pointer;">
                                </div>
                             </div>
                         </div>
                        <div class="card-body">
                        <p>
                            Nama            : ${item.name}<br>
                            Tahun Lahir    : ${item.bornyear}<br>
                            Jenis Kelamin    : ${item.gender}<br>
                            Di vaksinasi   : ${item.isvaccinated}
                        </p>
                    <button class="btn  btn-sm tombol">Detail</button>
                    </div>
                </div>
              </div>
         </div>
            `
        }
    });
}
document.addEventListener('DOMContentLoaded', function () {
    getListMhs();
});


const getListHwn = () => {
    fetch(data1)
        .then(response => {
            return response.json();
        }).then(responseJson => {
            console.log(responseJson.hewan1);
            if (species == null) {
                showListHwn(responseJson.hewan1);
            } else {
                showListHwnfromGender(responseJson.hewan1);
            }
        }).catch(error => {
            console.error(error);
        });
}

 

const showListHwn = hwn => {
    listHwn.innerHTML = "";
    hwn.forEach(item => {
        listHwn.innerHTML += `
        <div class="row">
            <div class="col">
                <div class="card">
                    <div class="card-image">
                    <div class="wrapper1">
                    <div class="zoom-effect1">
                    <div class="kotak">
                    <img src="${item.gallery}"
                        class="img-fluid" alt="" style="border-radius: 10px; cursor: pointer;">
                    </div>
                    </div>
                    </div>
                    <div class="card-body">
                        <p>
                            Nama            : ${item.name}<br>
                            Tahun Lahir    : ${item.bornyear}<br>
                            Jenis Kelamin    : ${item.gender}<br>
                            Di vaksinasi   : ${item.isvaccinated}
                        </p>
                    <button class="btn  btn-sm tombol">Detail</button>
                    </div>
                </div>
              </div>
         </div>
        
        `
    });
}




const showListHwnfromGender = hwn => {
    listHwn.innerHTML = "";
    if (species == "Kucing") {
        species = "60c5e6d4b96cd62a91a0f755";
    } else {
        species = "60ccb5aab5bed10004d8caa7";
    }
    mhs.forEach(item => {
        console.log(species);
        if (item.species == species) {
            listHwn.innerHTML += `
            <div class="row">
            <div class="col">
                <div class="card">
                    <div class="card-image">
                        <div class="wrapper1">
                            <div class="zoom-effect1">
                                <div class="kotak">
                                <img src="${item.gallery}"
                                    class="img-fluid" alt="" style="border-radius: 10px; cursor: pointer;">
                                </div>
                             </div>
                         </div>
                        <div class="card-body">
                        <p>
                            Nama            : ${item.name}<br>
                            Tahun Lahir    : ${item.bornYear}<br>
                            Jenis Kelamin    : ${item.gender}<br>
                            Di vaksinasi   : ${item.isvaccinated}
                        </p>
                    <button class="btn  btn-sm tombol">Detail</button>
                    </div>
                </div>
              </div>
         </div>
            `
        }
    });
}
document.addEventListener('DOMContentLoaded', function () {
    getListHwn();
});

$("input").on("keyup", function(){
    $(".card, .card-image img p").filter(function(){
        $(this).toggle($(this).text().toLowerCase().indexOf($("input").val().toLowerCase()) > -1);
    });
})


// untuk halaman landing page

