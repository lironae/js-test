fetch("sitedata.json")
.then(res => {
    return res.json()
})
.then( data => {
    
    let dataD = data;
    for(let i=0, len=dataD.length; i<len; i++){
        let markup = "";
        
            markup += "<div class='mainCell'><div class='cell'><span class='one'>ID: " + dataD[i].id + "</span>";
            markup += "<span class='one'>Site Name:" + dataD[i].name + "</span>";
            markup += "<span class='one'><a href='http://" + dataD[i].url + "' target='_blank'>Site Url: " + dataD[i].url + "</a></span></div>";
            for(let prop in dataD[i].subData){
                if(dataD[i].subData){
                markup += "<div class='cell'><span class='two'>ID: " + dataD[i].subData[prop]['id'] + "</span>";
                markup += "<span class='two'>Site Name:" + dataD[i].subData[prop]['name'] + "</span>";
                markup += "<span class='two'><a href='http://"+dataD[i].subData[prop]['url']+"' target='_blank'>Site Url:" + dataD[i].subData[prop]['url'] + "</a></span></div>";
                }
                for(let items in dataD[i].subData[prop]['subData']){
                    if(dataD[i].subData[prop]['subData']){
                    markup += "<div class='cell'><span class='three'>ID: " + dataD[i].subData[prop]['subData'][items]['id'] + "</span>";
                    markup += "<span class='three'>Site Name:" + dataD[i].subData[prop]['subData'][items]['name'] + "</span>";
                    markup += "<span class='three'><a href='http://"+dataD[i].subData[prop]['subData'][items]['url'] +"' target='_blank'>Site Url:" + dataD[i].subData[prop]['subData'][items]['url'] + "</a></span></div>";
                    }
                    for(let itemsB in dataD[i].subData[prop]['subData'][items]['subData']){
                        if(dataD[i].subData[prop]['subData'][items]['subData']){
                        markup += "<div class='cell'><span class='four'>ID: " + dataD[i].subData[prop]['subData'][items]['subData'][itemsB]['id'] + "</span>";
                        markup += "<span class='four'>Site Name:" + dataD[i].subData[prop]['subData'][items]['subData'][itemsB]['iname'] + "</span>";
                        markup += "<span class='four'><a href='http://" + dataD[i].subData[prop]['subData'][items]['subData'][itemsB]['url']+ "' target='_blank'>Site Url:" + dataD[i].subData[prop]['subData'][items]['subData'][itemsB]['url']+ "</a></span>";
                        markup += "<span class='four'>" + dataD[i].subData[prop]['subData'][items]['subData'][itemsB]['subData']+ "</span></div>";
                        }
                    }
                }
            }
            
           


        document.querySelector('#output-data').insertAdjacentHTML('beforeend', markup)
    }
   


})
.catch(error => console.log(error));